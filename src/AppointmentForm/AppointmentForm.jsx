import React, {useState} from 'react';

export const AppointmentForm = ({ selectableServices, service, label, onSubmit }) => {

  const [localService, setService] =useState()

  const handleChangeService = ({ target }) =>
  setService(service => ({
    ...service,
    value: target.value
  }));

  return (
    <form id="appointment">
      <label for="service" id={label}>Service:</label>
      <select name="service" value={localService} onChange={handleChangeService}>
        <option value="" />
        {selectableServices?.map(service => (
          <option key={service} value={service} >{service}</option>
        ))}
      </select>
      <button onSubmit={() => onSubmit({ service })}>submit</button>
    </form>
  )
}

AppointmentForm.defaultProps = {
  selectableServices: [
    'Cut',
    'Blow-dry',
    'Cut & color',
    'Beard trim',
    'Cut & beard trim',
    'Extensions']
};
