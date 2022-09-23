// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import { Button, Card, CardContent, Divider, TextField } from "@mui/material";
import { useState } from "react";

const ContactForm = ({submitContact}) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const blankContact = {
        name : "", 
        phone : "", 
        email : "", 
        photo : "",
    };
    const [newContact, setnewContact] = useState(blankContact);

    const updateState = (e => {
        setnewContact((state) => ({...state, [e.target.id] : e.target.value}));
    })
    
    const submit = (e => {
        submitContact(newContact);
        setnewContact(blankContact)
    })
    return (
        <>
        <Card>
            <CardContent sx={{bgcolor:'grey.200'}}>
                <TextField variant="filled" fullWidth sx={{ marginBottom: "0.8rem" }} autoComplete="off" id="name" label="Name *" value={newContact.name} onChange={updateState}/>
                <TextField variant="filled" fullWidth sx={{ marginBottom: "0.8rem" }} autoComplete="off" id="phone" label="Phone *" value={newContact.phone} onChange={updateState}/>
                <TextField variant="filled" fullWidth sx={{ marginBottom: "0.8rem" }} autoComplete="off" id="email" label="Email *" value={newContact.email} onChange={updateState}/>
                <TextField variant="filled" fullWidth sx={{ marginBottom: "0.8rem" }} autoComplete="off" id="photo" label="Photo URL *" value={newContact.photo} onChange={updateState}/>
                <Divider />
                <Button sx={{marginTop:'0.8rem'}} variant="outlined" color="primary" type="submit" onClick={submit}>Add New</Button>
            </CardContent>
        </Card>
        </>
    );
}

export default ContactForm;