import { useEffect, useContext } from 'react';
import axios from 'axios';
import { CoordsContext  } from '../../context/CoordsContext';
import { ApiContext } from '../../context/ApiContext'
import { ApiFiveContext } from '../../context/ApiFiveContext';

const CallApi = () => {
    const {latitude, longitude} = useContext(CoordsContext);
    const { setApiInfo } = useContext(ApiContext);
    const { setApiFive } = useContext(ApiFiveContext)
    const API_KEY = '3475019ae4481bceaf9ea6dd818241fe';
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=es`;
    const API_URL_fiveDays = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=es`
    
    useEffect(() => {
        axios.GET(API_URL).then((res) => setApiInfo(res)); //! llamar a las dos por separado?
        axios.GET(API_URL_fiveDays).then((res) => setApiFive(res));
    }, [latitude, longitude])
}

export default CallApi;