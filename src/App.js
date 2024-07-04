import Data from "./Data";
import Home from "./Home";
// import Display from "./Display";

function App() {
  return (
    <>
    {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="data" element={<Data />} />
        <Route path="display" element={<Display />} />
      </Route>
    </Routes>
    </BrowserRouter> */}
    <Data />
    </>
  );
}

export default App;
