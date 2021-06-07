import { ToastProvider } from "react-toast-notifications";
import Router from "./components/pages/Router";
import ReactSession from "./tools/ReactSession";

function App() {
  ReactSession.setStoreType("cookie");
  return (
    <ToastProvider>
      <div className="bg-gradient-to-r from-fresh-god-magic-blue via-fresh-god-50 to-fresh-god-cool-rose flex flex-col h-screen justify-between">
        <Router />
      </div>
    </ToastProvider>
  );
}

export default App;
