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
                        <hr className="first-line"/>
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
  const [education, setEducation] = useState([
    { degree: "", school: "", course: "", from: "", to: "" },
  ]);

  const handleChange = (index, key, value) => {
    const newEducation = [...education];
    newEducation[index][key] = value;
    setEducation(newEducation);
  };

  return (
    <>
      <InfoTitle title="Education" />
      {education.map((item, index) => (
        <div key={index} className="position">
          <InfoInput
            type="text"
            placeholder="Degree"
            value={item.degree}
            onChange={(e) => handleChange(index, "degree", e.target.value)}
          />
          <InfoInput
            type="text"
            placeholder="University or School Name"
            value={item.school}
            onChange={(e) => handleChange(index, "school", e.target.value)}
          />
          <InfoInput
            type="text"
            placeholder="Course"
            value={item.course}
            onChange={(e) => handleChange(index, "course", e.target.value)}
          />
          <InfoInput
            type="text"
            placeholder="From"
            value={item.from}
            onChange={(e) => handleChange(index, "from", e.target.value)}
          />
          <InfoInput
            type="text"
            placeholder="To"
            value={item.to}
            onChange={(e) => handleChange(index, "to", e.target.value)}
          />
          <div className="Education-Cv">
            <h2>Education</h2>
                        <hr/>
            <h3>{item.degree}</h3>
            <p>{item.school}</p>
            <p>{item.course}</p>
            <p>{item.from}</p>
            <p>{item.to}</p>
          </div>
        </div>
      ))}
    </>
  );
}

function WorkExperience() {
  const [workExperience, setWorkExperience] = useState([
    { jobTitle: "", company: "", city: "", from: "", to: "", description: "" },
  ]);
  const handleChange = (index, key, value) => {
    const newWorkExperience = [...workExperience];
    newWorkExperience[index][key] = value;
    setWorkExperience(newWorkExperience);
  };

  return (
    <>
      <InfoTitle className="Work" title="Work Experience" />
      {workExperience.map((item, index) => (
        <div key={index} className="position">
          <InfoInput
            type="text"
            placeholder="Job Title"
            value={item.jobTitle}
            onChange={(e) => handleChange(index, "jobTitle", e.target.value)}
          />
          <InfoInput
            type="text"
            placeholder="Company Name"
            value={item.company}
            onChange={(e) => handleChange(index, "company", e.target.value)}
          />
          <InfoInput
            type="text"
            placeholder="City"
            value={item.city}
            onChange={(e) => handleChange(index, "city", e.target.value)}
          />
          <InfoInput
            type="text"
            placeholder="From"
            value={item.from}
            onChange={(e) => handleChange(index, "from", e.target.value)}
          />
          <InfoInput
            type="text"
            placeholder="To"
            value={item.to}
            onChange={(e) => handleChange(index, "to", e.target.value)}
          />
          <InfoInput
            type="text"
            placeholder="Description"
            value={item.description}
            onChange={(e) => handleChange(index, "description", e.target.value)}
          />
          <div className="Work-Cv">
            <h2>Work Experience</h2>
            <hr className="second-line" />
            <h3>{item.jobTitle}</h3>
            <p>
              {item.company}|{item.from}-{item.to}|{item.city}
            </p>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export { GeneralInfo, Education, WorkExperience };
