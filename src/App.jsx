// import React from 'react';
// import Components from './components/Components';
// import ScrolToTop from './components/Elements/ScrolToTop';
// import Loader from "./components/Elements/Loader";

// const App = () => {
  
//   return (
//     <div className="App">
//       <Components />
//       <ScrolToTop/>
//       <Loader/>  
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { Helmet } from "react-helmet-async";
import Components from './components/Components';
import ScrolToTop from './components/Elements/ScrolToTop';
import Loader from "./components/Elements/Loader";

const App = () => {
  return (
    <div className="App">
      <Helmet>
        <title>ANG Interior Design</title>
        <meta name="description" content="Premium interior design and architecture services." />
        <meta name="keywords" content="interior design, architecture, home decor" />
      </Helmet>

      <Components />
      <ScrolToTop />
      <Loader />
    </div>
  );
}

export default App;
