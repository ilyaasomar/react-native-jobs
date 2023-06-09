import { useState, useEffect } from "react";
import axios from "axios";
import {RAPID_API_KEY} from "@env"
const rapidApiKey = RAPID_API_KEY
const useFetch = (endpoint,query) => {
    const [date, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const axios = require("axios");

    const options = {
      method: 'GET',
      url: `https://jsearch.p.rapidapi.com/search/${endpoint}`,
      headers: {
        'X-RapidAPI-Key': 'd942561f50msh3c03ed234072d22p16298ajsn830cb23ad5e7',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
      },
      params: {...query},
    };
    
    const fetchData = async()=>{
        setIsLoading(true);
        try {
            const response = await axios.request(options)
            setData(response.data.data)
            setIsLoading(false)
        } catch (error) {
            setError(error)
            alert("Something went wrong")
        } finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
      fetchData()
    }, [])

    const refetch = ()=>{
        setIsLoading(true);
        fetchData();
    }

    return {data, isLoading, error, refetch}
    
}
export default useFetch