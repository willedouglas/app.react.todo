/* global it, describe, expect */

import React from 'react';
import {mount} from 'enzyme';
import TodoListItem from '../../../components/TodoListItem/TodoListItem';

describe('TodoListItem', () => {
	const wrapper =
		mount(
			<TodoListItem
				toggleTask={() => {}}
				deleteTask={() => {}}
			/>
		);

	const instance = wrapper.component.getInstance();

	it('TodoListItem render test', () => {
		expect(wrapper.find('.containerItem').length).toBe(1);
	});

	it('TodoListItem onCancelClick test', () => {
		instance.onCancelClick();
		expect(wrapper.state('isEditing')).toBe(false);
	});

	it('TodoListItem onEditClick test', () => {
		instance.onEditClick();
		expect(wrapper.state('isEditing')).toBe(true);
	});

	it('TodoListItem renderActionsSection buttonsContainer test', () => {
		instance.onEditClick();
		expect(wrapper.find('.containerEditButtons').length).toBe(1);
	});

	it('TodoListItem renderTaskSection editContainer test', () => {
		instance.onEditClick();
		expect(wrapper.find('.containerEditItem').length).toBe(1);
	});

	it('TodoListItem renderActionsSection actionsContainer test', () => {
		instance.onCancelClick();
		expect(wrapper.find('.containerActionButtons').length).toBe(1);
	});

	it('TodoListItem renderTaskSection containerTasks test', () => {
		instance.onCancelClick();
		expect(wrapper.find('.containerTasks').length).toBe(1);
	});
});
