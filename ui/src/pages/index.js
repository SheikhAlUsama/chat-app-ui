import React, { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import AppBar from '../components/AppBar/AppBar';
import Contact from '../components/Contact/Contact';
import Search from '../components/Search/Search';
import contacts from '../components/contacts/contacts';
import SearchBar from '../components/SearchBar/SearchBar';

const useStyles = makeStyles({
  sideBar: {
    backgroundColor: '#131C21',
    height: '100vh',
    overflowY: 'scroll',
    overflowX: 'hidden',
  },
  main: {
    backgroundColor: '#2A2F32',
    height: '100vh',
  },
});

const Index = () => {
  const classes = useStyles();
  const data = contacts();

  return (
    <Grid container>
      <Grid item xs={12} sm={4} className={classes.sideBar}>
        <AppBar ratio={[]} bool={true} />
        <Search />
        {data.map((contact, index) => (
          <Contact
            kay={index}
            name={contact.name}
            message={contact.messages[contact.messages.length - 1]}
          />
        ))}
      </Grid>
      <Grid item xs={0} sm={8} className={classes.main}>
        <AppBar name='Usama' ratio={[2, 8, 2]} bool={false} />
        <Grid container style={{ height: '80vh', padding: '2rem' }}>
          {data[0].messages.map((msg) => (
            <Typography
              component='p'
              style={{ color: 'white', width: '90%', textAlign: 'left' }}>
              {msg}
            </Typography>
          ))}
        </Grid>
        <SearchBar />
      </Grid>
    </Grid>
  );
};

export default Index;
