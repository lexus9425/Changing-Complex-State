import React, { useState } from "react";

function App() {
  const [fname, setName1] = useState("");
  const [headingText1, setHeading1] = useState("");

  const [lname, setName2] = useState("");
  const [headingText2, setHeading2] = useState("");

  function handleChange(event) {
    setName1(event.target.value);
  }

  function handleChange2(event) {
    setName2(event.target.value);
  }

  function handleClick() {
    setHeading1(fname);
    setHeading2(lname);
  }

  return (
    <div className="container">
      <h1>
        Hello {headingText1} {headingText2}
      </h1>
      <form>
        <input
          onChange={handleChange}
          type="text"
          name="fName"
          placeholder="First Name"
          value={fname}
        />
        <input
          onChange={handleChange2}
          type="text"
          name="lName"
          placeholder="Last Name"
          value={lname}
        />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}

export default App;
