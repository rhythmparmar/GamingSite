import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { AccountBox, Group, Person, Settings, Storefront } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <>
          <Box flex={1} padding={1} sx={{display:{xs:'none', sm:'block'}}} >
            <Box position='fixed'>
            <List >
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <HomeIcon/>
                  </ListItemIcon>
                  <ListItemText primary='Homepage'/>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <Group/>
                  </ListItemIcon>
                  <ListItemText primary='Group'/>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <Storefront/>
                  </ListItemIcon>
                  <ListItemText primary='Marketplace'/>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <Person/>
                  </ListItemIcon>
                  <ListItemText primary='Friends'/>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <Settings/>
                  </ListItemIcon>
                  <ListItemText primary='Settings'/>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <AccountBox/>
                  </ListItemIcon>
                  <ListItemText primary='Profile'/>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <SportsEsportsIcon/>
                  </ListItemIcon>
                  <ListItemText primary='Gaming collection'/>
                </ListItemButton>
              </ListItem>
        
            </List>
            
            </Box>
          </Box> 


    </>
  )
}

export default Sidebar
