import * as React from 'react';
import { Grid, Input, InputAdornment, FormControl } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function InputWithIcon() {
  return (
    <Grid container justifyContent='center'>
      <FormControl
        variant='filled'
        style={{
          backgroundColor: '#2A2F32',
          outline: 'none',
          border: 'none',
          borderRadius: '5rem',
          width: '90%',
          marginTop: '1rem',
          padding: '0 0 .5rem 1rem ',
        }}>
        <Input
          id='input-with-icon-adornment'
          startAdornment={
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          }
          style={{
            color: 'white',
          }}
        />
      </FormControl>
    </Grid>
  );
}
