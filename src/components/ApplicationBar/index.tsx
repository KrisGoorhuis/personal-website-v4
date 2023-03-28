import { Construction } from '@mui/icons-material'
import Close from '@mui/icons-material/Close'
import Language from '@mui/icons-material/Language'
import { AppBar, Box, IconButton, ModalUnstyled, styled, Toolbar, Typography } from "@mui/material"
import React from "react"
import { LocalizeContextProps, Translate, withLocalize } from "react-localize-redux"
import transparentLogo from '../../assets/images/transparentLogoDark.png'
import { SupportedLanguageCodes } from "../../model"
import { translationPaths } from "../../translations/translations"
import LanguageMenu from "./LanguageMenu/LanguageMenu"


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
      <AppBar color="default" position="fixed" sx={{ bgcolor: `rgba(242, 166, 90, .7)` }}>
        <Toolbar variant="dense" >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }} >

            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: 45 }}>
              <img style={{ height: '100%', transform: 'scale(6)', marginLeft: 10 }} src={transparentLogo} alt="Logo" />
              {/* <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1, marginLeft: 2 }}>
                <Translate id={translationPaths.toolbar.title} />
              </Typography> */}
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Construction />
              <Typography style={{ margin: 10 }}>
                <Translate id={translationPaths.toolbar.construction} />
              </Typography>
              <Construction />
            </div>

            <div>
              {/* <a download style={{textDecoration: 'none'}} href={resume}>
                <IconButton style={{ marginRight: 10 }}>
                  <Description />
                  <Typography>
                    cv
                  </Typography>
                </IconButton>
              </a> */}

              <IconButton
                onClick={handleLanguageMenu}
              >
                <Language />
                <Typography>
                  {props.activeLanguage && props.activeLanguage.code}
                </Typography>
              </IconButton>
            </div>


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
          <IconButton style={{ position: 'absolute', right: 0 }}>
            <Close />
          </IconButton>
        </Box>
      </StyledModal>

    </div>
  )
}

export default withLocalize(ApplicationBar)
