
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layouts/Main';
import About from './component/About/About';
import Orders from './component/Orders/Orders';
import Inventory from './Inventory/Inventory';
import Shop from './component/Shop/Shop';

function App() {
  const router=createBrowserRouter([

    {path: ('/'),
      
      element: <Main></Main>,

      children:[
        
        {     
          path:('Orders'),
          loader:()=>{
            return fetch ('products.json')
          },
          element:<Orders></Orders>

    },
    {     
      path:('/'),
      loader:()=>fetch('products.json'),
      element:<Shop></Shop>

},


    {     
      path:('Inventory'),
      element:<Inventory></Inventory>

}

  
  ]
      
    
    },
    {

      path:('About'),
      element:<About></About>
    }
  ])
  return (
    <div >
     {
      <RouterProvider router={router}></RouterProvider>
     }
    </div>
  );
}

export default App;
