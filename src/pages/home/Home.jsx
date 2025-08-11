import Header from "../../components/section/Header/header";
import HealthCardGrid from "../../components/section/CardGrid/cardgrid";
import MainLayout from "../../components/Layout/layout";
import Sidenav from "../../components/section/Sidenav/sidenav";
import { Search } from "lucide-react";
import FilterDropdown from "../../components/ui/filterdropdown";

// Want to put the following things card grid and header
export default function Home() {
  return (
    <>
      <div className="">
        <MainLayout>
          <HealthCardGrid />
        </MainLayout>
      </div>
    </>
  );
}
