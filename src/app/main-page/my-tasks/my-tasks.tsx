"use client";
import { Task, TaskPriority, TaskSize, TaskStatus } from "@/shared/task.model";
import "./my-tasks.css";
import { useState } from "react";
import { AddTask } from "./add-task/add-task";

export function MyTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const setTaskCallback = (task: Task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="my-tasks-container">
      My tasks
      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Task</th>
            <th>Priority</th>
            <th>Size</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={`${task.name} ${index}`}>
              <td>{task.status}</td>
              <td>{task.name}</td>
              <td>{task.priority}</td>
              <td>{task.size}</td>
              <td>{task.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddTask setTaskCallback={setTaskCallback} />
    </div>
  );
}
