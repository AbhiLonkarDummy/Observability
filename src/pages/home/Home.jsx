import Header from "../../components/section/Header/header";
import HealthCardGrid from "../../components/section/CardGrid/cardgrid";
import MainLayout from "../../components/Layout/layout";
import Sidenav from "../../components/section/Sidenav/sidenav";
// Want to put the following things card grid and header
export default function Home() {
  return (
    <>
      {/* <Sidenav /> */}
      {/* <Header /> */}
      <div className="px-4 ">
        <MainLayout>
          <HealthCardGrid />
        </MainLayout>
      </div>
    </>
  );
}
