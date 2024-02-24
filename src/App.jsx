import { useState ,useEffect} from 'react'
import {fetch_api} from "../src/utils/Api"


function App() {
  useEffect(()=>{
    api_test();
  },[])
  const api_test =()=>{
    fetch_api("/movie/popular").then((res)=>{
      console.log(res)
    })
  }
  return (
    <>hi</>
  )
}

export default App
