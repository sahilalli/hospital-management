import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Card } from '../common/Card';

interface TaskCompletionChartProps {
  data: {
    name: string;
    value: number;
  }[];
}

const COLORS = ['#10B981', '#EF4444'];

export function TaskCompletionChart({ data }: TaskCompletionChartProps) {
  return (
    <Card className="h-96">
      <h3 className="text-lg font-semibold mb-4">Task Completion Status</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
}