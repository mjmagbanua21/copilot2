// src/App.js

import React, { useState } from 'react';
import OrganizationInfo from './components/OrganizationInfo';

function App() {
  // State to manage organization details
  const [orgDetails, setOrgDetails] = useState({
    name: 'XYZ Corporation',
    description: 'A leading innovator in the tech industry.',
    icons: ['path/to/icon1.png', 'path/to/icon2.png'] // Array of icon paths
  });

  return (
    <div className="App">
      <OrganizationInfo
        name={orgDetails.name}
        description={orgDetails.description}
        icons={orgDetails.icons}
      />
      // Rest of your app components
    </div>
  );
}
