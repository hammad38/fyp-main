import { Route, Routes } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import AllApps from "./AllApps";
import Analytics from "./Analytics";
import Authentication from "./Authentication";
import Build from "./Build";
import Settings from "./Settings";
// import Stroage from "./Stroage";
import Stroage from "./Homepage"

const Sidebar = () => {
  return (
    <RootLayout>
      <Routes>
        <Route path="/xxx" element={<AllApps />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/stroage" element={<Stroage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/build/:bID" element={<Build />} />
        <Route path="/analytics/:aID" element={<Analytics />} />
      </Routes>
    </RootLayout>
  );
};

export default Sidebar;
