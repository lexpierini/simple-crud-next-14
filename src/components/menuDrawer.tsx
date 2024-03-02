import { MouseEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import InfoIcon from '@mui/icons-material/Info';

type MenuDrawerProps = {
  open: boolean,
  toggleMenu: (newOpen: boolean) => () => void
}

export default function MenuDrawer(props: MenuDrawerProps) {
  const { open, toggleMenu } = props
  const router = useRouter()

  const handleOnClick = (option: string) => {
    router.push(`/${option}`)
  }

  return (
    <Drawer open={open} onClose={toggleMenu(false)}>
      <Box width={200} mt={8} role="presentation" onClick={toggleMenu(false)} >
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleOnClick('')}>
              <ListItemIcon sx={{ ml: 1 }}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => handleOnClick('products')}>
              <ListItemIcon sx={{ ml: 1 }}>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary="Products" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => handleOnClick('about')}>
              <ListItemIcon sx={{ ml: 1 }}>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer >
  )
}