import {useState} from 'react'
const ManageData = () => {
    let someData = 10;
    const [number, setNumber] = useState(30)
    console.log('Varialve', someData)
    console.log('useState', number)
  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => someData = 15}>Muda Valor variável</button>
        </div>
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(45)}>Muda Valor useState</button>
        </div>
        
    </div>
  )
}

export default ManageData