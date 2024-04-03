import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App';
import Login from './pages/login';
import Register from './pages/register';

function RootNavigation(){

    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
        
        </BrowserRouter>
    );
}
export default RootNavigation;