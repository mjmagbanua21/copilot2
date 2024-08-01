// src/components/OrganizationInfo.js

import React from 'react';
import AnimatedIcon from './AnimatedIcon';

function OrganizationInfo({ name, description, icons }) {
  return (
    <div className="organization-info">
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="icons">
        {icons.map((icon, index) => (
          <AnimatedIcon key={index}>
            <img src={icon} alt={`Icon ${index}`} />
          </AnimatedIcon>
        ))}
      </div>
    </div>
  );
}

export default OrganizationInfo;
