import { useState, useContext } from 'react'

import { TaskContext } from '../context/TaskContext'


//recibe propiedad de App con el valor createTask 
function TaskForm() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const { createTask } = useContext(TaskContext)




    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(title, description)
        createTask({
            title,
            description
        });
        setTitle('');
        setDescription('');
    }
    return (
        <div className='max-w-md mx-auto'>
            <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4'>
                <h1 className='text-2xl font-bold text-white mb-3'>Crea tu tarea</h1>
                <input placeholder="Escribe tu tarea"
                    //ver lo que digita en el input mediante consola o capturar
                    onChange={(e) => setTitle(e.target.value)}
                    //que se resetee lo que escribio, que este limpio
                    value={title}
                    className='bg-slate-300 p-3 w-full mb-2'
                    //Que ya este el cursor parpadeando automaticamente
                    autoFocus
                />
                <textarea placeholder='Escribe la descripcion de la tarea'
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    className='bg-slate-300 p-3 w-full mb-2'
                ></textarea>
                <button className='bg-indigo-500 px-3 py-1 text-white'>Guardar</button>
            </form>
        </div>
    );
}

export default TaskForm