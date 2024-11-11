import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {store} from './app/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)

// store => act as a global variable
// reducers => if we want to change anything store we use reducer, functionality part goes to reducer
// methods -> useSelector , useDespatcher
