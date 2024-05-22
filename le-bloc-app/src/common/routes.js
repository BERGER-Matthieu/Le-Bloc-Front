import ProtectedRoute from '../components/protectedRoute';

import Login from '../screen/login';
import Register from '../screen/register';
import Home from '../screen/home';
import Chat from '../screen/chat';
import CreateSpot from '../screen/spot/create';
import ListSpot from '../screen/spot/list';
import PageSpot from '../screen/spot/page';
import CreateBloc from '../screen/bloc/create';

export const routes = [
    {
        path: "/login",
        element : <Login/>
    },{
        path: "/register",
        element : <Register/>
    },{
        path: "/home",
        element : <Home/>
    },{
        path: "/chat",
        element : <ProtectedRoute><Chat/></ProtectedRoute>
    },{
        path: "/create-spot",
        element : <ProtectedRoute><CreateSpot/></ProtectedRoute>
    },{
        path: "/list-spot",
        element : <ListSpot/>
    },{
        path: "/spot",
        element : <PageSpot/>
    },{
        path: "/create-bloc",
        element : <ProtectedRoute><CreateBloc/></ProtectedRoute>
    }
]