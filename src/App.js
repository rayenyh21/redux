
import './App.css';
import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addTodo, deleteTodo,updateTodo ,completeTodo } from './actions/todoAction';
import {Modal,Button, } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  const [task,setTask]=useState("")
  const [filter,setFilter]=useState("all")
  const [edit,setEdit]=useState("all")
  const todos=useSelector(state=> state.todoReducer)
  const dispatch=useDispatch()
  return (
    <div className="App">
      

        <input type='text' placeholder="Add task.." onChange={(e)=>setTask(e.target.value)}/>
        <button onClick={() => dispatch(addTodo(task))} > Add task</button>
        <button onClick={() => setFilter("all") }>all</button>
        <button onClick={() => setFilter("Done")}>Done</button>
        <button onClick={() => setFilter("Undone")}>Undone</button>

       {filter==="all" ? todos.map (el=> <div>
      <h2> {el.title} </h2>  
      <Button variant="primary" onClick={handleShow}>
        Update
      </Button> <Modal show={show} onHide={handleClose}>
        
        <Modal.Body>
        <input type='text' placeholder="Add task.." value={edit} onChange={(e)=>setEdit(e.target.value)}/>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> {(updateTodo(edit,el.id));handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


      <button onClick={() => dispatch(deleteTodo(el.id))} > Delete task</button>

       </div>) : 
       filter==="Done" ? todos.filter(el=> el.complete === true)     
      .map(el=> <div>
        <h2> {el.title} </h2>  
        <button onClick={() => dispatch(deleteTodo(el.id))} > Delete task</button>
        <button onClick={() => dispatch(completeTodo(el.id))}>{ el.complete ? "done":"undone"}</button>
         </div>) : 
        todos.filter(el=> el.complete === false)     
      .map(el=> <div>
        <h2> {el.title} </h2>  
        <button onClick={() => dispatch(deleteTodo(el.id))} > Delete task</button>
        <button onClick={() => dispatch(completeTodo(el.id))}>{ el.complete ? "done":"undone"}</button>
         </div>) 

    



      }
    </div>
  );
} 

export default App;

