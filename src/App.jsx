import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/layout";
import Faction from "./pages/factionPage/FactionPage"
import Explore from "./pages/explorePage/ExplorePage"
import ItemPage from "./pages/itemPage/ItemPage";

function App() {
  return(
    <>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Explore/>}/>
            <Route path="/factions" element={<Faction/>}/>
            <Route path="/explore" element={<Explore/>}/>
            <Route path="/articles/:id" element={<ItemPage/>}/>
          </Route>
        </Routes>
    </>
  );
 
}

export default App
