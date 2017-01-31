/* global it, describe, expect */

import React from 'react';
import {shallow, mount} from 'enzyme';
import TodoList from '../../../components/TodoList/TodoList';
import TodosListItem from '../../../components/TodoListItem/TodoListItem';

describe('TodoList', () => {
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

	it('TodoList render test', () => {
		const wrapper = shallow(<TodoList todos={todos}/>);
		expect(wrapper.find('.containerItems').length).toBe(1);
	});
	it('TodoList render with TodoListItem expect container test', () => {
		const wrapper = mount(<TodoList todos={todos} toggleTask={() => {}} deleteTask={() => {}}/>);
		expect(wrapper.find('.containerItem').length).toBe(2);
	});

	it('TodoList render with TodoListItem expect TodoListItem test', () => {
		const wrapper = mount(<TodoList todos={todos} toggleTask={() => {}} deleteTask={() => {}}/>);
		expect(wrapper.find(TodosListItem).length).toBe(2);
	});

	it('TodoList render with TodoListItem expect TodoListItem test', () => {
		const wrapper = mount(<TodoList todos={todos} toggleTask={() => {}} deleteTask={() => {}}/>);
		expect(wrapper.find(TodosListItem).length).toBe(2);
	});
});
