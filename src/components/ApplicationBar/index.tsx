import React from "react"
import { AppBar, IconButton, Toolbar } from "@mui/material"
import { LocalizeContextProps, withLocalize } from "react-localize-redux"
import LanguageMenu from "./LanguageMenu/LanguageMenu"

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

  console.log(props.activeLanguage)
  return (
    <div style={{ display: 'flex' }}>
      <AppBar color="default" position="fixed"      >
        <Toolbar variant="dense">
          <img src={"TODO"} alt="Kris' Logo" />
          {/* <Navigation /> */}
          <IconButton
            onClick={handleLanguageMenu}
          >
            {/* {props.activeLanguage.code.toUpperCase()} */}

            {JSON.stringify(props.activeLanguage)}
          </IconButton>
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
