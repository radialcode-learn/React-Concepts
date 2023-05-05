import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import SliderWithAccordion from "./components/sliderwithaccordion/SliderWithAccordion";
import NavTabs from "./components/navtabs/NavTabs";

function App() {
  return (
    <>
      {/* Imported here */}
      <SliderWithAccordion />
      <NavTabs />
    </>
  );
}

export default App;
