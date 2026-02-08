import React, { useEffect, useState } from 'react'
import ReactMarkDown from 'react-markdown'

const MarkDownEditor = () => {
    const[markDown,setMarkDown] = useState("");
    const[previewText ,setPreviewText]=useState("");
    const[loading,setLoading] = useState(false);

useEffect(()=>{
  setLoading(true);
  const timer = setTimeout(()=>{
    setPreviewText(markDown);
    setLoading(false);
  },500);
  return ()=> clearTimeout(timer);
},[markDown]);

  return (
    <div>
      <textarea  className='textarea' value={markDown} onChange={(e)=>setMarkDown(e.target.value)} placeholder='write here'/>
        <div className='preview'>
          {
            loading ? (
              <div className='loading'>Loading...</div>
            ) : ( 
              <ReactMarkDown>{previewText}</ReactMarkDown>
            )
          }
        </div>
    </div>
  )
}

export default MarkDownEditor
