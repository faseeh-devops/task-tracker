
import './components/Header'
import Header from './components/Header';
import Tasks from "./components/Tasks";
import {useState} from "react";

function App() {

    const [tasks,setTasks] = useState([
        
            {
                id:1,
                text: 'Tailor Appointment',
                day: 'Oct 17th at 10:00 AM',
                reminder: true
            },
            {
                id:2,
                text: 'Doctor Appointment',
                day: 'Oct 27th at 8:00 PM',
                reminder: false
            },
            {
                id:1,
                text: 'Swimming Pool Visit',
                day: 'Oct 30th at 7:00 PM',
                reminder: true
            }

    ])
  return (
    <div className="container">
      <Header/>
        <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
