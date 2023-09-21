import { useEffect, useState } from "react";
import { apiKey } from "../config/key";
import Card from "./Card";
import { Link, useParams } from "react-router-dom";

export default function Detail() {
    const { id } = useParams()
    const [descriptionMovie, setDescriptionMovie] = useState([])
    useEffect(() => {
        const url = `http://www.omdbapi.com/?i=${id}&${apiKey}`

        fetch(url).then(function (response) {
            return response.json()
        }).then(function (data) {
            const dados = data
            console.log(dados.imdbID)
            console.log(dados)
            const { Title, Poster, Plot, Released } = dados
            const movie = {
                id,
                Title,
                Poster,
                Plot,
                Released
            }
            return setDescriptionMovie(movie)

        })
    }, [id])

    return (
        <div className="detail">
            <div className="justCard">
                <img id='img' src={descriptionMovie.Poster} />
                <div className="informationMovie">
                    <h1 id="title">{descriptionMovie.Title}</h1>

                    <span >Sinopse: {descriptionMovie.Plot}</span>
                    <br/>
                    <span>Lançado: {descriptionMovie.Released}</span>
                    <Link to='/'><button id="home">Voltar para o inicio</button></Link>
                </div>
            </div>
        </div>
    )
}
