import React, { useEffect  }  from 'react'
import axios from 'axios'
import Chip from '@mui/material/Chip';
 
export const Genres = ({selectedGenres, setSelectedGenres, genres, setGenres, type, setPage}) => {


 

    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
      };
      const handleRemove = (genre) => {
        setSelectedGenres(
          selectedGenres.filter((selected) => selected.id !== genre.id)
        );
        setGenres([...genres, genre]);
         setPage(1);
      };
      
    let pending= false;
    const fetchGenres = async () => {
        pending= true;
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
        if(data.genres){
           
            setGenres(data.genres);
            pending=false;
        }
     
      };
    //   
      useEffect(() => {
        fetchGenres();
    
        return () => {
          setGenres({}); // unmounting
        };
        // eslint-disable-next-line
      }, []);

  return (
    <div style={{ padding: "6px 0" }}>

      { selectedGenres && selectedGenres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          color="primary"
          clickable
          size="small"
          onDelete={() => handleRemove(genre)}
        />
      ))}
     
     
      { 
      
    
      !pending  && genres.length &&   genres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          color="secondary"
          clickable
          size="small"
          onClick={() => handleAdd(genre)}
        />
      ))}
    </div>
  )
}
export default Genres