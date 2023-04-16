import { Box, Typography, Avatar, AvatarGroup, ImageList, ImageListItem } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <>
      <Box flex={2} padding={4} sx={{ display: { xs: 'none', sm: 'block' } }}>
        <Box position='fixed' width={500}>
          <Typography variant='h6' fontWeight='100'>Online Friends</Typography>
          <AvatarGroup max={20}>
            <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeuBfEFCjbdnfEYIE_BVX33Y07b5xhOoldDg&usqp=CAU" />
            <Avatar alt="Travis Howard" src="https://t3.ftcdn.net/jpg/05/16/36/14/360_F_516361406_EanyWUKdEA1TaahDGuEstt23e6W1camE.jpg" />
            <Avatar alt="Cindy Baker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7l6nJt3R2zpOD4-6rlJtCpufSw1Nam82-og&usqp=CAU" />
            <Avatar alt="Agnes Walker" src="https://pbs.twimg.com/media/BcINeMVCIAABeWd.jpg" />
            <Avatar alt="Anji" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2BkiSsVkTIKH9omaJLrdaRDg2bdvMXCsswg&usqp=CAU" />
            <Avatar alt="Suji" src="https://i0.wp.com/thatrandomagency.com/wp-content/uploads/2020/05/0.jpg?resize=500%2C500&ssl=1" />
            <Avatar alt="Matru" src="https://i.redd.it/39sunkhvpw341.jpg" />
            <Avatar alt="Birju" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfQW3Cezkxd2fZQ2BEAB992KYb1ZxG1LPFqw&usqp=CAU" />
            <Avatar alt="Sanju" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeORFj0lmb6Qjk7OnP-QGdjXgU7c4c6Pt7ZQ&usqp=CAU" />
            <Avatar alt="Ben" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoq0f1tSU2b8opZaApGh5tl2FreFb52dyo6Q&usqp=CAU" />
            <Avatar alt="Rocky" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpxcMQRH4BuOUQqVN74eaf-R4aMAhHOcSrKw&usqp=CAU" />
          </AvatarGroup>

          <Typography variant='h6' fontWeight={100}>Latest Pictures</Typography>
          <ImageList cols={3} rowHeight={150} gap={4}>
            <ImageListItem>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwH-No8yVIrAW_w2na5kMNmX7ODUTuFApGmw&usqp=CAU' />
            </ImageListItem>
            <ImageListItem>
              <img src='https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/08/best-free-pc-games.jpg' />
            </ImageListItem>
            <ImageListItem>
              <img src='https://www.techlegends.in/wp-content/uploads/2016/09/total_overdose.jpg' />
            </ImageListItem>
            <ImageListItem>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBbt8IMYDEpCCwgM5tlNKhEdxJovPki9uUlA&usqp=CAU' />
            </ImageListItem>
            <ImageListItem>
              <img src='https://cdn.akamai.steamstatic.com/steam/apps/1593500/capsule_616x353.jpg?t=1642526157' />
            </ImageListItem>
            <ImageListItem>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI_vn-FJPA6lHGWvo0p8VEoOc8RYaiX8tQrQ&usqp=CAU' />
            </ImageListItem>
            <ImageListItem>
              <img src='https://assets1.ignimgs.com/2018/10/25/rdr2-1600-1540463299681.jpg' />
            </ImageListItem>
            <ImageListItem>
              <img src='https://cdn.cloudflare.steamstatic.com/steam/apps/271590/capsule_616x353.jpg?t=1678296348' />
            </ImageListItem>
            <ImageListItem>
              <img src='https://www.kotaku.com.au/wp-content/uploads/sites/3/2022/12/17/df14267b6961d223cf14925afe5ac97b.jpg?quality=80&resize=1280,720' />
            </ImageListItem>
            
            
          </ImageList>

        </Box>
      </Box>
    </>
  )
}

export default Rightbar
