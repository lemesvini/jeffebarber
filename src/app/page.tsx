import NavBar from "@/components/NavBar";
import Services from "@/components/service/Services";
import Profile from "@/components/profile/Profile";
import Reviews from "@/components/reviews/Reviews";

export default function Home() {
  return (
    <>
    <NavBar />
    <div className="w-full flex flex-col laptop:flex-row laptop:justify-evenly items-center p-3 text-white">
      <div className="hidden laptop:flex flex-col">
        <Profile />
        <Reviews />
      </div>
      <span className="laptop:hidden"><Profile/></span>
      <Services />
      <span className="laptop:hidden w-full mt-3"><Reviews/></span>
    </div>
    </>
  );
}
