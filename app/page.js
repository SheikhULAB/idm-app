import Header from "./components/Header";
import Navbar from "./components/Navbar";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

export default function Home() {
  return (
    <main>
      <Header />
      <Navbar />
      <hr class="my-3 border-t-1 border-gray-100"></hr>
      <div className="lg:flex">
        <LeftSide className="" />
        <RightSide className="" />
      </div>
    </main>
  );
}
