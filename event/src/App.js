import { useState } from 'react';
import './App.css';
import { Button } from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

import EventsList from './Components/EventsList';
import Eventmodal from './Components/modal/Eventmodal';

const App = () => {
  const [ismodalOpen, setIsmodalOpen] = useState(false)
  return (
    <>
    <div className="App">
      <header className="App-header">
        <Button color='primary' onClick={() => setIsmodalOpen(!ismodalOpen)}>Add Event</Button>
        <EventsList />
      </header>
    </div>

    {ismodalOpen && <Eventmodal isOpen={ismodalOpen} toggle={() => setIsmodalOpen(!ismodalOpen)} />}
    </>
  );
}

export default App;
