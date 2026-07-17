import React, { useContext, useEffect } from 'react'
import MyContext from '../../../../configs/myContext'

export default function SubChild1() {
  const store = useContext(MyContext)
    console.log("🚀 ~ SubChild1 ~ store:", store)
    const fName = 'Priyanshi'

    useEffect(() => {
      store.setTestData(fName)
    }, [])
    
  return (
    <div onClick={() => store.setTestData('mahek')}>SubChild1</div>
  )
}
