import { ImageAdd } from "./ImageAdd.jsx";
import { InfoInput, InfoTitle } from "./Content";
import { Button } from "./buttons.jsx";
import { useState } from "react";

function GeneralInfo() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [ProfesionalTitle, setProfesionalTitle] = useState("");
  const [Description, setDescrition] = useState("");

  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [Adress, setAdress] = useState("");
  return (
    <>
      <InfoTitle title="General Information" />
      <div className="position">
        <InfoInput
          value={FirstName}
          onChange={(e) => setFirstName(e.target.value)}
          id="First-Name"
          type="text"
          placeholder="First Name"
        />
        <InfoInput
          value={LastName}
          onChange={(e) => setLastName(e.target.value)}
          id="Last-Name"
          type="text"
          placeholder="Last Name"
        />
        <ImageAdd />
        <InfoInput
          value={ProfesionalTitle}
          onChange={(e) => setProfesionalTitle(e.target.value)}
          type="text"
          placeholder="Profesional Title"
        />
        <InfoInput
          value={Description}
          onChange={(e) => setDescrition(e.target.value)}
          type="text"
          placeholder="Description"
        />
        <InfoInput
          value={PhoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          type="text"
          placeholder="Phone Number"
        />
        <InfoInput
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <InfoInput
          value={Adress}
          onChange={(e) => setAdress(e.target.value)}
          type="text"
          placeholder="Adress"
        />
      </div>
      <div className="About-cv">
        <div className="name">
          <h1 className="Name-CV">
            {FirstName} {LastName}
          </h1>
          <p className="Profesional-Title-CV">{ProfesionalTitle}</p>
        </div>
        <div className="LeftPart">
          <div className="Contacts">
            <h2>Contacts</h2>
            <p>{PhoneNumber}</p>
            <p>{Email}</p>
            <p>{Adress}</p>
          </div>
        </div>
        <div className="RightPart">
          <div className="Profile">
            <h2>Profile</h2>
            <p>{Description}</p>
          </div>
        </div>
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
      <div className="buttons">
        <Button class="add" name="add" />
        <Button class="delete" name="delete" />
      </div>
    </>
  );
}
function WorkExperience() {
  return (
    <>
      <InfoTitle className="Work" title="Work Experience" />
      <div className="position">
        <InfoInput type="text" placeholder="Job Title" />
        <InfoInput type="text" placeholder="Company Name" />
        <InfoInput type="text" placeholder="City" />
        <InfoInput type="text" placeholder="From" />
        <InfoInput type="text" placeholder="To" />
        <InfoInput type="text" placeholder="Description" />
      </div>
      <div className="buttons">
        <Button class="add" name="add" />
        <Button class="delete" name="delete" />
      </div>
    </>
  );
}
export { GeneralInfo, Education, WorkExperience };
