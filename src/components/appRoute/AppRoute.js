import { Route, Switch } from "react-router-dom";
import Register from "../registers/Register";
import Login from "../Logins/login";
import Home from "../home/Home";
const AppRoute = (props) => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/" component={Home}></Route>
    </Switch>
  );
};
export default AppRoute;
