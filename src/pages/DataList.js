import React, { useContext } from 'react'
import { BodyContext } from './home'
import ShowData from './ShowData'

const DataList = () => {
    const { a } = useContext(BodyContext)
  return (
    <div>
      <h4>My Student List {a && `(${a})`}</h4>
      <ShowData />
    </div>
  )
}

export default DataList      





