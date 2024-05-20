import Login from '../screen/login';
import Register from '../screen/register';
import Home from '../screen/home';
import Chat from '../screen/chat';
import CreateSpot from '../screen/spot/create';
import ListSpot from '../screen/spot/list';
import PageSpot from '../screen/spot/page';

export const routes = [
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
    },
    {
        path: "/list-spot",
        element : <ListSpot/>
    },{
        path: "/spot",
        element : <PageSpot/>
    }
]