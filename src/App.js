
import { Route, Routes } from 'react-router-dom';
import './App.css';

import AddItem from './components/AddItem/AddItem';
import AllParts from './components/AllParts/AllParts';
import AllUsers from './components/AllUsers/AllUsers';
import Blogs from './components/Blogs/Blogs';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MyOrders from './components/MyOrders/MyOrders';
import MyProfile from './components/MyProfile/MyProfile';
import MyReviews from './components/MyReviews/MyReviews';
import Navber from './components/Navber/Navber';
import Purchese from './components/Purchese/Purchese';

import SignUp from './components/SignUp/SignUp';



function App() {
  return (
    <div className="App">
      <Navber></Navber>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>

        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route path='/dashboard/myorders' element={<MyOrders></MyOrders>}></Route>
          <Route path='/dashboard/myreviews' element={<MyReviews></MyReviews>} ></Route>
          <Route path='/dashboard/myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='/dashboard/addIteams' element={<AddItem></AddItem>}></Route>
          <Route path='/dashboard/allItems' element={<AllParts></AllParts>}></Route>
          <Route path='/dashboard/allusers' element={<AllUsers></AllUsers>}></Route>
        </Route>
        <Route path='/purchese/:id' element={<Purchese></Purchese>}></Route>


        <Route path='/blogs' element={<Blogs></Blogs>}></Route>

        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
