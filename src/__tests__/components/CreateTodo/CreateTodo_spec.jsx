import React from 'react';
import { mount } from 'enzyme';
import TodosCreate from '../../../components/TodoCreate/TodoCreate';

describe('TodosCreate', () => {

	it('TodosCreate render test', () => {
		const todos = [
			{
				task: 'Task 1',
				isCompleted: false
			},
			{
				task: 'Task 2',
				isCompleted: true
			}
		];

		const wrapper = mount(<TodosCreate todos={todos} />);
		expect(wrapper.find(TodosCreate).length).toBe(1);
	});
});
