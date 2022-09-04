import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Avatar, Link } from '@mui/material';
import { NavLink } from 'react-router-dom';

const headerLogo = 'https://static10.tgstat.ru/channels/_0/e2/e2db1e0464d24e6c4cbcbd17ed634d11.jpg'

const Header = () => (
  <AppBar position="static">
    <Toolbar sx={{ backgroundColor: 'primary.dark', display: 'flex', justifyContent: 'space-between' }}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        sx={{ mr: 2 }}
      >
        <Avatar alt="logo" src={headerLogo} />
      </IconButton>
      <div>
        <Link color="#eee" marginX={2} component={NavLink} to="/main">Главная</Link>
        <Link color="#eee" component={NavLink} to="/info">Информация</Link>
      </div>
    </Toolbar>
  </AppBar>
)

export default Header
