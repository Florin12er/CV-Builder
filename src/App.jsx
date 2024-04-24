import "./index.css";
import { ImageAdd } from "./React/ImageAdd"; 
import { InfoInput, InfoTitle,Title  } from "./React/Content";
function GeneralInfo() {
    return (
        <>
            <InfoTitle title="General Information" />
            <div className="position">
                <InfoInput id="First-Name" type="text" placeholder="First Name" />
                <InfoInput id="Last-Name" type="text" placeholder="Last Name" />
                <ImageAdd />
                <InfoInput type="text" placeholder="Profesional Title" />
                <InfoInput type="text" placeholder="Description" />
                <InfoInput type="text" placeholder="Phone Number" />
                <InfoInput type="email" placeholder="Email" />
                <InfoInput type="text" placeholder="Adress" />
            </div>
        </>
    );
}
function Education() {
    return (
        <>
            <InfoTitle title="Education" />
            <div className="position">
                <InfoInput type="text" placeholder="Degree" />
                <InfoInput type="text" placeholder="University or School Name" />
                <InfoInput type="text" placeholder="Course" />
                <InfoInput type="text" placeholder="From" />
                <InfoInput type="text" placeholder="To" />
            </div>
        </>
    );
}
function WorkExperience() {
    return (
        <>
            <InfoTitle title="Work Experience" />
            <div className="position">
                <InfoInput type="text" placeholder="Job Title" />
                <InfoInput type="text" placeholder="Company Name" />
                <InfoInput type="text" placeholder="City" />
                <InfoInput type="text" placeholder="From" />
                <InfoInput type="text" placeholder="To" />
                <InfoInput type="text" placeholder="Description" />
            </div>
        </>
    );
}
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
