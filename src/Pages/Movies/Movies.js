import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Genres } from '../../components/Genres/Genres';
import CustomPagination from '../../components/Pagination/CustomPagination';
import  SingleContent from '../../components/SingleContent/SingleContent';
import useGenres from '../../Hooks/useGenre';
 

export const Movies = () => {
  const [content, setContent]= useState([]);
 
  const [page, setPage]= useState(1);
  const [numOfPages,setNumOfPages]= useState();

  const [selectedGenres, setSelectedGenres]= useState([]);
  const [genres, setGenres]= useState([]);

  const genreforUrl= useGenres(selectedGenres);

  

  const fetchTrending= async()=>{
    // console.log(process.env.REACT_APP_API_KEY);
    const {data}= await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${[process.env.REACT_APP_API_KEY]}&page=${page}&with_genres=${genreforUrl}`);

  
    if(data.results){
        setContent(data.results);
        setNumOfPages(data.total_pages);
    }
   
}

useEffect(()=>
{
    // console.log("page set ", page)
    fetchTrending()
    console.log("page changed", page)

        // eslint-disable-next-line
},[page, genreforUrl])


  return (
    < >
       <div>
         <span className="pageTitle">Movies</span>

            <Genres type="movie" selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} page={page} genres= {genres} setGenres={setGenres} setPage={setPage}/>
                <div className='trending'>
                        {
                          
                            content && content.map((c) => {

                              
                            return <SingleContent
                                key={c.id}
                                id={c.id}
                                poster={c.poster_path}
                                title={c.title || c.name}
                                    date= {c.first_air_date|| c.release_date}
                                    media_type={c.media_type}
                                    vote_average={c.vote_average}  />;
                            }
                                
                              
                            )
                        }

        
                </div>
                
                {numOfPages>1 && (<CustomPagination setPage={setPage} numOfPages={numOfPages}/>)}
           
       </div>
    </ >
  )
  
}

export default Movies