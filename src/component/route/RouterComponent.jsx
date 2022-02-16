import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import UserListComponent from "../user/UserListComponent";
import AddUserComponent from "../user/AddUserComponent";
import EditUserComponent from "../user/EditUserComponent";

import PassAplyMasListComponent from "../passAplyMas/PassAplyMasListComponent";
import AddPassAplyMasComponent from "../passAplyMas/AddPassAplyMasComponent";
import EditPassAplyMasComponent from "../passAplyMas/EditPassAplyMasComponent";

import SysMasListComponent from "../sysMas/SysMasListComponent";
import AddSysMasComponent from "../sysMas/AddSysMasComponent";
import EditSysMasComponent from "../sysMas/EditSysMasComponent";

import CustomizedSelects from "./CustomizedSelects";

const AppRouter = () => {
   return(
     <div>
       <BrowserRouter>
           
       <CustomizedSelects />
           
        <div style={style}>
          <Routes>
            <Route exact path="/" element={<UserListComponent/>} />
            
            <Route path="/users" element={<UserListComponent/>} />
            <Route path="/add-user" element={<AddUserComponent/>} />
            <Route path="/edit-user" element={<EditUserComponent/>} />
            
            <Route path="/passAplyMas" element={<PassAplyMasListComponent/>} />
            <Route path="/add-passAplyMas" element={<AddPassAplyMasComponent/>} />    
            <Route path="/edit-passAplyMas" element={<EditPassAplyMasComponent/>} />
            
            <Route path="/sysMas" element={<SysMasListComponent/>} />
            <Route path="/add-sysMas" element={<AddSysMasComponent/>} />    
            <Route path="/edit-sysMas" element={<EditSysMasComponent/>} />   
          </Routes>
        </div>
       </BrowserRouter>
     </div>
   );
}

const style = {
  marginTop: '20px'
}

export default AppRouter;