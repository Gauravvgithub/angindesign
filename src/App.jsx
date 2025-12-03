// import { Helmet } from "react-helmet-async";
import Components from "./components/Components";
import ScrolToTop from "./components/Elements/ScrolToTop";
// import Loader from "./components/Elements/Loader";
import { Toaster } from "react-hot-toast";
import useGTM from "./useGTM";

const App = () => {
  useGTM();
  return (
    <>
      <Toaster position="top-center" />
      <div className="App">
        <Components />
        <ScrolToTop />
        {/* <Loader /> */}
      </div>
    </>
  );
};

export default App;
