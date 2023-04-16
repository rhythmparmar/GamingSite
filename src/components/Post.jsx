import React from 'react'
import { Box, Checkbox } from '@mui/material'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red, blue, green } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

const Post = () => {
     return (
          <>
               <Box flex={4} padding={2}>

                    <Card sx={{ margin: '5' }}>
                         <CardHeader
                              avatar={
                                   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        R
                                   </Avatar>
                              }
                              action={
                                   <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                   </IconButton>
                              }
                              title="Ron"
                              subheader="September 14, 2016"
                         />
                         <CardMedia
                              component="img"
                              height="20%"
                              image="https://wstatic-prod.pubg.com/web/live/static/og/img-og-pubg.jpg"
                              alt="BGMI coming soon"
                         />
                         <CardContent>
                              <Typography variant="body2" color="text.secondary">
                                   This is the team of BGMI India and we are pleased to announce that your favourite game BGMI is making a return entry into the Indian market.
                              </Typography>
                         </CardContent>
                         <IconButton aria-label="add to favorites">
                              <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} sx={{ color: 'red' }} />
                         </IconButton>
                         <IconButton aria-label="share">
                              <ShareIcon />
                         </IconButton>
                    </Card>

                    <Card sx={{ margin: '5' }}>
                         <CardHeader
                              avatar={
                                   <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                                        T
                                   </Avatar>
                              }
                              action={
                                   <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                   </IconButton>
                              }
                              title="Tyler Anderson"
                              subheader="September 14, 2016"
                         />
                         <CardMedia
                              component="img"
                              height="20%"
                              image="https://store-images.s-microsoft.com/image/apps.12368.13739535057760905.d290a0fa-1de3-43d4-9eb3-3453bfbc6707.2f43efce-f3a0-42b7-83fc-ceb34e8868e9"
                              alt="BGMI coming soon"
                         />
                         <CardContent>
                              <Typography variant="body2" color="text.secondary">
                                   Get ready for the Battle ground of the Champions. Call Of Duty Warzone 2.0 coming soon.
                              </Typography>
                         </CardContent>
                         <IconButton aria-label="add to favorites">
                              <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} sx={{ color: 'red' }} />
                         </IconButton>
                         <IconButton aria-label="share">
                              <ShareIcon />
                         </IconButton>
                    </Card>

                    <Card sx={{ margin: '5' }}>
                         <CardHeader
                              avatar={
                                   <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                                        C
                                   </Avatar>
                              }
                              action={
                                   <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                   </IconButton>
                              }
                              title="Claud Peterson"
                              subheader="September 14, 2016"
                         />
                         <CardMedia
                              component="img"
                              height="20%"
                              image="https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/11/genshin-impact-tier-list-characters-header.jpg"
                              alt="BGMI coming soon"
                         />
                         <CardContent>
                              <Typography variant="body2" color="text.secondary">
                                   Genshin is all set with the new 3.1.6 update. All patch notes will be availabe on the website soon. Happy playing
                              </Typography>
                         </CardContent>
                         <IconButton aria-label="add to favorites">
                              <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'blue' }} />} sx={{ color: 'red' }} />
                         </IconButton>
                         <IconButton aria-label="share">
                              <ShareIcon />
                         </IconButton>
                    </Card>


               </Box>
          </>
     )
}

export default Post
