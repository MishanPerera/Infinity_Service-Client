import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import AddServiceFacilities from "./components/serviceComponents/AddServiceFacilities"
import ServiceFacilities from "./components/serviceComponents/ServiceFacilities"
import UpdateFacility from './components/serviceComponents/UpdateFacility';
import AddNormalService from './components/serviceComponents/AddNormalService';
import SearchService from './components/serviceComponents/SearchService';

import AddPrices from './components/inventoryComponents/AddPrices';
import AllItems from './components/inventoryComponents/AllItems'
import AllPrices from './components/inventoryComponents/AllPrices';
import SearchSupplier from './components/inventoryComponents/SearchSupplier';
import searchItems from './components/inventoryComponents/SearchItems';
import Availability from './components/inventoryComponents/Availability';
import Date from './components/inventoryComponents/Date';
import AddItems from "./components/inventoryComponents/AddItems";


import AddEmployee from './components/progressComponents/AssignEmployee';
import AllProgress from './components/progressComponents/AllProgress';
import DailyProgress from'./components/progressComponents/DailyProgress';
import PostponeService from './components/progressComponents/Postpone';
import ViewProgress from './components/progressComponents/ViewStatus';
import ToDoList from './components/progressComponents/ToDoList';
import DeletePostpone from './components/progressComponents/DeletePostpone';
import UpdateProgress from './components/progressComponents/UpdateProress';

function App() {
  return (
    <Router>
      <div>
        <Route path="/addfacilities" exact component={AddServiceFacilities}/>
        <Route path="/facilities" exact component={ServiceFacilities}/>
        <Route path="/update/:fid" exact component={UpdateFacility}/>
        <Route path="/addnservice" exact component={AddNormalService}/>
        <Route path="/searchservice" exact component={SearchService}/>
        <Route path = "/additems" exact component = {AllItems}/>
        <Route path = "/additems" exact component = {AddItems} />
        <Route path = "/addprices" exact component = {AllPrices} />
        <Route path = "/addprices" exact component = {AddPrices} />
        <Route path = "/searchsupplier" exact component = {SearchSupplier} />
        <Route path = "/searchitems" exact component = {searchItems} />
        <Route path = "/searchavailability" exact component = {Availability} />
        <Route path = "/date" exact component = {Date} />
        <Route path="/add" exact component={AddEmployee}/>
        <Route path="/addp" exact component={PostponeService}/>
        <Route path="/search/:vNo" exact component={ViewProgress}/>
        <Route path="/edit/:vNo" exact component={UpdateProgress}/>
        <Route path="/get/:vNo" exact component={DeletePostpone}/>
        <Route path="/service/:date" exact component={ToDoList}/>
        <Route path="/pro/:entryDate" exact component={DailyProgress}/>
        <Route path="/" exact component ={AllProgress}/>
      </div>
    </Router>  
  );
}

export default App;
