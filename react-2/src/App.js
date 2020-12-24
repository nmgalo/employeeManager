import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./views/Home.jsx";
import PersonsLookUp from "./views/PersonsLookUp.jsx";
import SideBar from "./components/Sidebar/SideBar.jsx";
import FaceRec from "./views/FaceRec.jsx";

export default function App() {
  return (
    <Router>
      <div className="web_container">
        <SideBar />
        <div className="content_view">
          <Switch>
            <Route path="/persons-lookup" component={PersonsLookUp} />
            <Route path="/face-recognition" component={FaceRec} />
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
