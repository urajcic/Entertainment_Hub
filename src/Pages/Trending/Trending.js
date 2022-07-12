import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CustomPagination from '../../components/Pagination/CustomPagination';
import  SingleContent from '../../components/SingleContent/SingleContent';
import './Trending.css'


function Trending() {

    const [content, setContent]= useState([]);

    const [page, setPage]= useState(1);

   

    const fetchTrending= async()=>{
        // console.log(process.env.REACT_APP_API_KEY);
        const {data}= await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${[process.env.REACT_APP_API_KEY]}&page=${page}`);

        //  console.log(data);
        if(data.results){
            setContent(data.results);
        }
       
    }

    useEffect(()=>
    {
        // console.log("page set ", page)
        fetchTrending()
},[page])

  return (
    <div>
         <span className="pageTitle">Trending</span>

                <div className='trending'>
                        {
                            content && content.map((c) => {
                            return <SingleContent
                                key={c.id}
                                id={c.id}
                                poster={c.poster_path}
                                title={c.title || c.name}
                                    date= {c.first_air_date|| c.first_release_date}
                                    media_type={c.media_type}
                                    vote_average={c.vote_average}  />;
                            }
                                
                              
                            )
                        }

        
                </div>
            <CustomPagination setPage={setPage}/>
    </div>
  )
}

export default Trending