'use client'
import { updateTodo } from "../actions"
import {useState} from "react";

export default function UpdateForm({todo, setAlive}){
    const {id, name, dueDate, details, status} = todo;

    async function handleSubmit(e){
        e.preventDefault();
        const data = e.currentTarget;
        await updateTodo(id,
            {
                id: id,
                name: data.name.value,
                details: data.details.value,
                status: data.status.value,
                dueDate: data.due.value
            }
        );
        window.location = window.location;
    }
    return(
        <div className="fixed bg-gray-300 border-gray-600 drop-shadow-lg shadow-md left-[765px] shadow-gray-600 block top-64 w-[375px] h-[300px] z-30 p-4">
            <header>Update Todo <button className="float-right" onClick={() => setAlive(false)}>X</button></header>
            <form className="text-sm" onSubmit={handleSubmit}>

            <div className="flex-row">
              <label htmlFor="name">Name: </label>
              <label htmlFor="status" className="mr-[5.2rem]">Status</label>
            </div>

            <div className="flex-row gap-0">
              <input name="name" id="name" defaultValue={name} required></input>
              <select name="status" id="status" className="w-32 text-center" defaultValue={status}>
                <option value="pending">pending</option>
                <option value="completed">completed</option>
              </select>
            </div>

            <div>
                <label htmlFor="details">Details: </label>
                <textarea name="details" id="details" placeholder="Details" className="h-20" defaultValue={details}></textarea>
            </div>

            <div>
            <label htmlFor="due">Due Date: </label>
            <input name="due" id="due" defaultValue={dueDate} type="date"></input>
            </div>
            <button type="submit" style={{background: "orange"}}>Update Todo</button>
            </form>
        </div>
    )
}