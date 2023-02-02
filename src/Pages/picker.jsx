import React from 'react'
import { useState } from 'react';
import { ReactOneDriveFilePicker } from 'react-onedrive-filepicker';
const Onedrive = () => {
    const [file,setFile]=useState({})
   
    if(file.length>0){
       return  (
        <div className='dwld_div'>
        Download URL: 
        <a href={file}>Download URL :{file}</a>
        </div>
    )}
    

    return (
        <>

            <ReactOneDriveFilePicker
                clientID="a7ac2285-a318-45ff-b6f2-fd6d7115aee7"
                action="share"
                multiSelect={true}
                onSuccess={(res) => {
                    console.log("onsucess", res)
                    setFile(res.value[0]["@microsoft.graph.downloadUrl"]
                        )
                }}
                onCancel={(res) => {
                    console.log("coming data", res)
                }}
                onError={(err) => {
                    console.log(err)
                }}
            >
                <button className='pick_btn'>Open File Picker</button>
               
                
               
               


            </ReactOneDriveFilePicker>
           

        </>
    )
}

export default Onedrive