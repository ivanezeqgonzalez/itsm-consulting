import { Link } from 'react-router'
import './App.css'

function App() {
  return (
    <div>
      <p className='read-the-docs'>Challenge of ITSM-Consulting</p>
      <p>
        <Link to='/allUsers'>Go to All users</Link>
      </p>
    </div>
  )
}

export default App
