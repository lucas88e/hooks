import { useState,useEffect } from "react";
import axios from "axios";
function useApi(apiUrl){
    const [data, setUrl] = useState([])
    useEffect(()=>{ const fetchData =  async () =>{
      const response = await axios.get(apiUrl)
            const productData = response.data
            setUrl(productData)}
   
   
        
        fetchData()
    },[apiUrl])

    return {data}
}




export default useApi