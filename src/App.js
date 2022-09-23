import "./App.css";
import Footer from "./Common/Footer/Footer";
import Header from "./Common/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./Pages/Movies/Movies";
import TVshows from "./Pages/TVShows/TVshows";
import { Container } from "@mui/material";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Container  sx={{ marginY: 5 }}>
          <Routes>
            <Route path="/" element={<Movies />} exact />
            <Route path="/TVShows" element={<TVshows />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
