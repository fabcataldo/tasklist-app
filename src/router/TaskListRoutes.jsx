import { Navigate, Route, Routes } from 'react-router-dom';
import TodoList from '../pages/TodoList/TodoList';
import TodoDetail from '../pages/TodoDetail/TodoDetail';

export const TaskListRoutes = () => {
  return (
    <>
      <div className="container">
        <Routes>        
          <Route path='/todos' element={<TodoList></TodoList>}></Route>
          <Route path='/todo' element={<TodoDetail></TodoDetail>}></Route>

          <Route path="/" element={<Navigate to="/todos" />} />
        </Routes>
      </div>
    </>
  )
}
