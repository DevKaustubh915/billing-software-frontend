import { Routes,Route } from "react-router-dom";
import Menubar from "./Components/Menubar/Menubar";

import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import ManageCategories from "./Pages/Manage Categories/ManageCategories.jsx";
import ManageUsers from "./Pages/manage Users/ManageUsers.jsx";
import ManageItems from "./Pages/Manage Items/ManageItems.jsx";
import Explore from "./Pages/Explore/Explore.jsx";


const App = ()=>{
  return(
    <div>
      <Menubar/>

      {/* <Routes>

        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/category" element={<ManageCategories/>}></Route>
        <Route path="/users" element={<ManageUsers/>}></Route>
        <Route path="/items" element={<ManageItems/>}></Route>
        <Route path="/explore" element={<Explore/>}></Route>
        <Route path="/" element={<Dashboard/>}></Route>
      </Routes> */}

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/category" element={<ManageCategories />} />
        <Route path="/users" element={<ManageUsers />} />
        <Route path="/items" element={<ManageItems />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
      

    </div>
  );
}

export default App;