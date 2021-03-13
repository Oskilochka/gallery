import React, {useState} from 'react'
import {ProgressBar} from "./ProgressBar"
import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button';

export const UploadForm = () => {
    const [file, setFile] = useState(null)
    const [error, setError] = useState('')

    const imgTypes = ['image/png', 'image/jpg', 'image/jpeg']

    const toggle = (e: any) => {
        let selected = e.target.files[0]
        if (selected && imgTypes.includes(selected.type)) {
            setFile(selected)
            setError('')
        } else {
            setFile(null)
            setError('Select image with invalid type (png, jpg, jpeg)')
        }
    }


    return (
        <div>
            <div>
                {error && <span>{error}</span>}
                {file && <ProgressBar file={file} setFile={setFile}/>}
            </div>
            <input type='file' onChange={toggle} id="icon-button-file" style={{display: "none"}}/>
            <label onChange={toggle} htmlFor="icon-button-file">
                <Button color="primary" variant="contained" aria-label="upload picture" component="span">
                    <AddIcon/>
                </Button>
            </label>

        </div>
    )
}
