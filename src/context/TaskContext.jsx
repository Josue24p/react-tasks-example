import { createContext, useState, useEffect } from "react";
import { tasks as data } from '../data/tasks';
import PropTypes from 'prop-types'


//nombre del contexto
export const TaskContext = createContext();

//componente que va englobar todos
export function TaskContextProvider(props) {
    //contiene la lista de las tareas
    //es el estado
    const [tasks, setTasks] = useState([]);

    //Cuando carga el componente quiero que guardes 
    //los datos de la tarea 'data' en setTasks en un array
    //actualziando el estado
    useEffect(() => {
        setTasks(data)
    }, []);

    function createTask(task) {
        //[...tasks] //es copiar todos los elementos anteriores
        setTasks([...tasks, { //objeto nuevo
            title: task.title,
            id: tasks.length,
            description: task.description
        }])
    }

    function deleteTask(taskId) {
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    return (
        <TaskContext.Provider 
        value={{
            tasks,
            deleteTask,
            createTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}
TaskContextProvider.propTypes = {
    children: PropTypes.node // Hacer que children sea opcional
  };
