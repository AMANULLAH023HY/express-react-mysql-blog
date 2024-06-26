import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom';
import './style.scss';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Single from './pages/Single';
import Write from './pages/Write';
import NavBar from './component/NavBar';
import Footer from './component/Footer';


const Layout = ()=>{
  return(
    <>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout/>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
    
      {
        path: '/post/:id',
        element: <Single/>
      },
    
      {
        path: '/write',
        element: <Write/>
      },

    ]
      
  },
  {
    path: '/register',
    element: <Register/>
  },
  
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/single',
    element: <Single/>
  },

  {
    path: '/write',
    element: <Write/>
  },
  
  
  
  
]);

function App() {
  return (
    <div className='app'>
    <div className='container'>

      <RouterProvider router={router}/>
    </div>
        
    </div>
  );
}



export default App;
