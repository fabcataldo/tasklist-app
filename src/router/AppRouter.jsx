import { Route, Routes } from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage"
import {PublicRoute} from './PublicRoute'
import {PrivateRoute} from './PrivateRoute'
import {TaskListRoutes} from './TaskListRoutes'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={
                <PublicRoute>
                  <Routes>
                    <Route path="/*" element={<LoginPage />} />
                  </Routes>
                </PublicRoute>
              }
            />
            
            <Route path="/*" element={
              <PrivateRoute>
                <TaskListRoutes />
              </PrivateRoute>
            } />
        </Routes>
    )
}