import HealthCardGrid from "../../components/section/CardGrid/cardgrid";
import MainLayout from "../../components/Layout/layout";
import SignupPage from "../../panels/signup/signup-page";
import Header from "../../components/section/Header/header";
import LoginPage from "../../panels/login/login-page";
// Want to put the following things card grid and header
export default function Home() {
  return (
    <>
      <div className="">
        <MainLayout>
          <Header onAddApplicationClick={() => setIsModalOpen(true)} />

          <HealthCardGrid />
        </MainLayout>
      </div>
    </>
  );
}
