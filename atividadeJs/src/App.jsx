import { useState } from 'react'
import "./App.css"
import img1 from './assets/lampada_acesa.jpg'
import img2 from './assets/luz_apagada.jpg'


function App() {
  const [lampState, setlamp] = useState(false);

  
  const handleClick = () => {setlamp(!lampState);};
  return (
    <>
    <button onClick={handleClick}>
        {lampState ? 'Apagar' : 'Acender'}
      </button>
  
      <img src={lampState ? img1 : img2} alt="Lâmpada" />
    </>
  )
}

export default App