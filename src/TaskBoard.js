import React from 'react'

const TaskBoard = ({todotasks, progresstasks, completedtasks}) => {

    return(
        <div className="taskboard">
          <div className="tsk">
            <span className="left">Todo:</span> {todotasks}
          </div>
          <div className="tsk">
            <span className="left">Prog:</span> {progresstasks}  
          </div>
          <div className="tsk">
            <span className="left">Comp:</span> {completedtasks}
          </div>
        </div>
    )
}

export default TaskBoard