import Assets from "./Assets";
import Assets1 from "./Assets1";
import Assets2 from "./Assets2";

// JSX - Javascript and XML
// <App />
// User Defined Tag
// Component.
function App() {
  const p1 =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum ratione minima facere minus vel? Dignissimos aliquam ducimus facilis provident mollitia accusantium molestias! Suscipit at, enim quos excepturi aliquid molestiae aperiam! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum ratione minima facere minus vel? Dignissimos aliquam ducimus facilis provident mollitia accusantium molestias! Suscipit at, enim quos excepturi aliquid molestiae aperiam!";
  return (
    <div>
      <Assets />
      <hr />
      <Assets1 title="Mumbai" />
      <hr />
      <Assets2 title="Calcutta" paragraph={p1} />
      <Assets2 title="Chennai" paragraph={p1} />
    </div>
  );
}

export default App;
