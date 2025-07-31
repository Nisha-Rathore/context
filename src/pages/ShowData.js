import React from 'react'
import TableBody from './TableBody'

const ShowData = () => {
  return (
    <div>
        <table>
           <thead>
             <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
            </tr>
           </thead>
           <tbody>
            <TableBody />
           </tbody>
        </table>
      
    </div>
  )
}

export default ShowData
