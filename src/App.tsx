
import './App.css'
import {Link, Outlet} from "react-router-dom";

function App() {


  return (
<>

<Outlet/>
  <li><Link to='posts'>POSTS</Link></li>
</>



  )
}

export default App
