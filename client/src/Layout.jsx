import Header from "./components/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <div className=" px-5 pb-20 pt-40 flex flex-col min-h-screen">
        <Outlet />
      </div>
    </>
  );
}
