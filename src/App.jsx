import { useState } from 'react'
import ProfileDescribe from './components/ProfileDescribe'
import Content from './components/Content'
import MidContent from './components/MidContent'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Content/>
    <Button/>
    <MidContent/>
    <ProfileDescribe/>
    </>
  )
}

export default App
