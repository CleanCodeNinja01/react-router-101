import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main className="p-6">
        <Outlet />
      </main>
    </>
  );
};

// export default RootLayout;
