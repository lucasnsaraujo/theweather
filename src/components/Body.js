import React, { useState } from "react";
import RightMenu from "./RightMenu";
import InfoContainer from "./InfoContainer";

export default function Body(props) {
  const [data, setData] = useState();

  return (
    <div className="body-container">
      <InfoContainer data={data}></InfoContainer>
      <RightMenu setData={setData} data={data}></RightMenu>
    </div>
  );
}
