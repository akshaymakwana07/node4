import './App.css'
import Login from './Components/Registration/Login';
import Register from './Components/Registration/Register';
import Todo from './Components/Todo'
import ViewTodo from './Components/Viewtodo';
import ForgotPassword from './Components/Registration/ForgotPassword';
import VerifyOtp from './Components/Registration/VerifyOtp';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  

  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Register/>}></Route>
    <Route path='/login' element={<Login/>}></Route>

    <Route path='/insertadmin' element={<Todo/>}></Route>
    <Route path="/viewadmin" element={<ViewTodo/>}></Route>
    <Route path="/ForgotPassword" element={<ForgotPassword/>}></Route>
    <Route path='/VerifyOtp' element={<VerifyOtp/>}></Route>

  
  </Routes>
  </BrowserRouter>
     
    
  )
}

export default App
