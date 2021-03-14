import React from 'react'
import {createStyles, makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            flexGrow: 1,
            "& .MuiAppBar-colorPrimary": {
                backgroundColor: "#ffaeae",
            },
            "& .MuiPaper-elevation4": {
                boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.1),0px 4px 5px 0px rgba(0,0,0,0.1)"
            }
        },
        title: {
            flexGrow: 1,
            textAlign: "center",
            color: "#610909",
            fontStyle: "italic",
            fontWeight: "bolder",
            letterSpacing: "7px"
        },
    }),
)

export const Navbar = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" className={classes.title}>
                        Gallery
                    </Typography>
                    {/* <Button color="inherit">Login</Button>*/}
                </Toolbar>
            </AppBar>
        </div>
    )
}
