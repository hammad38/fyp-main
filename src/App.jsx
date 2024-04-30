import Home from "./pages/Homepage";
// import Explore from "./pages/Explore";
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
{/* <Explore /> */}
        <Home />
      </div>
    </>
  );
};

export default App;

// import { Route, Routes } from "react-router-dom";
// import RootLayout from "./layout/RootLayout";
// import AllApps from "./pages/AllApps";
// import Analytics from "./pages/Analytics";
// import Authentication from "./pages/Authentication";
// import Build from "./pages/Build";
// import Settings from "./pages/Settings";
// import Stroage from "./pages/Stroage";

// const App = () => {
//   return (
//     <RootLayout>
//       <Routes>
//         {/* <Explore />  */}
//         <Route path="/" element={<AllApps />} />
//         <Route path="/authentication" element={<Authentication />} />
//         <Route path="/stroage" element={<Stroage />} />
//         <Route path="/settings" element={<Settings />} />
//         <Route path="/build/:bID" element={<Build />} />
//         <Route path="/analytics/:aID" element={<Analytics />} />
//       </Routes>
//     </RootLayout>
//   );
// };

// export default App;
