import React from 'react';

export const AppointmentForm = ({ selectableServices, service, label }) => <form id="appointment">
  <label for="service" id={label}>Service:</label>
  <select name="service" value={service} readonly>
    <option value="" />
    {selectableServices?.map(service => (
      <option key={service} value={service} >{service}</option>
    ))}
  </select>
</form>;

AppointmentForm.defaultProps = {
  selectableServices: [
    'Cut',
    'Blow-dry',
    'Cut & color',
    'Beard trim',
    'Cut & beard trim',
    'Extensions']
};
