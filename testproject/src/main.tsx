import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Form from './components/taskform.tsx'
import TaskCard from './components/Taskcard.tsx'
import Filter from './components/Filter.tsx'

import Dashboard from './pages/Dashboard.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <Form />
//   </StrictMode>,
// )

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <TaskCard />
//   </StrictMode>,
// )


// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <Filter />
//   </StrictMode>,
// )

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Dashboard />
  </StrictMode>,
)
