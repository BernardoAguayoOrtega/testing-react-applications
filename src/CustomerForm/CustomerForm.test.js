import { render } from '@testing-library/react';
import React from 'react';
import { CustomerForm } from './CustomerForm';

describe('CustomerForm', () => {
	let content;
	let form;

	const expectToBeInputFieldOfTypeText = (formElement) => {
		expect(formElement).not.toBeNull();
		expect(formElement.tagName).toEqual('INPUT');
		expect(formElement.type).toEqual('text');
	};

  const firstNameField = (container) => form('customer', container).elements.firstName;

	beforeEach(() => {
		form = (id, container) => container.querySelector(`form[id="${id}"]`);
	});

	it('render a form', () => {
		const { container } = render(<CustomerForm />);
		expect(form('customer', container)).not.toBeNull();
	});

	it('renders the first name field as a  text box', () => {
		const { container } = render(<CustomerForm />);
		expectToBeInputFieldOfTypeText(firstNameField(container));
	});

	it('includes the existing value for the first name', () => {
		const assertion = 'Bernardo';
		const { container } = render(<CustomerForm firstName={assertion} />);
		expect(firstNameField(container).value).toEqual(assertion);
	});
});
