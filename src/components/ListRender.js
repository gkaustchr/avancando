import {useState} from 'react'

const ListRender = () => {
    const [list] = useState(['Matheus', 'Marcos', 'Maria'])
    const [user, setUser] = useState([
        {id: 1, name:'Marta', age:24},
        {id: 2, name:'Pedro', age:65},
        {id: 3, name:'Thiago', age:43},
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)

        setUser((prevUser) => {
            return prevUser.filter((user) => randomNumber !== user.id);
        })
    }
  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {user.map((user) => (
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete Random User</button>
    </div>
  )
}

export default ListRender