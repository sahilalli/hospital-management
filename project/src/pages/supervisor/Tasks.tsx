import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { TaskList } from '../../components/tasks/TaskList';
import { Card } from '../../components/common/Card';
import type { Task } from '../../types';

const mockTasks: Task[] = [
  {
    id: '1',
    employeeId: '1',
    description: 'Monitor vital signs for patients in Room 201',
    status: 'Pending',
    createdAt: new Date(),
  },
  // Add more mock data
];

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const handleAddTask = () => {
    if (!newTaskDescription.trim()) return;

    const newTask: Task = {
      id: Math.random().toString(36).substr(2, 9),
      employeeId: '1', // In a real app, this would be selected
      description: newTaskDescription,
      status: 'Pending',
      createdAt: new Date(),
    };

    setTasks([...tasks, newTask]);
    setNewTaskDescription('');
  };

  const handleCompleteTask = (taskId: string) => {
    setTasks(prev => prev.map(task =>
      task.id === taskId
        ? { ...task, status: 'Completed', completedAt: new Date() }
        : task
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Task Management</h2>
      </div>

      <Card>
        <div className="flex space-x-4">
          <input
            type="text"
            value={newTaskDescription}
            onChange={(e) => setNewTaskDescription(e.target.value)}
            placeholder="Enter new task description..."
            className="flex-1 border rounded-lg px-4 py-2"
          />
          <button
            onClick={handleAddTask}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Plus className="h-5 w-5" />
            <span>Add Task</span>
          </button>
        </div>
      </Card>

      <TaskList tasks={tasks} onCompleteTask={handleCompleteTask} />
    </div>
  );
}