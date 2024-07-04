import React from 'react';

const Home = ({ handleClick }) => {
  return (
    <>
      <div className="heading">
        <h1> Form in React </h1>
      </div>

      <form>
        <label> First Name </label>
        <br /><br />
        <input type="text" placeholder="Enter First Name" className="firstName" required />
        <br /><br />

        <label> Last Name </label>
        <br /><br />
        <input type="text" placeholder="Enter Last Name" className="lastName" required />
        <br /><br />

        <label> Enter Email </label>
        <br /><br />
        <input type="email" placeholder="Enter email" className="email" required />
        <br /><br />

        <label> Enter Contact</label>
        <br /><br />
        <input type="text" placeholder="Enter mobile number" className="contact" required />
        <br /><br />

        <label> Gender </label>
        <br /><br />
        <label htmlFor="male">Male</label>
        <input type="radio" value="Male" name="gender" id="male" />
        <label htmlFor="female">Female</label>
        <input type="radio" value="Female" name="gender" id="female" />
        <label htmlFor="other">Other</label>
        <input type="radio" value="Other" name="gender" id="other" />
        <br /><br />

        <label> Your best subject </label>
        <br /><br />
        <label htmlFor="eng">English</label>
        <input type="radio" value="English" name="subject" id="eng" />
        <label htmlFor="math">Math</label>
        <input type="radio" value="Math" name="subject" id="math" />
        <label htmlFor="science">Science</label>
        <input type="radio" value="Science" name="subject" id="science" />
        <br /><br />

        <label htmlFor="resume"> Upload Resume </label>
        <br /><br />
        <input type="file" id="resume" className="resume" />
        <br /><br />

        <label htmlFor="url"> Enter URL </label>
        <br /><br />
        <input type="url" placeholder="Enter url" className="url" />
        <br /><br />

        <label htmlFor="domain"> Select your Choice </label>
        <br /><br />
        <select name="domain" id="domain" className="domain">
          <optgroup label="Beginners">
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="js">JavaScript</option>
          </optgroup>
          <optgroup label="Advanced">
            <option value="react">React</option>
            <option value="node">Node</option>
            <option value="express">Express</option>
            <option value="mongodb">MongoDB</option>
          </optgroup>
        </select>
        <br /><br />

        <label htmlFor="about"> About </label>
        <br /><br />
        <textarea name="about" id="about" className="about"></textarea>
        <br /><br />

        <label htmlFor="submitORreset"> Submit OR Reset </label>
        <br /><br />
        <button type="reset">Reset</button>
        <button type="submit" onClick={handleClick}>Submit</button>
      </form>
    </>
  );
};

export default Home;
