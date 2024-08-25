'use client'

import {useState} from "react";
import { deleteTodo } from "../actions";
import UpdateForm from "./UpdateForm";

const StatusBadge = ({status}) => <span className={`rounded-md font-normal p-[2px] float-right ${status == "pending" ? "bg-gray-400" : "bg-emerald-400"}`}>{status}</span>;

async function handleDelete(id, setAlive){
    setAlive(false);
    const res = await deleteTodo(id);
    if(res){
        alert("Successfully deleted todo.")
    }
    console.log(id);
}


export default function TodoItem({todo}){
    const {id, name, dueDate, details, status} = todo;
    const [alive, setAlive] = useState(true);
    const [updateAlive, setUpdateAlive] = useState(false);
    return (
        alive ? 
        <>
        {updateAlive ? <UpdateForm todo={todo} setAlive={setUpdateAlive}/> : null}
        <div className="h-40 border-black border-2 p-2 text-sm">
            <header className="font-bold">{name} <StatusBadge status={status}/></header>
            <span>Due date: {dueDate}</span>
            <hr className="border-t-gray-300 pb-0"/>
            <span className="max-h-16 block overflow-scroll mb-2">
                {details}
                </span>
            <div className="flex justify-between">
                <button className="rounded-md bg-orange-400 p-[3px]" onClick={() => setUpdateAlive(true)}>Update</button>
                <button className="rounded-md bg-red-400 p-[3px]" onClick={() => handleDelete(id, setAlive)}>Delete</button>
            </div>
        </div></> : null
    )
}