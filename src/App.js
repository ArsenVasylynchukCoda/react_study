import logo from './logo.svg';
import './App.css';
import Users from './components/Users/Users';
import Form from './components/Form/Form';
import Todo from './components/Todo/Todo';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import UsersPage from './pages/UsersPage/UsersPage';
import Navigation from './components/Navigation/Navigation';
import UserPage from './pages/UserPage/UserPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/users" element={<UsersPage/>}>
          <Route path="/users/:id" element={<UserPage />}/>
        </Route>
        <Route path='/todo' element={<Todo/>} />
        <Route path="/not-found" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </div >
  );
}

export default App;
