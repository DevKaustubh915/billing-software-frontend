import {Routes, Route, useLocation} from "react-router-dom";
import Menubar from "./Components/Menubar/Menubar";

import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import ManageCategories from "./Pages/Manage Categories/ManageCategories.jsx";
import ManageUsers from "./Pages/manage Users/ManageUsers.jsx";
import ManageItems from "./Pages/Manage Items/ManageItems.jsx";
import Explore from "./Pages/Explore/Explore.jsx";
import {Toaster} from "react-hot-toast";
import Login from "./Pages/Login/Login.jsx";


const App = ()=>{
  const location = useLocation();
  return(
    <div>
        {location.pathname !== "/login" && <Menubar/>}
      <Toaster/>

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
        <Route path="/login" element={<Login />} />
      </Routes>
      

    </div>
  );
}

export default App;