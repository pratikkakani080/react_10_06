import './App.css'
import Button from './components/button'

const buttons = [
  { bgColor: 'red', buttonText: 'Red' },
  { bgColor: 'blue', buttonText: 'Blue' },
  { bgColor: 'pink', buttonText: 'Pink' },
  { bgColor: 'green', buttonText: 'Green' },
  { bgColor: 'yellow', buttonText: 'Yellow' },
  { bgColor: 'brown', buttonText: 'Brown' },
  { bgColor: 'orange', buttonText: 'Orange' },
]

function App() {
  return (
    <>
      {buttons.map((el: any) => (
        <Button bgColor={el.bgColor} buttonText={el.buttonText} />
      ))}
    </>
  )
}

export default App
