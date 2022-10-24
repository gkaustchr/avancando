import {useState } from 'react';
import './App.css';

import Logo from './assets/logo512.png'

import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessage from './components/ChangeMessage';
import UserDetails from './components/UserDetails';

function App() {
  const nome = 'Jeremias'
  const [name] = useState('Julia')
  const [message, setMessage] = useState()

  const user = [
    {id:1, name:'Thiago', age:31, gender: 'M'},
    {id:2, name:'Thiago', age:31, gender: 'M'},
    {id:3, name:'Thiago', age:31, gender: 'M'},
    {id:4, name:'Thiago', age:31, gender: 'M'},
  ]
  const car = [
    {id: 1, brand: 'Fiat', km: 123040, newCar: false, color: 'Branco'},
    {id: 2, brand: 'VW', km: 0, newCar: true, color: 'Prata'},
    {id: 3, brand: 'Renault', km: 987710, newCar: false, color: 'Preto'},
    {id: 4, brand: 'Kia', km: 0, newCar: true, color: 'Branco'},
    {id: 5, brand: 'Ford', km: 486087, newCar: false, color: 'Preto'},
  ]

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  function showMessage(){
    console.log('Evento do componente pai')
  }
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Import imgs do Public*/} 
      <div>
        <img src="/logo512.png" alt="" />
      </div>
      {/* Import imgs do SRC*/} 
      <div>
        <img src={Logo} alt="" />
      </div>
      <ManageData />
      <ListRender />
      { /* condicional */ }
      <ConditionalRender />
      { /* props */ }
      <ShowUserName name={name} />
      { /* Destructuring */ }
      <CarDetails brand="Fiat" km={100000} color="Preto"/>
      { /* Reutilização */ }
      {
        car.map((car) => (
          <CarDetails 
            key={car.id}
            brand={car.brand}
            km={car.km}
            color={car.color}
            newCar={car.newCar}
            />
        ))
      }

      { /* Fragments */ }
      <Fragments />

      { /* Children */ }
      <Container myValue="Valor da prop">
        <p>Texto de uma Children</p>
      </Container>

      { /* Executar Função */ }
      <ExecuteFunction myFunction={showMessage}/>

      { /* State lift */ }
      <Message msg={message} />
      <ChangeMessage handleMessage={handleMessage}/>

      { /* DESAFIO */ }
      {
        user.map((user) => (
          <UserDetails 
          key={user.id}
          user={user}/>
        ))
      }
    </div>
  );
}

export default App;
