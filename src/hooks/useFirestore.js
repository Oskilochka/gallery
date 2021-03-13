import {useEffect, useState} from "react"
import {galleryFirestore} from "../firebase/config"

export const useFirestore = (collection) => {
    const [docs, setDocs] = useState([])

    useEffect(() => {
        const unsubscribe = galleryFirestore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let documents = []
                snap.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id})
                })
                setDocs(documents)
            })
        return () => unsubscribe()
    }, [collection])
    return {docs}
}