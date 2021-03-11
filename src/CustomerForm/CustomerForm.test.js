import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { CustomerForm } from './CustomerForm';
import ReactTestUtils from 'react-dom/test-utils';

describe('CustomerForm', () => {
	let content;
	let form;
	const assertion = 'Bernardo';

	const expectToBeInputFieldOfTypeText = (formElement) => {
		expect(formElement).not.toBeNull();
		expect(formElement.tagName).toEqual('INPUT');
		expect(formElement.type).toEqual('text');
	};

	const firstNameField = (container) =>
		form('customer', container).elements.firstName;

	const labelFor = (formElement, container) =>
		container.querySelector(`label[for="${formElement}"]`);

	beforeEach(() => {
		form = (id, container) => container.querySelector(`form[id="${id}"]`);
	});

	describe('first name field', () => {
		it('render a form', () => {
			const { container } = render(<CustomerForm />);
			expect(form('customer', container)).not.toBeNull();
		});

		it('renders the first name field as a  text box', () => {
			const { container } = render(<CustomerForm />);
			expectToBeInputFieldOfTypeText(firstNameField(container));
		});

		it('includes the existing value for the first name', () => {
			const { container } = render(<CustomerForm firstName={assertion} />);
			expect(firstNameField(container).value).toEqual(assertion);
			expectToBeInputFieldOfTypeText(firstNameField(container));
		});

		it('renders a label for the first name field', () => {
			const { container } = render(<CustomerForm />);
			expect(labelFor('firstName', container)).not.toBeNull();
			expect(labelFor('firstName', container).textContent).toEqual(
				'First name',
			);
		});

		it('assigns anid that matches the label id to the first name field', () => {
			const { container } = render(<CustomerForm />);
			expect(firstNameField(container).id).toEqual('firstName');
		});

		it('saves existing fist name when submitted', async () => {
			const { container } = render(
				<CustomerForm
					firstName={assertion}
					onSubmit={({ firstName }) => expect(firstName).toEqual(assertion)}
				/>,
			);
			fireEvent.submit(form('customer', container));
			expect.hasAssertions();
		});

		it('saves new first name when submitted', async () => {
			expect.hasAssertions();
			const { container } = render(
				<CustomerForm
					firstName={'Bernardo'}
					onSubmit={({ firstName }) =>
						expect(firstName).toEqual('Bernardo Aguayo')
					}
				/>,
			);
			fireEvent.change(firstNameField(container), {
				target: { value: 'Bernardo Aguayo' },
			});
			fireEvent.submit(form('customer', container));
		});
	});
});
