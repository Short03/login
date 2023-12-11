import React, { useRef, useState } from 'react'
import { TableArea } from '../tableArea/TableArea'

export const First = () => {
    let [chek,setChek]=useState(false)
   
    let [data,setData]=useState(
        {
    name:"",
    email:"",
    password:"",
    checked:''
        }
    )
    
    const [list,setList]=useState([])
   console.log(list)
    
    let sendData =(event)=>{
event.preventDefault()
data.name.length>4&&data.email.length>6&&data.password.length>6?setList([...list,data]):alert("Məlumat qısadır ")

setData({
    name:"",
    email:"",
    password:"",
})
setChek(false)

    } 
    return ( 
        <div className='section'>
            <div className='form-box'>
                <div className='form-value'>
                    <form action=''>
                        <h2>Login</h2>
                        <div className='input-box'>
                            <img className='img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCOaIqbSvdQ7toup4lC0i0jmX_Sdi1rXe-7gFDPJiiTZrOBJ97KUhXspDcdoVJIx6L6ak&usqp=CAU' alt='vdf'/>
                            <input type='text' id='name'  value={data.name}
                            onChange={(e)=>setData({...data,name:e.target.value})}
                            required
                             />
                            <label htmlFor="name">Name</label>
                            
                        </div>
                        <div className='input-box'>
                        <img className='img' src='https://png.pngtree.com/png-vector/20190927/ourmid/pngtree-email-icon-png-image_1757854.jpg' alt='dfvd'/>
                            <input type='email' id='email'  value={data.email}
                            onChange={(e)=>setData({...data,email:e.target.value})}
                            required
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className='input-box'>
                        <img className='img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTThqAbhIEROFEQzz58ADCrUuvALI3j-8Akfhnf3457DcjQTDJBJyw05FBNryap6X5CX4M&usqp=CAU' alt='fdvd'/>
                            <input type='password' id='password'  value={data.password}
                             onChange={(e)=>setData({...data,password:e.target.value})}
                             required 
                            />
                            <label htmlFor="password">Pasword</label>
                        </div>
                        <div className='forget'>
                            <input  onChange={(e)=>setChek(!chek)&setData({...data,checked:!chek})} checked={chek} type='checkbox' id='checkbox' />
                            
                            <label htmlFor="checkbox">Checked</label>
                        </div>
                        <button type='submit' onClick={(e)=>sendData(e)}>Log in</button>
                        <div className='register'>
                         <p>Don't have a accond <a href='#'>Register</a></p>
                        </div>


                    </form>

                </div>

            </div>
         {
                <TableArea
                newList={list}
               
                />
            }
        </div>
    )
}
