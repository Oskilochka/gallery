import React, {FC} from "react"
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        info: {
            fontWeight: 600,
            margin: "30px 0px",
            fontSize: "30px",
            color: "#610909",

        }
    }),
)

export const Title: FC = () => {
    const classes = useStyles()
    return <h5 className={classes.info}>Add your favourite picture</h5>
}

