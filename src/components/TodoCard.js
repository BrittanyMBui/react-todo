import React, { Component } from 'react';

class TodoCard extends Component {
    render() {
        return (
            <li data-todos-index={this.props.todo_id}>
                <span className="todo-item">{this.props.todo.body}</span>
            </li>
        );
    };
};

export default TodoCard;