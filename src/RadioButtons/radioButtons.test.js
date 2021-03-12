import React from 'react'
import { render } from '@testing-library/react'
import RadioButtons from './RadioButtons'


describe('time slot table', () => {
	it('renders a table for time slots', () => {
		const { container } = render(<RadioButtons />);
		expect(container.querySelector('table#time-slots')).not.toBeNull();
	});
});
