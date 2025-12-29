// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { UserProvider } from "./context/UserContext"; // <- import context
// import Navbar from "./Components/Navbar";
// import HomePage from "./pages/HomePage";
// import AllGuidesPage from "./pages/AllGuides";
// import AllArtisan from "./pages/AllArtisan";
// import AllRestos from "./pages/AllRestos";
// import SouthMorocco from "./pages/SouthMorocco";
// import AboutUs from "./pages/AboutUs";
// import ContactPage from "./components/Contact/ContactPage";
// import AuthPage from "./Components/AuthentificationPage/AuthPage";
// import CityProfile from "./pages/CityProfile";
// import GuideProfile from "./pages/GuideProfile";
// import RestoProfile from "./pages/RestoProfile";
// import ArtisanProfile from "./pages/ArtisanProfile";
// import RestaurantProfile from "./pages/RestaurantProfile";
// import AdminDashboard from "./pages/AdminDashboard";


// function App() {
//   return (
//     <UserProvider>
//       <Router>
//         <Navbar /> {/* Navbar sees context */}
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/guides" element={<AllGuidesPage />} />
//           <Route path="/artisans" element={<AllArtisan />} />
//           <Route path="/restaurants" element={<AllRestos />} />
//           <Route path="/south-morocco" element={<SouthMorocco />} />
//           <Route path="/about-us" element={<AboutUs />} />
//           <Route path="/contact" element={<ContactPage />} />
//           <Route path="/auth" element={<AuthPage />} />
//           <Route path="/city/:cityName" element={<CityProfile />} />
//           <Route path="/guide/:id" element={<GuideProfile />} />
//           <Route path="/resto/:id" element={<RestoProfile />} />
//           <Route path="/artisan/:id" element={<ArtisanProfile />} />
//           <Route path="/restaurant/:id" element={<RestaurantProfile />} />
//             <Route path="/admin" element={<AdminDashboard />} />

//         </Routes>
//       </Router>
//     </UserProvider>
//   );
// }

// export default App;



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Navbar from "./Components/Navbar";
import AboutUs from "./pages/AboutUs";
import AuthPage from "./Components/AuthentificationPage/AuthPage";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
