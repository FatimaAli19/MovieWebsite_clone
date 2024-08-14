import "bootstrap/dist/css/bootstrap.min.css"; 
import Header from "./components/Header";
import Footer from "./components/Footer";
import AZList from "./components/AZList"; 
import "./assets/styles.css"
import { BrowserRouter,Route,Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import WatchPage from "./components/WatchPage";
function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={ <HomePage/>}/>
      <Route path="/AZlist" element={ <AZList/>}/>
      <Route path="/WatchPage" element={<WatchPage/>}/>
    </Routes>
    <Footer/> 
    </BrowserRouter>
    
    
    
     

       
    </>
  );
}

export default App;
