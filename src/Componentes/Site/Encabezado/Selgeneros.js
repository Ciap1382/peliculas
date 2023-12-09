import { useEffect, useState } from 'react';
const Selgeneros=()=>{
    const [generos,setGeneros] = useState([]);  
    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/genre/movie/list?language=es",{
          headers:{
            Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjliMzgwNzM4YmNmODgxYTZjMmE2NzFhMmU2MWNlZSIsInN1YiI6IjYzNDJkODZjMzlhMWE2MDA3Y2E0YTcwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.htHzsJWnlAMRs3DSDKO2Ryj_dvPogO3vg5cI1riXjzs",
            "Content-Type":"application/json"
             }}).then((result)=>result.json()).then((data)=>{
                
                data.genres.map(item=>{ 
                
                  fetch("http://localhost/api/?id=gen&acc=agregargen&nombregenero="+item.name+"&tmdbId="+item.id)
                                })
                                 setGeneros(data.genres);  
                                               
                
      })
    },[])  
    return(
        <>
        <select>
             {generos.map(genero=>(
                            
                          <option value={genero.id}>{genero.name.toUpperCase()}</option>
                          ))}
        </select>
       
        </>
    )
}
export default Selgeneros