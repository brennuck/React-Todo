import React from 'react';

const Todo = props => {
    return (
        <div
        className={`todo${props.data.completed ? ' completed' : ''}`}
        onClick = {() => props.toggleItem(props.data.id)}
        >
            <p>{props.data.task}</p>
        </div>
    )
}

export default Todo;