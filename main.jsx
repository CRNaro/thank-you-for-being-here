import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './portfolio/src/App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


// Notes:  moved main.jsx, package.json and package-lock and vite.config.js to root directory
// need to figure out the routing issue with vite