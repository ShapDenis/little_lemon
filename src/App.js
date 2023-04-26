import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Booking from "./pages/Booking/Booking";
import links from "./utils/navigationLinks";
import ConfirmedBooking from "./pages/ConfirmedBooking/ConfirmedBooking";

function App() {
  const {url: booking} = links[1];
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path={booking} element={<Booking/>}/>
          <Route path="/confirmed-booking" element={<ConfirmedBooking/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;