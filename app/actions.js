'use server'
import {db} from "./fbconfig";
import {collection, addDoc, getDocs, deleteDoc, where, serverTimestamp, query, orderBy, doc, updateDoc} from 'firebase/firestore';

// Add a new todo to the database
async function addTodo(name, details, dueDate) {
  try{
    const docRef = await addDoc(collection(db, "todos"), {
      name: name,
      details: details,
      dueDate: dueDate,
      status: "pending",
      createdAt: serverTimestamp(),
    })
    return true;
  }catch(err){
    console.log(err);
    return false;
  }
}

// Fetches all todos from the database
async function getTodos(){
  const todosList = collection(db, "todos");
  // Query all todos from the collection
  const res = await getDocs(query(todosList, orderBy("createdAt", "desc")));
  const todos = []
  // populate the todos array with data from the database
  res.forEach((item) => {
    const data = item.data();
    todos.push({id: item.id, ...data});
  })
  return todos;
}

// Deletes a single todo by id
async function deleteTodo(todoId) {
  try{
    await deleteDoc(doc(db, "todos", todoId));
    return todoId;
  }catch(err){
    console.log(err);
    return null;
  }
}

async function updateTodo(todoId, newTodo){
  try{
    const todoRef = doc(db, "todos", todoId);
    
    console.log(todoRef);
    await updateDoc(todoRef, {...newTodo});
  }catch(err){
    console.log(err);
    return false;
  }
}

export {addTodo, deleteTodo, getTodos, updateTodo}