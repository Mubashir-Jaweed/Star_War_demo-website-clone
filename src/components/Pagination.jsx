import React from 'react'
import { useLocation} from 'react-router-dom'

const Pagination = () => {

    const location = useLocation()
    const pathname = location.pathname.replace("/", "");
  return (
    <div className='pagination'>
        <div className='page-cont'>
            <span className='page-h'>
                {pathname}
            </span>
            <div style={{display:"flex",justifyContent:"center",alignItems:'center',gap:"15px",border:"1px solid red"}}>

            </div>
        </div>
    </div>
  )
}

export default Pagination