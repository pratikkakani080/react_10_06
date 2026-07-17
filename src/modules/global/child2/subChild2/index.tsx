import React, { useContext } from 'react'
import MyContext from '../../../../configs/myContext'

export default function SubChild2() {
  const store = useContext(MyContext)
  console.log("🚀 ~ SubChild2 ~ store:", store)
  
  return (
    <div>SubChild2</div>
  )
}
