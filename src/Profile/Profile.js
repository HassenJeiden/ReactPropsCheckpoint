import React from 'react';
import PropTypes from "prop-types";


function Profile({pf,children,handleName}) {
  const styleH1={color: "Yellow"}
  const styleH2={color: "green"}
  return (
    <div>
      {children}
      <h1 style={styleH1} >
        {pf.fullName}
      </h1>
      <h2 style={styleH2} onClick={()=>handleName(pf.fullName)}>
        {pf.profession}
      </h2>
      <p>
      {pf.bio}
      </p>
    </div>
  );
}
Profile.propTypes={
  fullName:PropTypes.string,
  profession:PropTypes.string,
  handleName:PropTypes.func
}
export default Profile;