//import "./App.css";
import { Route, Routes } from "react-router-dom";

// import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/Login/RegisterPage.jsx";
import Layout from "./Layout.jsx";
import axios from "axios";
import { UserContextProvider } from "./context/UserContext.tsx";
import AccountPage from "./pages/AccountPage/AccountPage.jsx";

// import PlacesPage from "./pages/PlacesPage";
// import PlacesFormPage from "./pages/PlacesFormPage";
// import PlacePage from "./pages/Property/PlacePage.jsx";

import BookingsPage from "./pages/Property/BookingsPage.jsx";
import BookingPage from "./pages/Property/BookingPage.jsx";
import Map from "./pages/Maps/Map.jsx";
import Rental_Agencies from "./pages/Home/Rental_Agencies.jsx";
import Digs_Findr from "./pages/Home/Digs_Findr.jsx";

import LoginPage from "./pages/Login/LoginPage.jsx";
import PlacesPage from "./pages/AccountPage/UserProperty/PlacesPage.jsx";
import PlacesFormPage from "./pages/AccountPage/UserProperty/PlacesFormPage.jsx";
import PlacePage from "./pages/Property/PlacePage.jsx";
import HomePage from "./pages/Home/HomePage.jsx";
import { ThemeProvider } from "./components/Providers/ThemeProvider.tsx";
// import { useEffect} from "react" ;

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

function App() {
  return (
    // <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/digs_Findr" element={<Digs_Findr />} />
          <Route path="/rental_Agencies" element={<Rental_Agencies />} />
          <Route path="/map" element={<Map />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/account/places" element={<PlacesPage />} />
          <Route path="/account/places/new" element={<PlacesFormPage />} />
          <Route path="/account/places/:id" element={<PlacesFormPage />} />
          <Route path="/place/:id" element={<PlacePage />} />
          <Route path="/account/bookings" element={<BookingsPage />} />
          <Route path="/account/bookings/:id" element={<BookingPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
    // </ThemeProvider>
  );
}

export default App;
