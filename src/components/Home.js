import React from  "react";
import '../Home.css';

function Home() {
    return(
    <>
     <div class = "pg">
        <div class="box1"></div>
        <div class="box2">
            <a href="#" class="button1"><span>Customer Relationship <br/>Management</span></a>
            <a href="#" class="button"><span>Employee Management</span></a>
            <a href="#" class="button"><span>Vehicle Management</span></a>
            <a href="/addfacilities" class="button"><span>Service Management</span></a>
            <a href="#" class="button"><span>Supplier Management</span></a>
            <a href="/additems" class="button"><span>Inventory Management</span></a>
            <a href="/ServiceFacilities" class="button2"><span>Work Progress <br/>Management</span></a>
            <a href="#" class="button"><span>Fiancial Management</span></a>
        </div>
     </div>
    </>
  )
}

export default Home;