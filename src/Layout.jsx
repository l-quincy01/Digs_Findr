import Header from "./components/Navbar/Header";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./components/Providers/ThemeProvider";

export default function Layout() {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Header />
        <div className=" px-5 pb-20 pt-40 flex flex-col min-h-screen">
          <Outlet />
        </div>
      </ThemeProvider>
    </>
  );
}
