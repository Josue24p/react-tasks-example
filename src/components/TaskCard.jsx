/* 
Usar el useContext para acceder al contexto
mediante el nombre declarado TaskContext  */
import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'
import PropTypes from 'prop-types';


//recibo la propiedad desde App de deleteTask 
function TaskCard({ task }) {
  /* Ejemplo de como acceder al contexto */
  /* const valor = useContext(TaskContext)
  console.log(valor) */

  const { deleteTask } = useContext(TaskContext);


  return (
      <div className='bg-gray-800 text-white p-4 rounded-md'>
        <h1 className='text-xl font-bold capitalize'>{task.title}</h1>
        <p className='text-gray-500 text-sm'>{task.description}</p>
        {/* para ver el id de la tarea  en consola */}
        <button className='bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400' onClick={() => deleteTask(task.id)}>
          Eliminar Tarea
        </button>
      </div>

  )
}

TaskCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};
export default TaskCard
