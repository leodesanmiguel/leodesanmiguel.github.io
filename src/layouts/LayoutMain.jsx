import { Outlet } from "react-router-dom";
import { Footer, Header } from "../pages/Mycomponents";
const LayoutMain = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutMain;