import React from 'react';
import { CheckCircle, Clock } from 'lucide-react';
import { Card } from '../common/Card';
import { StatusBadge } from '../common/StatusBadge';
import type { Task } from '../../types';

interface TaskListProps {
  tasks: Task[];
  onCompleteTask: (taskId: string) => void;
}

export function TaskList({ tasks, onCompleteTask }: TaskListProps) {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <Card key={task.id}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {task.status === 'Completed' ? (
                <CheckCircle className="h-5 w-5 text-green-500" />
              ) : (
                <Clock className="h-5 w-5 text-yellow-500" />
              )}
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {task.description}
                </p>
                <p className="text-sm text-gray-500">
                  Created: {task.createdAt.toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <StatusBadge
                status={task.status}
                type={task.status === 'Completed' ? 'success' : 'warning'}
              />
              {task.status === 'Pending' && (
                <button
                  onClick={() => onCompleteTask(task.id)}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Mark Complete
                </button>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}