import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import Home from "./Components/Home";
import RoomList from "./Components/RoomList";
import BookingDetails from "./Components/BookingDetails";
import SingleRoom from "./Components/SingleRoom";
import Sauna from "./Components/Sauna";
import Service from "./Components/Service";
import SingleService from "./Components/SingleService";
import Summary from "./Components/Summary";
import "./App.css";

function App() {
  const loc = useLocation();
  let userID;
  if (loc.state) {
    userID = loc.state.userID;
  }
  return (
    <Router>
      <Switch>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route exact path="/Rooms">
          <RoomList />
        </Route>
        <Route exact path="/Rooms/:id">
          <SingleRoom />
        </Route>
        <Route exact path="/booking/:id">
          <BookingDetails userID={userID} />
        </Route>
        <Route exact path="/Services">
          <Service />
        </Route>
        <Route exact path="/Sauna">
          <Sauna userID={userID} />
        </Route>
        <Route exact path="/Services/:id">
          <SingleService />
        </Route>
        <Route exact path="/Summary/:id">
          <Summary userID={userID} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
