import Navitem from "./NavItem";
import Home from "./assets/Home.svg?react";
import ChartBar from "./assets/ChartBar.svg?react";
import Bell from "./assets/Bell.svg?react";
import ChartPie from "./assets/ChartPie.svg?react";
import Heart from "./assets/Heart.svg?react";
import Logout from "./assets/Logout.svg?react";
import Moon from "./assets/Moon.svg?react";
import Wallet from "./assets/Wallet.svg?react";
import Search from "./assets/Search.svg?react";
import SearchBox from "./SearchBox";
import { Toggle } from "./Toggle";
import { CodingLabHeader } from "./CodingLabHeader";
import { CollapesButton } from "./CollapeButton";
import { useState } from "react";
const App = () => {
  const [isCollapsed, setIscollapsed] = useState(false);
  return (
    <div className="min-h-screen bg-[hsl(var(--background))] flex justify-center items-center">
      <aside
        className={`bg-[hsl(var(--primary))] flex flex-col w-2xs shadow-lg rounded-xl text-[hsl(var(--foreground))] p-3 relative transition-all ${
          !isCollapsed ? "w-64 delay ease-in-out" : "w-24 delay ease-in-out"
        }`}
      >
        <div className="absolute -right-2">
          <CollapesButton
            isCollapsed={isCollapsed}
            onToggle={() => setIscollapsed(!isCollapsed)}
          />
        </div>
        <div>
          <CodingLabHeader isCollapsed={isCollapsed} />
        </div>
        <div className="mt-2 mx-2">
          <SearchBox
            icon={Search}
            label="search"
            inputdetail={"Search..."}
            isCollapsed={isCollapsed}
          />
        </div>
        <ul>
          <Navitem
            icon={Home}
            label="Home"
            Description={"Dashboard"}
            isCollapsed={isCollapsed}
          />
          <Navitem
            icon={ChartBar}
            label="Revenue"
            Description={"Revenue"}
            isCollapsed={isCollapsed}
          />
          <Navitem
            icon={Bell}
            label="Notifications"
            Description={"Notification"}
            isCollapsed={isCollapsed}
          />
          <Navitem
            icon={ChartPie}
            label="Analystics"
            Description={"Analystics"}
            isCollapsed={isCollapsed}
          />
          <Navitem
            icon={Heart}
            label="Likes"
            Description={"Likes"}
            isCollapsed={isCollapsed}
          />
          <Navitem
            icon={Wallet}
            label="Wallets"
            Description={"Wallet"}
            isCollapsed={isCollapsed}
          />
        </ul>
        <hr />
        <div>
          <Navitem
            icon={Logout}
            label="Logout"
            Description={"Logout"}
            isCollapsed={isCollapsed}
          />
          <div className="flex items-center justify-around ">
            {!isCollapsed && (
              <Navitem
                icon={Moon}
                label="Dark Mode"
                Description={"Dark Mode"}
              />
            )}
            <div className="">
              <Toggle />
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default App;
