import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserForm from './routes/UserForm';
import UserList from './routes/UserList';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path={`${process.env.PUBLIC_URL}/`}
            element={<UserList />}
          ></Route>
          <Route path="user_create" element={<UserForm />}></Route>
          <Route path="user_update/:id" element={<UserForm />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
