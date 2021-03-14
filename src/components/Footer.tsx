import React, {FC} from "react"
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        git: {
            textDecoration: "none",
            color: "unset",
            fontStyle: "italic",
            fontWeight: "bold"
        },
        info: {
            fontWeight: "lighter",
            marginTop: "50px",
            fontSize: "20px",
            color: "#610909",
        }
    }),
)

export const Footer: FC = () => {
    const classes = useStyles()

    return <h5 className={classes.info}>Made by <a className={classes.git} href='https://github.com/Oskilochka'>oskilochka</a></h5>
}

