import LogoButton from "./components/Header/LogoButton";
import MonthNavigator from "./components/Header/MonthNavigator";
import ViewTabs from "./components/Header/ViewTabs";

const Layout = () => {
  return (
    <div className="layout h-13.5">
      <LogoButton />
      <MonthNavigator />
      <ViewTabs />
    </div>
  );
};

export default Layout;
