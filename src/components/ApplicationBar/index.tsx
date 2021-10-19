import React from "react"
import { AppBar, Box, IconButton, ModalUnstyled, styled, Toolbar, Typography } from "@mui/material"
import { LocalizeContextProps, Translate, withLocalize } from "react-localize-redux"
import LanguageMenu from "./LanguageMenu/LanguageMenu"
import Language from '@mui/icons-material/Language'
import { SupportedLanguageCodes } from "../../model"
import { translationPaths } from "../../translations/translations"


interface ApplicationBarProps extends LocalizeContextProps {
  children: any
}

const ApplicationBar = (props: ApplicationBarProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [modalOpen, setModalOpen] = React.useState(false);


  const handleClose = () => setModalOpen(false);

  const handleLanguageMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  
  const handleCloseMenu = (languageCode: SupportedLanguageCodes) => {
    setAnchorEl(null)

    if (languageCode === SupportedLanguageCodes.fr) {
      setModalOpen(true)
    }
  }



  const StyledModal = styled(ModalUnstyled)`
    position: fixed;
    z-index: 1300;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const Backdrop = styled('div')`
    z-index: -1;
    position: fixed;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-tap-highlight-color: transparent;
  `;

  const style = {
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    p: 2,
    px: 4,
    pb: 3,
  };



  return (
    <div style={{ display: 'flex' }}>
      <AppBar color="default" position="fixed"      >
        <Toolbar variant="dense" >
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }} >
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
      <main style={{ margin: 'auto', marginTop: 100 }}>
        {props.children}
      </main>

      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={modalOpen}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <h2 id="unstyled-modal-title"><Translate id={translationPaths.language.frenchModalTitle} /></h2>
          <p id="unstyled-modal-description"><Translate id={translationPaths.language.frenchModalBody} /></p>
        </Box>
      </StyledModal>

    </div>
  )
}

export default withLocalize(ApplicationBar)
