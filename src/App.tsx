import './App.css'
import Button from './components/button'
import Footer from './components/footer'
import Header from './components/header'
import RoutesWrapper from './components/routes'

const buttons = [
  { bgColor: 'red', buttonText: 'Red' },
  { bgColor: 'blue', buttonText: 'Blue' },
  { bgColor: 'pink', buttonText: 'Pink' },
  { bgColor: 'green', buttonText: 'Green' },
  { bgColor: 'yellow', buttonText: 'Yellow' },
  { bgColor: 'brown' },
  { bgColor: 'orange', buttonText: 'Orange' },
]

function App() {
  return (
    <>
    <RoutesWrapper />
      {/* {buttons.map((el: any) => (
        <Button bgColor={el.bgColor} buttonText={el.buttonText} />
      ))} */}
    </>
  )
}

export default App
