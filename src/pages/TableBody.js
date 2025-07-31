import React, { useContext } from 'react'
import { BodyContext } from './home'

const TableBody = () => {
    const {data} =useContext(BodyContext);
  return (
    <div>
        {(data ?? []).map((item,i) => (
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

