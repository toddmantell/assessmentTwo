import React from 'react';
import {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

const Adapter = new Adapter({})

describe('App', () => {
	it('should render the full app', () => {
		const mountedApp = mount(<App />)
	});
})
