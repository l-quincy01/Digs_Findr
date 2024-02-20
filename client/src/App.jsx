import './App.css'
import { Route, Routes } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Layout from './Layout'
import axios from 'axios'
import { UserContextProvider } from './UserContext.jsx'
import AccountPage from './pages/AccountPage'
import PlacesPage from './pages/PlacesPage'
import PlacesFormPage from './pages/PlacesFormPage'
import PlacePage from './pages/PlacePage'
import BookingsPage from './pages/BookingsPage.jsx'
import BookingPage from './pages/BookingPage.jsx'
// import { useEffect} from "react" ;

axios.defaults.baseURL = 'http://localhost:4000' ;
axios.defaults.withCredentials = true ;

function App() {
//   useEffect(() => {
//     // if(!user){
//         axios.get('/profile')
//     // }
// }, []);
  return (
      <UserContextProvider>
      <Routes>
        <Route path ="/" element = {<Layout />} >
        <Route index element={ <IndexPage />} />
        <Route path = "/login" element={ <LoginPage />} />
        <Route path = "/register" element={ <RegisterPage />} />
        <Route path = "/account" element={ <AccountPage />} />
        <Route path = "/account/places" element={ <PlacesPage />} />
        <Route path = "/account/places/new" element={ <PlacesFormPage />} />
        <Route path = "/account/places/:id" element={ <PlacesFormPage />} />
        <Route path= "/place/:id" element = {<PlacePage/>}/>
        <Route path= "/account/bookings" element = {<BookingsPage/>}/>
        <Route path= "/account/booking/:id" element = {<BookingPage/>}/>
        </Route>
      </ Routes>
      </UserContextProvider>

    
  )
}

export default App
