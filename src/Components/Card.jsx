import { useState, useEffect } from 'react'
import imagePath, { apiKey } from '../config/key'
import { useParams } from 'react-router-dom'
import { Outlet, Link } from "react-router-dom";

const Card = ()=>{
    const[descriptionMovie, setDescriptionMovie] = useState([])
    const [serie, setSerie]=useState("Batman")
    useEffect(()=>{
        
        const url = `http://www.omdbapi.com/?s=${serie}&page=2&${apiKey}`
        fetch(url).then(function (response) {
            return response.json()
        }).then(function (data) {
            const dados = data['Search']
            console.log(dados[0].imdbID)
            return setDescriptionMovie(dados)
            
        
        })
     

      
    }, [])
 
    return(
     
        
      
        <div className="contentCards">  
            <div className="cards">{
            descriptionMovie.map(anything=>{
                return (
                <div className="card">
                    <Link to={`/details/${anything.imdbID}`} ><div className="image"><img src={imagePath(anything.imdbID)} alt="batman" /></div></Link>
                </div>)
                })
            }
            </div>
        </div>   
            
    )
}

export default Card;