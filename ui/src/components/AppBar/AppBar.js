import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Avatar } from '@mui/material';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MessageIcon from '@mui/icons-material/Message';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

import user from '../../assets/img/user.jpg';

export default function ButtonAppBar({ name, ratio, bool }) {
  return (
    <AppBar
      position='static'
      style={{ backgroundColor: '#2A2F32', color: '#B1B3B5' }}>
      <Toolbar>
        <Grid container alignItems='center'>
          <Grid item xs={ratio[0] || 4}>
            <Avatar alt='Remy Sharp' src={user} />
          </Grid>
          <Grid item xs={ratio[1] || 4}>
            <Typography component='p'>{name}</Typography>
          </Grid>
          <Grid
            container
            xs={ratio[2] || 4}
            alignItems='center'
            justifyContent={bool ? '' : 'flex-end'}>
            {bool ? (
              <>
                <Grid item style={{ margin: '0px 5px' }}>
                  <AddCircleOutlineIcon />
                </Grid>
                <Grid item style={{ margin: '0px 5px' }}>
                  <MessageIcon />
                </Grid>
                <Grid item>
                  <MoreVertIcon />
                </Grid>
              </>
            ) : (
              <>
                <Grid item style={{ margin: '0px 5px' }}>
                  <SearchIcon />
                </Grid>
                <Grid item>
                  <MoreVertIcon />
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
