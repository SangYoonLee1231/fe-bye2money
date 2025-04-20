// src/components/layout/Layout.tsx
import { Outlet } from "react-router-dom";
import Layout from "../features/layout/Layout";

const App = () => {
  return (
    <div>
      <Layout />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
