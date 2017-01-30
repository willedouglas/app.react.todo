import React from 'react';
import _ from 'lodash';

import TodosListItem from '../TodoListItem/TodoListItem';

export default class TodosList extends React.Component {
    renderItems() {
        const props = _.omit(this.props, 'todos');

        return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} {...props} />);
    }

    render() {
        return (
            <div className="containerItems">
                {this.renderItems()}
            </div>
        );
    }
}
