import {useEffect, useState} from "react"
import {galleryFirestore, galleryStorage, timestamp} from "../firebase/config"

export const useStorage = (file) => {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect(() => {
        const collectionRef = galleryFirestore.collection('images')
        const storageRef = galleryStorage.ref(file.name)

        storageRef.put(file).on('state_changed', snap => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
            setProgress(percentage)
        }, error => {
            setError(error)
        }, async () => {
            const url = await storageRef.getDownloadURL()
            const createdAt = timestamp()
            await collectionRef.add({url, createdAt})
            setUrl(url)
        })
    }, [file])

    return {progress, url, error}
}