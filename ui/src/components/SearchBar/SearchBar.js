import React from 'react';
import { Grid, TextField, createTheme, ThemeProvider } from '@mui/material';
import { makeStyles } from '@mui/styles';

import MoodIcon from '@mui/icons-material/Mood';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicNoneIcon from '@mui/icons-material/MicNone';

const theme = createTheme({
  palette: {
    grey: {
      main: '#33383B',
    },
  },
  shape: {
    borderRadius: '5rem',
  },
});

const useStyles = makeStyles({
  root: { alignItems: 'center', color: 'white', padding: '10px' },
  justify: { display: 'flex', justifyContent: 'center' },
  textField: {
    backgroundColor: '#33383B',
    borderRadius: '5rem',
    '& .MuiOutlinedInput-input': { color: 'white', padding: '10px 1.5rem' },
  },
});

function SearchBar() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Grid container className={classes.root}>
        <Grid item xs={1} className={classes.justify}>
          <MoodIcon />
          <AttachFileIcon />
        </Grid>
        <Grid item xs={10}>
          <TextField
            fullWidth={true}
            placeholder='message'
            color='grey'
            focused
            className={classes.textField}
            type='comment'
          />
        </Grid>
        <Grid item xs={1} className={classes.justify}>
          <MicNoneIcon />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default SearchBar;
