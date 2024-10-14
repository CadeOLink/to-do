import { useContext } from "react"
import { Context } from "../Context/Context"


export default function ToDoCard(props){
   const { Reload, setReload} = useContext(Context)

   function deleteToDo(){
      var Storage = JSON.parse(localStorage.getItem(`ToDos`))
      Storage = Storage.filter(storage => storage.Id !== props.ID)
      localStorage.setItem(`ToDos`, JSON.stringify(Storage))
      setReload(!false)
   }

   return(
         <div className="ToDos">
            <div className="ToDo-title">
              <strong>Title</strong>{`: ${props.lcal.Title}`}
            </div>
            <div className="ToDo-description">
            <strong>Description</strong>{`: ${props.lcal.Description}`}
            </div>
            <button className="btn-delete" onClick={() => {deleteToDo()}}>Deletar</button>
         </div>
   )
}