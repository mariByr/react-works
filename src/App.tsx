
import './App.css'


const coursesTitleArray: string[] = [
  'JavaScript Complex',
  'Java Complex',
  'Python Complex',
  'QA Complex',
  'Fullstack',
  'Frontend'
];

function App() {


  return (
    <>
<ul>
  {
    coursesTitleArray.map((value,index) => <li key={index}>{value}</li>)
  }
</ul>

      <h1 className="text-red-500 text-3xl font-bold">
        Tailwind працює 🚀
      </h1>
    </>
  )
}

export default App
