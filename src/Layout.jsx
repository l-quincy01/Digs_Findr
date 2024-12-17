import Header from "./components/Navbar/Header";
import { Outlet, useLocation } from "react-router-dom";
import { ThemeProvider } from "./components/Providers/ThemeProvider";
import Footer from "./components/Footer/Footer";

export default function Layout() {
  const location = useLocation();

  const hideHeaderRoutes = ["/account", "/place", "/about", "/contact"];
  const showHeader = !hideHeaderRoutes.includes(location.pathname);

  const hideExploreRoutes = ["/"];
  const showExplore = hideExploreRoutes.includes(location.pathname);

  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        {/* {showHeader && <Header />} */}
        <Header />
        <div
          className={` px-20 pb-20  flex flex-col min-h-screen ${
            showExplore ? "pt-40" : "pt-12"
          }`}
        >
          <Outlet />
        </div>
        <Footer />
      </ThemeProvider>
    </>
  );
}
