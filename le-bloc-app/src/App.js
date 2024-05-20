import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './screen/login';
import Register from './screen/register';
import Home from './screen/home';
import Chat from './screen/chat';
import CreateSpot from './screen/spot/createSpot';

const router = createBrowserRouter([
  {
    path: "/login",
    element : <Login/>
  },
  {
    path: "/register",
    element : <Register/>
  },
  {
    path: "/home",
    element : <Home/>
  },
  {
    path: "/chat",
    element : <Chat/>
  },
  {
    path: "/create-spot",
    element : <CreateSpot/>
  }
]);

function App() {
  return <RouterProvider router={router}/>
}

export default App;
