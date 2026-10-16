import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/layout";
import Faction from "./pages/factionPage/FactionPage"
import Explore from "./pages/explorePage/ExplorePage"
function App() {
  return(
    <>
    <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Explore/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
 
}

export default App
