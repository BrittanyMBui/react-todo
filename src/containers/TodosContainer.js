import React from 'react';
import TodoModel from '../models/Todo';
import TodoList from '../components/TodoList';


class TodosContainer extends React.Component {
    state = {
        todos: [],
    }

    componentDidMount() {
        this.fetchData();
    };

    fetchData = () => {
        TodoModel.all().then((res) => {
            this.setState ({
                todos: res.data.todos,
            });
        });
    };

    render() {

        return(
            <div className="todosComponent">
                <TodoList
                    todos={this.state.todos}
                />
            </div>
        );
    }
}

export default TodosContainer;