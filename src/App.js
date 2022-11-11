import React from "react"
import { BrowserRouter, Routes,Route} from "react-router-dom"
import Login from "./Login";
import Vieworders from "./admin/Vieworders";
import Viewcustomers from "./admin/Viewcustomers";
import Trackorders from "./admin/Trackorders";
import Pendingorders from "./admin/Pendingorder";
import Transactionhistory from "./admin/Transactionhistory";
import Viewdrivers from "./admin/Viewdrivers";
import Bookorder from "./customer/Bookorder";
import Chat from "./chatapp/Chat/Chat"



import Home from "./Home";
import CustomerSignUp from "./customer/CustomerSignUp";
import Customerdrivers from "./customer/Customerdrivers";
import DriverSignUp from "./driver/DriverSignUp";
import Driverorders from './driver/Vieworders'
import Wallet from "./driver/Wallet";
import Transaction from "./driver/Transaction";
import DriverProfile from "./driver/DriverProfile";
import CustomerProfile from "./customer/CustomerProfile";
import ViewOrders from "./customer/ViewOrders";
import Join from "./chatapp/Join/Join";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*  admin route */}

        <Route exact path='/admin-trackorders' element={ < Trackorders /> }/>
        <Route exact path='/admin-viewcustomers' element = {<Viewcustomers/>}/>
        <Route exact path='/admin' element={<Vieworders />}/>
        <Route exact path='/admin-vieworders' element={<Vieworders />}/>
        <Route exact path='/admin-pendingorders' element={<Pendingorders />}/>
        <Route exact path='/admin-pendingorders/:id' element={<Pendingorders />}/>
        <Route exact path='/admin-transactionhistory' element={<Transactionhistory/>}/>
        <Route exact path='/admin-viewdriver' element={<Viewdrivers/>}/>
        {/* end admin route */}

        {/* Driver route */}
        <Route exact path='/driver' element={<Driverorders />}/>
        <Route exact path='/driver-vieworders' element={<Driverorders />}/>
        <Route exact path='/driver-wallet' element={<Wallet />}/>
        <Route exact path='/driver-profile' element={<DriverProfile />}/>
        <Route exact path='/driver-transaction' element={<Transaction />}/>
        <Route exact path='/signup-driver' element={<DriverSignUp />}/>
        {/* end driver route */}

        {/* customer route */}
        <Route exact path='/' element={<Home />}/>
        <Route path='/signup-customer' element={<CustomerSignUp />}/>
        <Route path='/customer-bookorder' element={<Bookorder />}/>
        <Route path='/customer-profile' element={<CustomerProfile />}/>
        <Route path='/customer-vieworders' element={<ViewOrders/>}/>
        {/* <Route path='/customer-bookdelivery' element={<Bookdelivery/>}/> */}
        <Route path='/customer-drivers' element={<Customerdrivers/>}/>
        {/* end customer route */}

        <Route exact path='/login' element={<Login />} />

        {/* customer route */}
        <Route  exact path='/join' element={<Join />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;
