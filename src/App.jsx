import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/Home/Home";
import Contestants from "./pages/Contestants/Contestants";
import Nav from "./components/Nav/Nav";
import NotFound from "./pages/NotFound/NotFound";
import Contestant from "./pages/Contestant/Contestant";
import NavigateHookExample from "./pages/NavigateHookExample/NavigateHookExample";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        
        <h1>Contestants Picker</h1>
        
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/contestants" element={<Contestants />} />
          <Route path="/view-contestants" element={ <Navigate to="/contestants" />} /> 

          <Route path="/contestants/:contestantId" element={<Contestant />} />
          <Route path="/use-navigate" element={<NavigateHookExample />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
