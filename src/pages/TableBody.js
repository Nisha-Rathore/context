import React, { useContext, useEffect, useState } from 'react'
import { BodyContext } from './home'

const TableBody = ({filter}) => {
    const {rowData} =useContext(BodyContext);
    const [list,setList] = useState(rowData);

    useEffect(() => {
      if(filter) {
        const rData =rowData.filter((item) => item.city == filter);
        setList(rData);
      } else {
        setList(rowData);
      }
    },[filter]);
  return (
    <div>
        {(list ?? []).map((item,i) => (
            <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.city}</td>
            </tr>
        ))}
    </div>
  )
}

export default TableBody

