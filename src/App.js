import "./App.css";
import AppRoute from "./components/appRoute/AppRoute";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoute></AppRoute>;
      </BrowserRouter>
    </>
  );
}
export default App;
