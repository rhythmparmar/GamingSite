import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, styled, Box, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import GamesIcon from '@mui/icons-material/Games';
import { Mail, Notifications } from '@mui/icons-material';

const Navbar = () => {

  const [open, setOpen] = useState(false)

  const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
  })

  const Search = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: '40%'
  }))

  const Icons = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '20px',
    alignItems: 'center'
  }))

  return (
    <>
      <AppBar position='sticky' sx={{bgcolor:'black'}}>
        <StyledToolbar>
          <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
            Gaming X
          </Typography>
          <GamesIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
          <Search><InputBase placeholder='search...' /></Search>
          <Icons>
            <Badge badgeContent={2} color='error' sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Mail />
            </Badge>
            <Badge badgeContent={5} color='error' sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Notifications />
            </Badge>
            <Avatar sx={{ width: '32px', height: '32px' }}
              src='https://i.dailymail.co.uk/1s/2022/08/26/17/61760545-0-image-a-324_1661531382096.jpg'
              onClick={() => setOpen(true)} />
          </Icons>

        </StyledToolbar>

        <Menu 
          open={open}
          onClose={() => setOpen(false)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My Account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </AppBar>
    </>
  )
}

export default Navbar
