import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ClassDetails from "./Pages/ClassDetails/ClassDetails";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
        <Route path="/" element={<Homepage />}>
          
        </Route>
        <Route path="/class/:id" element={<ClassDetails/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
