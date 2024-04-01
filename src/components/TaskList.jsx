import {useContext} from 'react'
import TaskCard from './TaskCard'

import {TaskContext} from '../context/TaskContext'
//componente TaskList
//recibo propiedad tasks y deleteTask desde App
function TaskList() {

    const { tasks }= useContext(TaskContext)

    if (tasks.length === 0) {
        return <h1 className='text-white text-4xl font-bold text-center'>No hay tareas aun</h1>
    }
    return (
        //mostrar en pantalla la lista de tareas por su id
        <div className='grid grid-cols-4 gap-2'>
            {tasks.map((task) => (
                ///UI COMPONENTES TREE
                //pasamos propiedades con su valor propiedad = {valor}   
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    );
}


export default TaskList


