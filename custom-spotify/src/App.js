import "./App.css";
import Login from "./components/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css"
import Dashboard from "./components/Dashboard/Dashboard";


function App() {
  const code = new URLSearchParams(window.location.search).get("code")
  return code ? <Dashboard code={code} /> : <Login />

}

export default App;
