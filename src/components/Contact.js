// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    // console.log(data)
    return (
        <>
        <ListItem >
            <ListItemAvatar>
                <Avatar alt={data.name} src={data.photo}/>
            </ListItemAvatar>
            <ListItemText>
                <Typography variant='body2'>{data.name}</Typography>
                <Typography variant='body' component="div" sx={{ fontSize: 12 }} color="text.secondary">{data.phone}</Typography>
                <Typography variant='body' component="div" sx={{ fontSize: 12 }} color="text.secondary">{data.email}</Typography>
            </ListItemText>
        </ListItem>
        </>
    );
};

export default Contact;
