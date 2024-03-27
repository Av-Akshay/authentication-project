import { useEffect, useState } from 'react'

const useLocalStorageData = () => {
    const [localData, setLocalData] = useState({})
    useEffect(()=>{
       const localStorageData = JSON.parse(
        localStorage.getItem("token")
       ) 
       setLocalData(localStorageData)
    },[])
  return {
    localData
  }
}

export default useLocalStorageData