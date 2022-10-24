const ChangeMEssage = ({handleMessage}) => {
    const messages = ['Ola', 'Tudo bem?', 'Funcionou', 'Adeus', 'Bye Bye']
  return (
    <div>
        <button onClick={() => handleMessage(messages[0])}>1</button>
        <button onClick={() => handleMessage(messages[1])}>2</button>
        <button onClick={() => handleMessage(messages[2])}>3</button>
        <button onClick={() => handleMessage(messages[3])}>4</button>
        <button onClick={() => handleMessage(messages[4])}>5</button>
    </div>
  )
}

export default ChangeMEssage