import { BrowserRouter, Routes, Route } from "react-router-dom";
import CampaignCreationForm from "./pages/CreateCampaign/CampaignCreationForm";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import GlobalStyles from "./assets/styles/GlobalStyles";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import SingleCampaign from "./pages/SingleCampaign";
import Editor from "./pages/CreateCampaign/CampaignCreationWYSIWYGForm";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/campaigns/:id" element={<SingleCampaign />} />
          <Route path="/create-campaign/1" element={<CampaignCreationForm />} />
          <Route path="/create-campaign/2" element={<Editor />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
