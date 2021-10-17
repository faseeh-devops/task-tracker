import React from 'react';

const TaskRow = ({task}) => {
    return (
        <div className={"task"}>
            <h3 key={task.id}>{task.text}</h3>
            <p>{task.day}</p>
        </div>
    );
};

export default TaskRow;
