import './App.css';
import Axios from './utilz/Axios';
import axios from "axios";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Calendar from './components/Calendar';
import Tracker from './components/Tracker';
import AllRoutes from './components/AllRoutes';

function App() {
  
  return (

      <BrowserRouter>
        <Switch>
          <Route path="/cal" exact>
            <Calendar />
          </Route>
          <Route path="/routes" exact>
            <AllRoutes />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
