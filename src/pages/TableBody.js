import React, { useContext, useEffect, useState } from 'react'
import { BodyContext } from './home'

const TableBody = ({filter}) => {
    const {data} =useContext(BodyContext);
    const [list,setList] = useState([]);

    useEffect(() => {
      if(filter) {
        const rData =data.filter((item) => item.city == filter);
        setList(rData);
      } else {
        setList(data);
      }
    },[filter,data]);
  return (
    <>
        {list.length>0 && list.map((item,i) => (
            <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.address?.city}</td>
            </tr>
        ))}
    </>
  )
}

export default TableBody

