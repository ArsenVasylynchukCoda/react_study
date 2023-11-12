import logo from './logo.svg';
import './App.css';
import Users from './components/Users/Users';
import Form from './components/Form/Form';
import Todo from './components/Todo/Todo';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/users" element={<Users />} />
        <Route path='/todo' element={<Todo/>} />
        {/* <Route path="/users" element={<UsersPage />}>
          <Route path="/users/:id" element={<User />} />
        </Route> */}
        {/* <Route path="/not-found" element={<NotFoundPage />} /> */}
        {/* <Route path="*" element={<Navigate to="/not-found" />} /> */}
      </Routes>
    </div >
  );
}

export default App;
