import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import { Clients } from "../src/pages/clients";
import { Sessions } from "../src/pages/sessions";
import { Calendar } from "../src/pages/calendar";
import { Projects } from "../src/pages/projects";
import { ClientComponent } from "./components/clientComponent";
import { SessionComponent } from "./components/sessionComponent";
import LoginComponent from "./components/loginComponent";


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        
        <Route exact path="/">
          <Redirect to="/login"/>
        </Route>

        <Route exact path="/login">
          <LoginComponent />
        </Route>

        <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path="/clients">
          <Clients />
        </Route>

        <Route path="/clients/:clientId">
          <ClientComponent />
        </Route>

        <Route exact path="/sessions">
          <Sessions />
        </Route>

        <Route path="/sessions/:sessionId">
          <SessionComponent />
        </Route>

        <Route path="/calendar">
          <Calendar />
        </Route>

        <Route exact path="/projects">
          <Projects />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
