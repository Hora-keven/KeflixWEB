import { useState, useEffect } from 'react'

const Card = ()=>{
    const[descriptionMovie, setDescriptionMovie] = useState([])
//    const [url, setUrl]=useState()
    
   


    useEffect(()=>{
        
        const url = 'http://www.omdbapi.com/?s=Batman&page=2&apikey=62b1e07d'
     
        fetch(url).then(function (response) {
            return response.json()
        }).then(function (data) {
            return setDolar(data.Search[0])
        
        })

      
    }, [])
 
    return(
        <div className="cards">
            <div className="card">
                <img src="" alt="movie"/>
                <h1 className="titleMovie"></h1>
                <h3 className="descriptionMovie"></h3>
            </div>
        </div>
    )
}
export default Card;