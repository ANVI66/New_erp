import React, { useState } from "react";
import "./RecruitmentForm.css"; 

const RecruitmentForm = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [graduation, setGraduation] = useState("");
  const [gender, setGender] = useState("");
  const [experiance, setExperiance] = useState("");
  const [employer, setEmployer] = useState("");
  const [currentctc, setCurrentctc] = useState("");
  const [expectedctc, setExpectedctc] = useState("");
  const [noticeperiod, setNoticeperiod] = useState("");
  const [skillset, setSkillset] = useState("");
  const [vacancy, setVacancy] = useState("");
  const [location, setLocation] = useState("");
  const [preferredlocation, setPreferredlocation] = useState("");
  const [resume, setResume] = useState("");

  const onFileChange = (e) => {
    const file = e.target.files[0];
    setResume(file);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      firstname,
      lastname,
      email,
      mobile,
      graduation,
      gender,
      experiance,
      employer,
      currentctc,
      expectedctc,
      noticeperiod,
      skillset,
      vacancy,
      location,
      preferredlocation,
      resume: resume ? resume.name : "",
    });
  };

  return (
    <form onSubmit={onSubmit} className="form-container">
      <h1>Application  Form</h1>
      <h2>Personal Details</h2>
      
      <label htmlFor="firstname">First Name *     </label>
      <input type="text"  placeholder="Name" value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
 
      <label htmlFor="secondname">Second Name *     </label>
      <input type="text"  placeholder="Lastname" value={lastname} onChange={(e) => setLastname(e.target.value)}/>

      <label htmlFor="email"> Email *      </label>
      <input type="email"  placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label htmlFor="mobile"> Contact *      </label>
      <input type="mobile" placeholder="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)}/>

      <label htmlFor="graduation"> Year Of Graduation *      </label>
      <input type="text" placeholder="year" value={graduation} onChange={(e)=> setGraduation(e.target.value)}/>

      <label htmlFor="gender"> Gender *      </label>
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      <label htmlFor="experiance"> Experiance In Year *      </label>
      <select value={experiance} onChange={(e) => setExperiance(e.target.value)}>
  <option value="">Select Experience</option>
  {[...Array(15).keys()].map((num) => (
    <option key={num} value={`${num}-${num + 1}`}>





      {num}-{num + 1}
    </option>
  ))}
</select>

      <label htmlFor="employer"> Current Employer    </label>
      <input type="text" placeholder="employer" value={employer} onChange={(e)=>setEmployer(e.target.value)}/>  

      <label htmlFor="currentctc"> Current CTC (in lakhs per Annum)     </label>
        <input type="text" placeholder="currentctc" value={currentctc} onChange={(e)=>setCurrentctc(e.target.value)}/>

      <label htmlFor="expectedctc"> Expected CTC (in lakhs per Annum)      </label>
        <input type="text" placeholder="expectedctc" value={expectedctc} onChange={(e)=>setExpectedctc(e.target.value)}/>

      <label htmlFor="noticeperiod"> Notice Period      </label>
  <select value={noticeperiod} onChange={(e) => setNoticeperiod(e.target.value)}>
  <option value="immediate">Immediate Join</option>
        <option value="">Select Notice Period</option>
        <option value="0-15">0-15 days</option>
        <option value="15-30">15-30 days</option>
        <option value="30-45">30-45 days</option>
        <option value="45-60">45-60 days</option>
        {/* Add more options as needed */}
      </select>

    <label htmlFor="skillset"> Skill Set      </label>
      <input type="text" placeholder="skillset" value={skillset} onChange={(e)=>setSkillset(e.target.value)}/>

    <label htmlFor="vacancy"> How did you come across this vacancy ? *     </label>
    <select value={vacancy} onChange={(e) => setVacancy(e.target.value)}>
  <option value="">Select an option</option>
  <option value="jobPortal">Job Portal</option>
  <option value="employeeReferral">Employee Referral</option>
  <option value="socialMedia">Social Media</option>
  <option value="companyWebsite">Company Website</option>
  <option value="newspaper">Newspaper</option>
  <option value="other">Other</option>
  {/* Add more options as needed */}
</select>

    <label htmlFor="location"> Current Location *     </label>
      <input type="text" placeholder="location" value={location} onChange={(e)=>setLocation(e.target.value)}/>

    <label htmlFor="preflocation"> Preferred Location *     </label>
      <input type="text" placeholder="preflocation" value={preferredlocation} onChange={(e)=>setPreferredlocation(e.target.value)}/>
      <label htmlFor="resume" className="label-style">
        Upload Your Resume
      </label>
      <input type="file" id="resume" onChange={onFileChange} accept=".pdf,.doc,.docx" style={{ display: "none" }} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default RecruitmentForm;


















