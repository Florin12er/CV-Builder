import "./index.css";
import { Title } from "./React/Content";
import { GeneralInfo, Education, WorkExperience } from "./React/about.jsx";
function Builder() {
  return (
    <>
      <div className="Builder">
        <GeneralInfo />
        <Education />
        <WorkExperience />
      </div>
    </>
  );
}
function App() {
  return (
    <>
      <Title />
      <Builder />
    </>
  );
}
export default App;
