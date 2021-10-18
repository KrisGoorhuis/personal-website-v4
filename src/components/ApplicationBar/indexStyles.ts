import { makeStyles, createStyles, Theme } from "@mui/material"


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    toolbar: {
      height: 50
    },
    content: {

    },
    grow: {
      flexGrow: 1,
    },
    logo: {

    },
  }),
)

export default useStyles
