import { UserCard } from "./components/UserCard"
import searchGray1 from '../assets/searchGray1.svg'
import { useEffect, useMemo, useState } from "react"
import { IUser, getUsers } from "./services/getUsers"

function App() {
  const [state,setState] = useState({
    users: [] as IUser[],
    keyword: '',
    userSelected: ''
  })
  const { userSelected, keyword, users } = state

  const filteredUsers = useMemo(() => {
    // console.log('Filtrando usuarios')
    return users.filter((user) => {
      const keywords = keyword.toLowerCase().split(' ')
      return keywords.some((word) => user.name.toLowerCase().includes(word))
    })
  },[keyword, users])

  useEffect(() => {
    getUsers().then((users) => {
      setState({...state,users})
    })
  },[])

  const selectUserCard = (user:IUser) => {
    setState({
      ...state,
      userSelected: user.id
    })
  }

  const changeKeyword = (keyword:string) => {
    setState({...state,keyword})
  }

  return (
    <div className='dpF fdC pd1em g1em'>
      <h1 className="mga">USUARIOS</h1>
      <div className="posR">
        <img className="posA h1em T0_5em L0_5em" src={searchGray1} alt=''/>
        <input 
          className="fs0_9em w16em br0_5em h2_2em pdL2em"
          type='text' 
          value={keyword}
          placeholder='Buscar usuario por nombre' 
          onChange={(e) => {
            changeKeyword(e.target.value)
          }}
        />
      </div>
      <div className="dpF fwW g1em">
        {
          filteredUsers.map((user) => (
            <UserCard 
              key={user.id} 
              user={user} 
              onClick={()=>{
                selectUserCard(user)
              }}
              isSelected={userSelected === user.id}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
