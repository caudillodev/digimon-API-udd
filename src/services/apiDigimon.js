import axios from 'axios'

export const fetchDigimons = async() => {
    try {
        const { data } = await axios.get("https://digi-api.com/api/v1/digim");
        if(!data) throw new Error('Error al capturar los datos de los digimons')
        return data
    } catch (error) {
        throw new Error('Error al capturar los digimons', error)
    }
}


//thruthy => {}, []
//falsy => false, 0, '', null, undefined, NaN