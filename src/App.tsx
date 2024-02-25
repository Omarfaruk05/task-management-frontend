import { ToastContainer } from "react-toastify";
import "./App.css";
import Main from "./layout/Main";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Main />
      <ToastContainer />
    </div>
  );
}

export default App;
