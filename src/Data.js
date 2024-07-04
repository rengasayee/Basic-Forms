import React, { useState } from 'react';
import Home from './Home';

const Data = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  const [subject, setSubject] = useState("");
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState("");
  const [domain, setDomain] = useState("");
  const [about, setAbout] = useState("");

  const handleClick = (e) => {
    e.preventDefault();

    const fname = document.querySelector('.firstName')?.value;
    setFirstName(fname);

    const lname = document.querySelector('.lastName')?.value;
    setLastName(lname);

    const emailVal = document.querySelector('.email')?.value;
    setEmail(emailVal);

    const contactVal = document.querySelector('.contact')?.value;
    setContact(contactVal);

    const genderVal = document.querySelector('input[name="gender"]:checked')?.value;
    setGender(genderVal);

    const subjectVal = document.querySelector('input[name="subject"]:checked')?.value;
    setSubject(subjectVal);

    const resumeVal = document.querySelector('.resume')?.files[0]?.name;
    setResume(resumeVal);

    const urlVal = document.querySelector('.url')?.value;
    setUrl(urlVal);

    const domainVal = document.querySelector('.domain')?.value;
    setDomain(domainVal);

    const aboutVal = document.querySelector('.about')?.value;
    setAbout(aboutVal);
  }

  return (
    <>
      <Home handleClick={handleClick} />

      <div className="details">
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{email}</p>
        <p>{contact}</p>
        <p>{gender}</p>
        <p>{subject}</p>
        <p>{resume}</p>
        <p>{url}</p>
        <p>{domain}</p>
        <p>{about}</p>
      </div>
    </>
  );
};

export default Data;
