import Banner from "./components/Banner";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import Works from "./components/Works";
import Reviews from "./components/Reviews";

function App() {
  return (
    <div className="app min-h-screen bg-fixed py-3 sm:py-16 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900">
      <div className="wrapper w-11/12 sm:w-10/12 mx-auto p-3 sm:p-16 shadow-xl bg-gradient-to-r from-gray-100 to-gray-300">
        <Header />
        <Banner />
        {/* <Tabs /> */}
        <Works />
        <Reviews />
      </div>
    </div>
  );
}

export default App;
