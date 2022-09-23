// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import { Box, Divider, Typography } from '@mui/material';
import React from 'react';

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <Box sx={{paddingTop:'1.5rem',paddingBottom:'2.5rem'}}>
      <Typography variant='h3'>Call a Friend</Typography>
      <Divider flexItem>Your friendly contact app</Divider>
    </Box>
  );
};

export default Header;
