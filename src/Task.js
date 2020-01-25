import React from 'react'

export const Task = ({status, taskName, showSelection, onStatusChange, onChangeStatus}) =>  {

        

        let backgroundColor;
        if (status === 'ToDo') {
            backgroundColor = 'skyblue'
        } else if (status === 'In Progress') {
            backgroundColor = 'green'
        } else if (status === 'Completed') {
            backgroundColor = 'red'
        }
        
        return(
            <div className="task" style={{backgroundColor}}>
                <div className="row">
                    Task: {taskName}
                </div>
                {!showSelection? 
                    <div className="row">
                        Status: {status}
                    </div> :
                    <div className="row">
                        Status: <select onChange={(e) => onStatusChange(e.target.value, status, taskName)}>
                                    <option selected={status === 'ToDo'} value="ToDo">ToDo</option>
                                    <option selected={status === 'In Progress'} value="In Progress">In Progress</option>
                                    <option selected={status === 'Completed'} value="Completed">Completed</option>
                                </select>
                    </div>
                }
                <div className="row">
                    <button className="btnchg" onClick={(e) => onChangeStatus(e, taskName)} name="Change Status">Change Status</button>
                </div>
            </div>
        )

} 