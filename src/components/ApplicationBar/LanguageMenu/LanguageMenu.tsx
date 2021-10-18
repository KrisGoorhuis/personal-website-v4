import { Menu, MenuItem, Divider } from '@mui/material'
import React from 'react'
import { LocalizeContextProps, withLocalize } from 'react-localize-redux'

interface LanguageMenuOwnProps extends LocalizeContextProps {
  anchor: null | HTMLElement
  open: boolean
  handleClose: () => void
  onLangChange?: (event: React.MouseEvent<HTMLElement>, languages: string) => void
}

const menuItem = {
  display: 'flex',
  justifyContent: 'center',
}


const LanguageMenu = (props: LanguageMenuOwnProps) => {

  const handleLanguageChange = (event: React.MouseEvent<HTMLElement>) => {
    props.setActiveLanguage(event.currentTarget.title)
    props.handleClose()

    if (props.onLangChange) {
      props.onLangChange(event, event.currentTarget.title)
    }
  }

  return (
    <Menu
      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      anchorEl={props.anchor}
      keepMounted
      open={props.open}
      // onClose={props.handleClose}
    >
      <MenuItem sx={menuItem} onClick={handleLanguageChange} title="en">English</MenuItem>
      <Divider />
      <MenuItem sx={menuItem} onClick={handleLanguageChange} title="fr">Français</MenuItem>
    </Menu>
  )
}

export default withLocalize(LanguageMenu)
