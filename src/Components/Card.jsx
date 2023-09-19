import { useState, useEffect } from 'react'

const Card = ()=>{
    const[descriptionMovie, setDescriptionMovie] = useState([])
//    const [url, setUrl]=useState()
    
   

     const getPostsBatman = async(url)=>{
        const response = await fetch(url)
        const data = await response.json()
     
        return setDescriptionMovie(data)
        
     
        
    }

    useEffect(()=>{
        const url = `https://www.omdbapi.com/?s=Batman&page=5&apikey=62b1e07d`
        getPostsBatman(url)
      
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