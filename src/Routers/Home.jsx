import ButtonCreate from '../Components/ButtonCreate'
import ToDoCard from '../Components/ToDoCard'
import { useContext } from 'react'
import { Context } from '../Context/Context'


export default Home => {
  const { Reload, setReload} = useContext(Context)

  var local = JSON.parse(localStorage.getItem(`ToDos`))

  return (
    <nul className="home">
        <ButtonCreate/>
        <hr />
          {    
            localStorage.getItem(`ToDos`) ? local.map((local, index) => ( <ToDoCard key={index} lcal={local} ID={local.Id}/>
            )) : null}
            {Reload == true ? setReload(false) : null
          }
    </nul>
  )
}
