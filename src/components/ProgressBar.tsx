import LinearProgress from '@material-ui/core/LinearProgress'
import React, {FC, useEffect} from 'react'
import {useStorage} from "../hooks/useStorage"
import {createStyles, makeStyles} from "@material-ui/core/styles"

type PropsType = {
    file: any,
    setFile: any
}

const useStyles = makeStyles(() =>
    createStyles({
        bar: {
           width: "500px",
            "& .MuiLinearProgress-bar1Determinate": {
               backgroundColor: "#610909"
            }
        },
    }),
)

export const ProgressBar: FC<PropsType> = ({file, setFile}) => {
    const {url, progress} = useStorage(file)
    const classes = useStyles()

    useEffect(() => {
        if (url) {
            setFile(null)
        }
    }, [url, setFile])

    return (
        <LinearProgress className={classes.bar} variant="determinate" value={progress} />
    )
}
