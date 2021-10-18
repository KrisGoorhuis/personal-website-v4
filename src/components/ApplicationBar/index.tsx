import React from "react"
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import { LocalizeContextProps, withLocalize } from "react-localize-redux"
import LanguageMenu from "./LanguageMenu/LanguageMenu"
import Language from '@mui/icons-material/Language'
import theme from "../../Theme/Main"


interface ApplicationBarProps extends LocalizeContextProps {
  children: any
}

const ApplicationBar = (props: ApplicationBarProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleLanguageMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)

  }

  return (
    <div style={{ display: 'flex' }}>
      <AppBar color="default" position="fixed"      >
        <Toolbar variant="dense" >
          <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}} >
            <img src={"TODO"} alt="Logo" />
            <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
              KrisG
            </Typography>
            <IconButton
              onClick={handleLanguageMenu}
            >
              <Language />
            </IconButton>
          </div>
          <LanguageMenu anchor={anchorEl} open={Boolean(anchorEl)} handleClose={handleCloseMenu} />

        </Toolbar>
      </AppBar>
      <main style={{ marginTop: 100 }}>
        {props.children}
      </main>
    </div>
  )
}

export default withLocalize(ApplicationBar)
