import LogoButton from "./components/Header/LogoButton";
import MonthNavigator from "./components/Header/MonthNavigator";
import ViewTabs from "./components/Header/ViewTabs";

const Layout = () => {
  return (
    <div className="w-screen h-10 bg-[#C5E0EB] flex justify-center items-center px-4">
      <LogoButton />
      <MonthNavigator />
      <ViewTabs />
    </div>
  );
};

export default Layout;
