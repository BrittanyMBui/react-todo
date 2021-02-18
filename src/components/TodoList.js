import React from 'react';
import TodoCard from './TodoCard';

const TodoList = (props) => {
    let todos = props.todos.map((todoObj) => {
        return (
            <TodoCard
                key={todoObj._id}
                todo={todoObj} />
        );
    });

    return (
        <ul>
            {todos}
        </ul>
    )
};

export default TodoList;

