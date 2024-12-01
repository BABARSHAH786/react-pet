// add to the top
// import React from "react";
// import { createRoot } from "react-dom/client";
// import Pet from '../src/Pet'
// import Header from "./components/header";
// import Banner from "./components/Banner";
// import Popular from "./components/Popular";
// import About from "./about/page";
// import Home from "./pages/Home";
import Home from './components/Home'

 

import '../assets/style.css'
// import '../assets/style.css';
// import "../css/style.css";
import SearchParams from './components/SearchParams';
// import Home from './pages/Home'
const App = () => {
    return(
        <div>
            <SearchParams />

            {/* <BrowserRouter>
             <Routes>
                <Route path="/" element={<About />} ></Route>
             </Routes>

            </BrowserRouter>
            <Routes></Routes> */}
        {/* <h1>hello there !</h1> */}
        {/* <About />
        <Header />
        <Banner />
        <Popular /> */}
        {/* <Footer /> */}
        </div>
    )
}
export default App;