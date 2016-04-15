import React from 'react';
import CreatePartyForm from '../dashComponents/CreatePartyForm.jsx';
import PartyDetailsTable from '../dashComponents/PartyDetailsTable.jsx';
import GuestsTable from '../dashComponents/GuestListTable.jsx';

function dash() {
  return (
    <div>
      <h1>Dash</h1>
      <CreatePartyForm />
      <h3>Your Parties!</h3>
      <PartyDetailsTable />
    </div>
  );
}

export default dash;
