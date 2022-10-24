import { useState } from 'react'

const ConditionalRender = () => {
    const [x] = useState(false)
    const [name, setName] = useState('Matheus')
  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, Sim!</p>}
        {!x && <p>Se x for false, Sim!</p>}

        {
            name === 'João'
            ?
            (
                <div>
                    O Nome é João
                </div>
            )
            :
            (
                <div>
                    O Nome não é João
                </div>
            )
        }

        <button onClick={() => setName('João')}>Alterar Nome</button>
    </div>
  )
}

export default ConditionalRender