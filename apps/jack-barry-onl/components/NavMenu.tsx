import { IconProp } from '@fortawesome/fontawesome-svg-core'
import {
  faBars,
  faBook,
  faHome,
  faNewspaper
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  AppBar,
  Drawer,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Toolbar,
  Typography,
  useTheme
} from '@mui/material'
import Link from 'next/link'
import { MouseEventHandler, useState } from 'react'
import { useAppTheme } from '../contexts/app-theme'
import ButtonDarkModeToggle from './ButtonDarkModeToggle'

export default function NavMenu() {
  const theme = useTheme()
  const { mode } = useAppTheme()
  const [drawerOpen, setDrawerOpen] = useState(false)

  const closeDrawer = () => {
    setDrawerOpen(false)
  }

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev)
  }

  const backgroundColor =
    mode === 'dark' ? theme.palette.primary.dark : undefined

  return (
    <AppBar position="static" sx={{ backgroundColor }}>
      <Toolbar>
        <IconButton onClick={toggleDrawer}>
          <FontAwesomeIcon icon={faBars} />
        </IconButton>
        <NavMenuDrawer drawerOpen={drawerOpen} closeDrawer={closeDrawer} />
        <Typography sx={{ flexGrow: 1 }} />
        <ButtonDarkModeToggle />
      </Toolbar>
    </AppBar>
  )
}

interface NavMenuDrawerProps {
  drawerOpen: boolean
  closeDrawer: () => void
}
const NavMenuDrawer = ({ drawerOpen, closeDrawer }: NavMenuDrawerProps) => (
  <Drawer anchor="left" open={drawerOpen} onClose={closeDrawer}>
    <Paper sx={{ width: 320, maxWidth: '100%' }} elevation={0}>
      <MenuList dense>
        <NavMenuLink href="/" onClick={closeDrawer} text="Home" icon={faHome} />
        <NavMenuLink
          href="/blog"
          onClick={closeDrawer}
          text="Blog"
          icon={faNewspaper}
        />
        <NavMenuLink
          href="/about"
          onClick={closeDrawer}
          text="About"
          icon={faBook}
        />
      </MenuList>
    </Paper>
  </Drawer>
)

interface NavMenuLinkProps {
  href: string
  onClick: MouseEventHandler<HTMLLIElement>
  text: string
  icon: IconProp
}
const NavMenuLink = ({ href, onClick, text, icon }: NavMenuLinkProps) => {
  return (
    <Link passHref={true} href={href}>
      <MenuItem sx={{ py: 2, my: 0 }} onClick={onClick}>
        <ListItemIcon>
          <FontAwesomeIcon icon={icon} />
        </ListItemIcon>
        <ListItemText color="text.secondary">{text}</ListItemText>
      </MenuItem>
    </Link>
  )
}
