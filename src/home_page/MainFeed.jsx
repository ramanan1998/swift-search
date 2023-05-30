import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import { Post } from './Post';

// const BoxEn = styled(Box)(({theme}) => ({
//   backgroundColor: theme.status.danger
// }))
export const MainFeed = ({setOpenRightBar}) => {
  return (
    <>
    <Box
      flex={6} 
      pt={3}
      pb={10}
      px={{xs : 0, sm : 2}}
      sx={{
          backgroundColor: "primary.light",
          height: "100vh",
          overflowY: "scroll",
          '&::-webkit-scrollbar': {
            width: '5px',
          },
          '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'gray',
            outline: '1px solid slategrey'
          }
        }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
        }} 
      >
        <Typography variant='body1'>
          Results for Search Query:
        </Typography>

        <Post setOpenRightBar={setOpenRightBar}/>
        <Post setOpenRightBar={setOpenRightBar}/>
        <Post setOpenRightBar={setOpenRightBar}/>
        <Post setOpenRightBar={setOpenRightBar}/>
        <Post setOpenRightBar={setOpenRightBar}/>
        <Post setOpenRightBar={setOpenRightBar}/>
        <Post setOpenRightBar={setOpenRightBar}/>
        <Post setOpenRightBar={setOpenRightBar}/>
        <Post setOpenRightBar={setOpenRightBar}/>
        <Post setOpenRightBar={setOpenRightBar}/>
      </Box>
    </Box>
    </>
  )
}
