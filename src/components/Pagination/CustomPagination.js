import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

  const CustomPagination = ({setPage,numOfPages=10}) => {
    const handlePageChange= (page)=>{
        setPage(page);
        window.scroll(0,0);
    }
  return (
    <div  style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}>
         <ThemeProvider theme={darkTheme}>

   
     <Stack spacing={2}>
      <Pagination count={numOfPages} onChange={(e) => handlePageChange(e.target.textContent)} color='primary' />
    
    </Stack>
    </ThemeProvider> 
    </div>
  )
}

export default CustomPagination