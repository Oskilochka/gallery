import LinearProgress from '@material-ui/core/LinearProgress';
import React, {FC, useEffect} from 'react';
import {useStorage} from "../hooks/useStorage";

type PropsType = {
    file: any,
    setFile: any
}

export const ProgressBar: FC<PropsType> = ({file, setFile}) => {
    const {url, progress} = useStorage(file)

    useEffect(() => {
        if (url) {
            setFile(null)
        }
    }, [url, setFile])


    return (
        <LinearProgress variant="determinate" value={progress} />
    )
}
