import { Helmet } from "react-helmet-async";
import Components from "./components/Components";
import ScrolToTop from "./components/Elements/ScrolToTop";
import Loader from "./components/Elements/Loader";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster position="top-center" />
      <div className="App">
        <Helmet>
          <title>ANG InDesign Interior Designer</title>
          <meta
            name="description"
            content="Premium interior design and architecture services."
          />
          <meta
            name="keywords"
            content="interior design, architecture, home decor"
          />
        </Helmet>

        <Components />
        <ScrolToTop />
        <Loader />
      </div>
    </>
  );
};

export default App;
