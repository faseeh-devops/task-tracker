import React from 'react';
import TaskRow from "./TaskRow";

const Tasks = ({tasks}) => {

    return (
        <>
            {
                tasks.map((task) => (
                <TaskRow task={task}/>
                ))
            }
        </>
    );
};

export default Tasks;
