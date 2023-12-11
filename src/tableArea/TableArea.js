import React from 'react'

export const TableArea = (props) => {
  return (
    <div>
    {props.newList.length? <table className='table'>
        
            <tbody>
{
    props.newList?.map((item,index)=><tr key={index}>
        <td style={item.checked?{color:"red"}:null}>{item.name}</td>
        <td style={item.checked?{color:"red"}:null}>{item.email}</td>
        <td style={item.checked?{color:"red"}:null}>{item.password}</td>
    </tr>)
}
            </tbody>
        </table>:<img className='thingimage' alt='sdvsd' src='https://i.gifer.com/origin/f7/f748a43312487000f282968b97aa60fe_w200.webp'/>}
    </div>
  )
}
