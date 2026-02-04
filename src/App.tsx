
import './App.css'
import {Link, Outlet} from "react-router-dom";

function App() {


  return (

<>
  <li><Link to='posts'>posts</Link></li>


  <li><Link to='comments'>comments</Link></li>

<Outlet/>
</>



  )
}

export default App
