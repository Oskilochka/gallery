import React, {useState} from 'react'
import {ProgressBar} from "./ProgressBar"
import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'
import {createStyles, makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles(() =>
    createStyles({
        addBtn: {
            backgroundColor: "#ffaeae",
            margin: "10px 0px"
        }
    }),
)

export const UploadForm = () => {
    const [file, setFile] = useState(null)
    const [error, setError] = useState('')
    const classes = useStyles()
    const imgTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif']

    const toggle = (e: any) => {
        let selected = e.target.files[0]
        if (selected && imgTypes.includes(selected.type)) {
            setFile(selected)
            setError('')
        } else {
            setFile(null)
            setError('Select file with invalid type (png, jpg, jpeg)')
        }
    }

    return <>
        <input type='file' onChange={toggle} id="icon-button-file" style={{display: "none"}}/>
        <label onChange={toggle} htmlFor="icon-button-file">
            <Button className={classes.addBtn} color='secondary' variant="contained" aria-label="upload picture"
                    component="span">
                <AddIcon/>
            </Button>
        </label>
        {error && <span>{error}</span>}
        {file && <ProgressBar file={file} setFile={setFile}/>}
    </>
}
