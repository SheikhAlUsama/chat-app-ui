import React from 'react';
import { Grid, Avatar } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    height: '100px',
    width: '100%',
    borderBottom: '1px solid #2A2F32',
    margin: '0 2rem 10px',
  },
});

function Contact(props) {
  const { name, message } = props;
  const classes = useStyles();

  return (
    <Grid container alignItems='center' className={classes.root}>
      <Grid item xs={2}>
        <Avatar alt='Remy Sharp' src={''} />
      </Grid>
      <Grid item xs={10} style={{ color: 'white' }}>
        <Grid
          item
          xs={12}
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '2px',
          }}>
          {name}
        </Grid>
        <Grid item xs={12}>
          {message}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Contact;
