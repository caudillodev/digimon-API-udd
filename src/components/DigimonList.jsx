import { useEffect, useState } from "react"
import { fetchDigimons } from "../services/apiDigimon"
import { CardDigimon } from "./CardDigimon"


export const DigimonList = () => {
    const [ digimons, setDigimons ] = useState([])

    useEffect(() => {
        const getData = async() => {
            const digimonData = await fetchDigimons()
            setDigimons(digimonData.content)
        }

        getData()
    }, [])

    return (
        <>
            {
                digimons.map((digimon) => (
                    <div key={(digimon.id)}>
                        <CardDigimon digimon={digimon} />
                    </div>
                ))
            }
        </>
    )
}