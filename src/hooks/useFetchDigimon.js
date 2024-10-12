import { useEffect, useState } from "react"
import { fetchDigimons } from "../services/apiDigimon"


export const useFetchDigimon = () => {
    const [ digimons, setDigimons ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        const getData = async() => {
            try {
                const dataDigimon = await fetchDigimons()
                setDigimons(dataDigimon.content)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        getData()
    }, [])

    if(error) {
        throw error
    }

    return { digimons, loading }
}