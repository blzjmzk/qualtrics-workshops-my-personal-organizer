"use client";
import { Task, TaskPriority, TaskSize, TaskStatus } from "@/shared/task.model";
import "./my-tasks.css";
import { useState } from "react";
import { AddTask } from "./add-task/add-task";

export function MyTasks() {
  const [tasks, setTasks] = useState();

  const mockTasks: Task[] = [
    {
      status: TaskStatus.TODO,
      name: "Task 1",
      priority: TaskPriority.HIGH,
      size: TaskSize.L,
      details: "Task 1 details",
    },
    {
      status: TaskStatus.IN_PROGRESS,
      name: "Task 2",
      priority: TaskPriority.MEDIUM,
      size: TaskSize.M,
      details: "Task 2 details",
    },
    {
      status: TaskStatus.DONE,
      name: "Task 3",
      priority: TaskPriority.HIGH,
      size: TaskSize.S,
      details: "Task 3 details",
    },
  ];

  return (
    <div>
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
          {mockTasks.map((task, index) => (
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
      <AddTask />
    </div>
  );
}
