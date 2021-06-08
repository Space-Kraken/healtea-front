import { ToastProvider } from "react-toast-notifications";
import Router from "./components/pages/Router";

function App() {
  return (
    <ToastProvider placement="bottom-right">
      <div className="bg-gradient-to-r from-fresh-god-magic-blue via-fresh-god-50 to-fresh-god-cool-rose flex flex-col w-screen h-screen justify-evenly">
        <Router />
      </div>
    </ToastProvider>
  );
}

export default App;
