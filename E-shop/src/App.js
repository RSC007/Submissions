
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Layout from "./Components/Common/Layout";
import Home from "./Components/Pages/Home";
import NotFound from "./Components/Pages/NotFound";
import SignIn from "./Components/Pages/SignIn";
import SignUp from "./Components/Pages/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/signup" exact element={<SignUp/>}>
              {/* <PrivateProute Component={SignUp} /> */}
            </Route>
            <Route path="/signin" exact element={<SignIn/>}>
              {/* <PrivateProute Component={SignIn} /> */}
            </Route>
            <Route path="/" exact element={<Home/>}>
              {/* <PrivateProute Component={Home} /> */}
            </Route>
              {/* <PrivateProute Component={UserForm} /> */}
            <Route path={"*"} element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
