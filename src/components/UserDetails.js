const UserDetails = ({user}) => {
  return (
    <div>
        <p>Name: {user.name}</p>
        <p>Gender: {user.gender}</p>
        <p>Age: {user.age}</p>
        {
        user.age >= 18
            ? 
            (
                <p>Você pode tirar a carteira de habilitação.</p>
            )  
            :
            (
                <p>Você não pode tirar a carteira de habilitação ainda.</p>
            )
        }
    </div>
  )
}

export default UserDetails