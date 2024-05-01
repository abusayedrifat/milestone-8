import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './index.css'
import Home from './Components/Home/Home';
import Meals from './Components/Meals/Meals';
import MealDetails from './Components/Meal Details/MealDetails';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

const router = createBrowserRouter([

  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/meals',
        loader: ()=>fetch('https://www.themealdb.com/api/json/v1/1/search.php?s') ,
        element:<Meals></Meals>
      },
      {
        path:'/meals/:mealID',
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealID} `) ,
        element: <MealDetails></MealDetails>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
