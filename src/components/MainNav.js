import * as React from 'react';
// import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import { Movie, Search, Tv, Whatshot } from '@mui/icons-material';
import { useEffect } from 'react';
import {useNavigate } from 'react-router-dom'

 
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
const navigate= useNavigate();

 useEffect(()=>{
    console.log(value);
        if (value===0){
            navigate('/')
        }else if(value===1) navigate("/movies")
        else if(value===2) navigate("/Series")
        else if(value===3) navigate("/Search")
        else{navigate("/")}
 },[value, navigate])

  return (
     <Box sx={{ width: "100%", position:'fixed', bottom:'0px',zIndex:100 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      
      >
        <BottomNavigationAction label="Trending" icon={<Whatshot />} />
        <BottomNavigationAction label="Movies" icon={<Movie />} />
        <BottomNavigationAction label="TV Series" icon={<Tv />} />
        <BottomNavigationAction label="Search" icon={<Search />} />
      </BottomNavigation>
      </Box>
  );
}
