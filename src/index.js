import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { register as registerServiceWorker } from './serviceWorkerRegistration'

ReactDOM.render(<React.StrictMode> <App /> </React.StrictMode>, document.getElementById('root'))
registerServiceWorker();