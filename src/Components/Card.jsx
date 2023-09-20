import { useState, useEffect } from 'react'
import imagePath, { apiKey } from '../config/key'

const Card = ()=>{
    const[descriptionMovie, setDescriptionMovie] = useState([])
    const [serie, setSerie]=useState("Batman")
    const [idImg, setIdImg]=useState("")
    useEffect(()=>{
        
        const url = `http://www.omdbapi.com/?s=${serie}&page=2&${apiKey}`
        fetch(url).then(function (response) {
            return response.json()
        }).then(function (data) {
            console.log(data)
            const dados = data['Search']
            console.log(dados[0].imdbID)
            
            return setDescriptionMovie(dados)
        
        })
     

      
    }, [])
 
    return(

        <div className="contentCards">  
            <div className="cards">{
            descriptionMovie.map(batman=>{
                return (
                <div className="card">
                    <a href=""><div className="image"><img src={imagePath(batman.imdbID)} alt="batman" /></div></a>
                </div>)
                })
            }
            </div>
        </div>   
                       
    )
}
export default Card;