const CarDetails = ({color, brand, km, newCar}) => {
  return (
    <div>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
            { newCar && <p>Este carro é ZERO</p>}
        </ul>
    </div>
  )
}

export default CarDetails