'use client'
import { addTodo } from "../actions";
import "../styles/form.css";


export default function AddForm(){
    // const [name, setName] = useState("");
    // const [details, setDetails] = useState("");
    // const [status, setStatus] = useState("");
    // const [dueDate, setDueDate] = useState(null);

    async function handleSubmit(e){
        e.preventDefault();
        const data = e.currentTarget;
        addTodo(data.name.value, data.details.value || "", data.due.value || null);
        window.location = window.location;
    }

    return (
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name: </label>
              <input name="name" id="name" placeholder="Todo Name" required></input>
            </div>

            <div>
                <label htmlFor="details">Details: </label>
                <textarea name="details" id="details" placeholder="Details"></textarea>
            </div>

            <div>
            <label htmlFor="due">Due Date: </label>
            <input name="due" id="due" placeholder="Due Date" type="date"></input>
            </div>
            <button type="submit">Add Todo</button>
          </form>
    )
}