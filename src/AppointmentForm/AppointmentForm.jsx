import React from 'react';

export const AppointmentForm = ({ selectableServices, service }) => <form id="appointment">
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
