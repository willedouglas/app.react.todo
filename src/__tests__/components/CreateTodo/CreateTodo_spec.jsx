/* global it, describe, expect */

import React from 'react';
import {mount} from 'enzyme';
import TodosCreate from '../../../components/TodoCreate/TodoCreate';

describe('TodosCreate', () => {
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

	const wrapper = mount(<TodosCreate todos={todos}/>);
	const instance = wrapper.component.getInstance();

	it('TodosCreate render test', () => {
		expect(wrapper.find(TodosCreate).length).toBe(1);
	});

	it('TodosCreate validateInput with existent task test', () => {
		expect(instance.validateInput('Task 1')).toBe('Task already exists.');
	});

	it('TodosCreate validateInput with null task test', () => {
		expect(instance.validateInput('')).toBe('Please enter a task.');
	});

	it('TodosCreate validateInput with new task test', () => {
		expect(instance.validateInput('Task 3')).toBe(null);
	});

	it('TodosCreate helpBlockText test', () => {
		expect(instance.helpBlockText()).toBe('Press enter to add a new task.');
	});

	it('TodosCreate helpBlockText with an different error test', () => {
		wrapper.setState({error: 'Please enter a task.'});
		expect(instance.helpBlockText()).toBe('Please enter a task.');
	});
});
