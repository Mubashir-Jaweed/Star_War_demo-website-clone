import React, { useEffect, useState } from 'react'
import { useLocation} from 'react-router-dom'
import axios from 'axios';

const Pagination = () => {

    const location = useLocation()
    const pathname = location.pathname.replace("/", "");

    const [data, setData]=useState('')
    const [error, setError]=useState('')


    const getData = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/people/1`);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(()=>{
      getData()
    },[])

    console.log(data)
  return (
    <div className='pagination'>
        <div className='page-cont'>
            <span className='page-h'>
                {pathname}
            </span>
            <div style={{display:"flex",justifyContent:"center",alignItems:'center',gap:"15px",border:"1px solid red"}}>
              {data?'' 
              :'Loading'}
            </div>
        </div>
    </div>
  )
}

export default Pagination