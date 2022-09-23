import { Card, CardContent, Container, Divider, Grid, List } from '@mui/material';
import { useState } from 'react';
import './App.css';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import Header from './components/Header';

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const [contacts, setContacts] = useState(contactsJSON)

  const submitContact = data => {
    setContacts(state => [...state, data])
  }
  return (
    <div className="App">
      <Header />
      <Grid container spacing={2} sx={{padding:'1rem'}}>
        <Grid item xs={6}>
          <Container>
            <ContactForm submitContact={submitContact} />
          </Container>
        </Grid>
        <Grid item xs={6}>
          <Container>
            <Card>
              <CardContent sx={{bgcolor:'#dbf6f0'}}>
                <List dense={true}>
                  {
                    contacts.map((item, index) => (
                      <div key={index}>
                        {index === 0 || <Divider component="li" />}
                        <Contact data={item} />
                      </div>
                    ))
                  }
                </List>
              </CardContent>
            </Card>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
