import React from 'react';
import './App.css';
import { Task } from './Task'
import Add from './Add'
import TaskBoard from './TaskBoard'

class App extends React.Component {

  state = {
    numberOfTasks: 3,
    defaultTask: {
      taskName: 'Task ',
      status: "ToDo"
    },
    todotasks: 3,
    progresstasks: 0,
    completedtasks: 0,
    tasks: [
      {taskName: 'Task 1', status: "ToDo", showSelection: false},
      {taskName: 'Task 2', status: "ToDo", showSelection: false},
      {taskName: 'Task 3', status: "ToDo", showSelection: false}
    ]

  }

  onTaskAdd = () => {
    const numberOfTasks = this.state.numberOfTasks
    const todotasks = this.state.todotasks
    const tasks = this.state.tasks
    tasks.push({taskName: 'Task ' + numberOfTasks + 1, status: "ToDo", showSelection: false})
    this.setState({numberOfTasks: numberOfTasks + 1, todotasks: todotasks + 1, tasks})
  }

  onChangeStatus = (e, taskName) => {
    const showSelection = this.state.showSelection
    console.log(taskName)
    this.state.tasks.forEach(task => {
      if(task.taskName === taskName) {
        task.showSelection = true;
      }
    })
    this.setState({showSelection: !showSelection, tasks: [...this.state.tasks]})
  }

  onStatusChange = (status, existingStatus, taskName) => {
      this.state.tasks.forEach(task => {
        if(task.taskName === taskName) {
          task.status = status;
          task.showSelection = false;
        }
      })
      let todotasks =  this.state.todotasks
      let progresstasks = this.state.progresstasks
      let completedtasks = this.state.completedtasks

      if (status === 'ToDo') todotasks = todotasks + 1
      if (status === 'In Progress') progresstasks = progresstasks + 1
      if (status === 'Completed') completedtasks = completedtasks + 1
      if (existingStatus === 'ToDo') todotasks = todotasks - 1
      if (existingStatus === 'In Progress') progresstasks = progresstasks - 1
      if (existingStatus === 'Completed') completedtasks = completedtasks - 1
      this.setState({tasks: [...this.state.tasks], todotasks, progresstasks, completedtasks})
  }


  render() {

    let taskProps = [];
    const tasks = [...this.state.tasks]
    console.log('in render')
    tasks.forEach((task, index) => {
      taskProps.push(
        <Task 
          key={index} 
          taskName={task.taskName} 
          status={task.status}
          onChangeStatus={this.onChangeStatus}
          onStatusChange={this.onStatusChange}
          showSelection={task.showSelection}
        />
      )
    })

    return (
      <div className="App">
        <h1>Tasks</h1>
        <div className="container">
          <Add onTaskAdd={this.onTaskAdd}/>
          <TaskBoard 
            todotasks={this.state.todotasks}
            progresstasks={this.state.progresstasks}
            completedtasks={this.state.completedtasks}
          />
        </div>
        <div className="container">
          {taskProps}
        </div>
      </div>
    );
  }

}

export default App;
