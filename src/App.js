
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'

import UserRoute from './routes/UserRoute';

import HomePage from './pages/HomePage';
import Admin from './components/Admin';
import Student from './components/Student';

function App() {
  return (
    <>
    <UserRoute/>
    </>
  );
}

export default App;
