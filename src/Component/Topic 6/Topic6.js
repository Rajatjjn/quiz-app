import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Topic6 = () => {
  let Navigate = useNavigate();
  const [name, setName] = useState("");

  const ChangeName = () => {
    setName("hhhhhhhhhhh");
  };
  useEffect(() => {
   setTimeout(() => {
   Navigate("/");
   }, 3000);
    }, [name]);

  return (
    <>
      {/* <button onClick={Goback}>Go Back</button> */}
      <div>
        <h1>{name}</h1>
        <h3>Hello</h3>

        <button onClick={ChangeName}>Submit</button>
      </div>
    </>
  );
};

export default Topic6;
