import React from 'react';
import { AppointmentForm } from './AppointmentForm';
import { render } from '@testing-library/react';

describe('AppointmentForm', () => {
	const form = (id, container) => container.querySelector(`form[id="${id}"]`);
	const field = (name, container) =>
		form('appointment', container).elements[name];
	const findOption = (dropdownNode, textContent) => {
		const options = Array.from(dropdownNode.childNodes);
		return options.find((option) => option.textContent === textContent);
	};

	describe('service field', () => {
		it('renders a form', () => {
			const { container } = render(<AppointmentForm />);
			expect(form('appointment', container)).not.toBeNull();
		});

		it('renders as a select box', () => {
			const { container } = render(<AppointmentForm />);
			expect(field('service', container)).not.toBeNull();
			expect(field('service', container).tagName).toEqual('SELECT');
		});

		it('initially has a blank value chosen', () => {
			const { container } = render(<AppointmentForm />);
			const firstNode = field('service', container).childNodes[0];
			expect(firstNode.value).toEqual('');
			expect(firstNode.selected).toBeTruthy();
		});

		it('lists all salon services', () => {
			const selectableServices = [
				'Cut',
				'Blow-dry',
				'Cut & color',
				'Beard trim',
				'Cut & beard trim',
				'Extensions',
			];

			const { container } = render(
				<AppointmentForm selectableServices={selectableServices} />,
			);

			const optionNodes = Array.from(field('service', container).childNodes);

			const renderedServices = optionNodes.map((node) => node.textContent);
			expect(renderedServices).toEqual(
				expect.arrayContaining(selectableServices),
			);
		});

		it('pre.selects the exiting value', () => {
			const services = ['cut', 'Blow-dry'];

			const { container } = render(
				<AppointmentForm selectableServices={services} service='Blow-dry' />,
			);

			const option = findOption(field('service', container), 'Blow-dry');

			expect(option.selected).toBeTruthy();
		});

		it('should render a label for selected element', () => {
			const { container } = render(<AppointmentForm service='Blow-dry' />);

			const Label = container.querySelector('label[for="service"]') 

			expect(Label).not.toBeNull()
			expect(Label.textContent).toEqual('Service:')
		});
	});
});
