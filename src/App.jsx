import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Faction from "./pages/factionPage/FactionPage"
import Explore from "./pages/explorePage/ExplorePage"
import ItemPage from "./pages/itemPage/ItemPage";
import Home from "./pages/homePage/HomePage";
import LayoutHome from "./layouts/LayoutHome";

function App() {
  return(
    <>
        <Routes>
          <Route element={<LayoutHome/>}>
              <Route path="/" element={<Home/>}/>
          </Route>
          <Route element={<Layout/>}>
            <Route path="/factions" element={<Faction/>}/>
            <Route path="/explore" element={<Explore/>}/>
            <Route path="/articles/:id" element={<ItemPage/>}/>
          </Route>
        </Routes>
    </>
  );
 
}

export default App
