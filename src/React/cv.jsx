import React, { useState } from 'react';

function CV() {
  const [name, setName] = useState('');

  return (
    <div>
      <input id="First-Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <div>{name}</div>
    </div>
  );
}

