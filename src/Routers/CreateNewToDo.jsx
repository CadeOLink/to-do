import { useState } from "react"
import { useNavigate } from "react-router-dom";

function CreateNewToDo(){
   var storagelocal = JSON.parse(localStorage.getItem('ToDos') || '[]');
   
   const [Title, setTitle] = useState('')
   const [Description, setDescription] = useState('')
   const [Id, setId] = useState(Math.random().toString(36).substr(2, 9))
   const navigate = useNavigate();

   function getDescription(e){
      setDescription(e.target.value) 
   }

   function getTitle(e){
      setTitle(e.target.value) 
   }

   function changeRouter(){
      navigate('/');
   }

   function storageToDos(){

      Description != "" && Title != "" ? storagelocal.push({Description: Description, Title: Title, Id: Id}) : alert("Preencha os campos!")
      localStorage.setItem(`ToDos`, JSON.stringify(storagelocal));
   }

   const CreateNewToDo = () => createNewToDo();

   return (
      <div className="createnewtodo">
            <div className="titlecreatenewtodo">
               <form>
                  <h1>Title</h1>
                  <textarea onChange={getTitle}/>
               </form>
            </div>
            <div className="descriptioncreatenewtodo">
               <form>
                  <h1>Description</h1>
                  <textarea onChange={getDescription}/>
               </form>     
            </div>
         <button className="btn-settodo" onClick={() => {storageToDos(); changeRouter()}}>Create</button>
      </div>
   )
}

export default CreateNewToDo