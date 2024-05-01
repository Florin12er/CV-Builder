import { ImageAdd } from "./ImageAdd.jsx";
import { InfoInput, InfoTitle } from "./Content";
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
            {LastName}{FirstName} 
          </h1>
          <p className="Profesional-Title-CV">{ProfesionalTitle}</p>
        </div>
        <div className="LeftPart">
          <div className="Contacts">
            <h2>Contacts</h2>
            <hr className="first-line" />
            <p>
              <svg
                fill="#f8fafc"
                width="30px"
                height="30px"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>phone</title>
                <path d="M0 10.375c0 0.938 0.344 1.969 0.781 3.063s1 2.125 1.438 2.906c1.188 2.063 2.719 4.094 4.469 5.781s3.813 3.094 6.125 3.938c1.344 0.531 2.688 1.125 4.188 1.125 0.75 0 1.813-0.281 2.781-0.688 0.938-0.406 1.781-1.031 2.094-1.781 0.125-0.281 0.281-0.656 0.375-1.094 0.094-0.406 0.156-0.813 0.156-1.094 0-0.156 0-0.313-0.031-0.344-0.094-0.188-0.313-0.344-0.563-0.5-0.563-0.281-0.656-0.375-1.5-0.875-0.875-0.5-1.781-1.063-2.563-1.469-0.375-0.219-0.625-0.313-0.719-0.313-0.5 0-1.125 0.688-1.656 1.438-0.563 0.75-1.188 1.438-1.625 1.438-0.219 0-0.438-0.094-0.688-0.25s-0.5-0.281-0.656-0.375c-2.75-1.563-4.594-3.406-6.156-6.125-0.188-0.313-0.625-0.969-0.625-1.313 0-0.406 0.563-0.875 1.125-1.375 0.531-0.469 1.094-1.031 1.094-1.719 0-0.094-0.063-0.375-0.188-0.781-0.281-0.813-0.656-1.75-0.969-2.656-0.156-0.438-0.281-0.75-0.313-0.906-0.063-0.094-0.094-0.219-0.125-0.375s-0.094-0.281-0.125-0.406c-0.094-0.281-0.25-0.5-0.406-0.625-0.156-0.063-0.531-0.156-0.906-0.188-0.375 0-0.813-0.031-1-0.031-0.094 0-0.219 0-0.344 0.031h-0.406c-1 0.438-1.719 1.313-2.25 2.344-0.5 1.031-0.813 2.188-0.813 3.219z"></path>
              </svg>

              {PhoneNumber}
            </p>
            <p>
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.1"
                  d="M3.09097 6.4173C3 6.76072 3 7.21507 3 7.99997V16C3 16.9319 3 17.3978 3.15224 17.7653C3.35523 18.2554 3.74458 18.6447 4.23463 18.8477C4.60218 19 5.06812 19 6 19H18C18.9319 19 19.3978 19 19.7654 18.8477C20.2554 18.6447 20.6448 18.2554 20.8478 17.7653C21 17.3978 21 16.9319 21 16V7.99997C21 7.21506 21 6.76072 20.909 6.4173C20.852 6.5418 20.7683 6.65652 20.6585 6.75255L13.9755 12.6002C12.8444 13.5899 11.1556 13.5899 10.0245 12.6002L3.3415 6.75255C3.23175 6.65652 3.14804 6.5418 3.09097 6.4173Z"
                  fill="#f8fafc"
                />
                <path
                  d="M3 8C3 7.06812 3 6.60218 3.15224 6.23463C3.35523 5.74458 3.74458 5.35523 4.23463 5.15224C4.60218 5 5.06812 5 6 5V5H18V5C18.9319 5 19.3978 5 19.7654 5.15224C20.2554 5.35523 20.6448 5.74458 20.8478 6.23463C21 6.60218 21 7.06812 21 8V16C21 16.9319 21 17.3978 20.8478 17.7654C20.6448 18.2554 20.2554 18.6448 19.7654 18.8478C19.3978 19 18.9319 19 18 19V19H6V19C5.06812 19 4.60218 19 4.23463 18.8478C3.74458 18.6448 3.35523 18.2554 3.15224 17.7654C3 17.3978 3 16.9319 3 16V8Z"
                  stroke="#f8fafc"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 6L10.683 11.8476C11.437 12.5074 12.563 12.5074 13.317 11.8476L20 6"
                  stroke="#f8fafc"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {Email}
            </p>
            <p>
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 22.75H2C1.59 22.75 1.25 22.41 1.25 22C1.25 21.59 1.59 21.25 2 21.25H22C22.41 21.25 22.75 21.59 22.75 22C22.75 22.41 22.41 22.75 22 22.75Z"
                  fill="#f8fafc"
                />
                <path
                  opacity="0.4"
                  d="M20.9992 9.98017V22.0002H2.94922L2.99922 9.97016C2.99922 9.36016 3.27922 8.78022 3.76922 8.40022L10.7692 2.96021C11.4892 2.39021 12.5092 2.39021 13.2292 2.96021L14.5692 4.00019L18.9992 7.4402L20.2292 8.40022C20.7192 8.78022 20.9992 9.36017 20.9992 9.98017Z"
                  fill="#f8fafc"
                />
                <path
                  d="M13 17H11C10.17 17 9.5 17.67 9.5 18.5V22H14.5V18.5C14.5 17.67 13.83 17 13 17Z"
                  fill="#f8fafc"
                />
                <path
                  d="M9.5 13.75H7.5C6.95 13.75 6.5 13.3 6.5 12.75V11.25C6.5 10.7 6.95 10.25 7.5 10.25H9.5C10.05 10.25 10.5 10.7 10.5 11.25V12.75C10.5 13.3 10.05 13.75 9.5 13.75Z"
                  fill="#f8fafc"
                />
                <path
                  d="M16.5 13.75H14.5C13.95 13.75 13.5 13.3 13.5 12.75V11.25C13.5 10.7 13.95 10.25 14.5 10.25H16.5C17.05 10.25 17.5 10.7 17.5 11.25V12.75C17.5 13.3 17.05 13.75 16.5 13.75Z"
                  fill="#f8fafc"
                />
                <path
                  d="M19.0003 7.44L14.5703 4H17.9803C18.5303 4 18.9803 4.43999 18.9803 4.98999L19.0003 7.44Z"
                  fill="#f8fafc"
                />
              </svg>
              {Adress}
            </p>
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
            <hr />
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
