import { Navigate, Route, Routes } from 'react-router-dom';
import TodoList from '../pages/TodoList/TodoList';
import TodoDetail from '../pages/TodoDetail/TodoDetail';
import Sidebar from '../components/layout/Sidebar';
import TodoAddUpdate from '../pages/TodoAddUpdate/TodoAddUpdate';

export const TaskListRoutes = () => {
  return (
    <>
      <div className="container">
        <Sidebar></Sidebar>
        <Routes>
          <Route path='/todos' element={<TodoList></TodoList>}></Route>
          <Route path='/todo' element={<TodoDetail></TodoDetail>}></Route>
          <Route path='/add-update-todo' element={<TodoAddUpdate></TodoAddUpdate>}></Route>

          <Route path="/" element={<Navigate to="/todos" />} />
        </Routes>
      </div>
    </>
  )
}
