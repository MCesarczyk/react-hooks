import React from 'react'
import ReactDOM from 'react-dom/client'
import {OnClickOutside} from './onClickOutside/OnClickOutside.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <OnClickOutside />
  </React.StrictMode>,
)
