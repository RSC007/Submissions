
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// components
import Layout from "./Components/Common/Layout";
import Home from "./Components/Pages/Home";
import SignIn from "./Components/Pages/SignIn";
import SignUp from "./Components/Pages/SignUp";


// style
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateProute from "./Components/auth/PrivateProute";
import UserForm from "./Components/Pages/UserForm";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Layout>
            <Route path="/signup" exact>
              <PrivateProute Component={SignUp} />
            </Route>
            <Route path="/signin" exact>
              <PrivateProute Component={SignIn} />
            </Route>
            <Route path="/" exact>
              <PrivateProute Component={Home} />
            </Route>
            <Route path="/userform" exact>
              <PrivateProute Component={UserForm} />
            </Route>
          </Layout>
        </Switch>
      </Router>
    </>
  );
}

export default App;
