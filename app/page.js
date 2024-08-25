import { getTodos } from "./actions";
import AddForm from "./components/AddForm";
import TodoItem from "./components/TodoItem";
import UpdateForm from "./components/UpdateForm";


export default async function Home() {
  // const [name, setName] = useState("");
  // const [details, setDetails] = useState("");
  // const [dueDate, setDueDate] = useState(Date());
  // const [status, setStatus] = useState("");

  // Fetch the todos
  const todos = await getTodos();

  return (
      <main className="pt-40 justify-center gap-48 flex h-[100vh]">
        <div className="w-[350px] h-[500px] border-black border-2 block p-4">
          <header className="text-center text-2xl mb-10">
            Add Todo
          </header>
          <AddForm/>
        </div>
        <div className="w-[350px] h-[500px] border-black border-2 block p-4 flex flex-col gap-4 overflow-scroll">
          {todos.map(item => <TodoItem key={item.id} todo={item}/>)}
        </div>
      </main>
  );
}
