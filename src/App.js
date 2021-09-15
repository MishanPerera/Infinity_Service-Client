import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import AddServiceFacilities from "./components/serviceComponents/AddServiceFacilities"
import ServiceFacilities from "./components/serviceComponents/ServiceFacilities"
import UpdateFacility from './components/serviceComponents/UpdateFacility';
import AddNormalService from './components/serviceComponents/AddNormalService';
import SearchService from './components/serviceComponents/SearchService';

function App() {
  return (
    <Router>
      <div>
        <Route path="/addfacilities" exact component={AddServiceFacilities}/>
        <Route path="/facilities" exact component={ServiceFacilities}/>
        <Route path="/update/:fid" exact component={UpdateFacility}/>
        <Route path="/addnservice" exact component={AddNormalService}/>
        <Route path="/searchservice" exact component={SearchService}/>
      </div>
    </Router>  
  );
}

export default App;
