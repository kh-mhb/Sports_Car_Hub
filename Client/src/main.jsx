import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import router from './routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import UserContext from './UserContext/UserContext'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContext>

      <RouterProvider router={router} />
    </UserContext>

  </React.StrictMode>
)
