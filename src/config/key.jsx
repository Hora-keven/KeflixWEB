export const apiKey = 'apikey=62b1e07d'

export default function imagePath(id){
    return `http://img.omdbapi.com/?i=${id}&${apiKey}&`
}