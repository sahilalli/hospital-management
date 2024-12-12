import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card } from '../common/Card';
import type { Attendance } from '../../types';

interface AttendanceChartProps {
  data: {
    name: string;
    present: number;
    absent: number;
    halfDay: number;
  }[];
}

export function AttendanceChart({ data }: AttendanceChartProps) {
  return (
    <Card className="h-96">
      <h3 className="text-lg font-semibold mb-4">Monthly Attendance Overview</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="present" fill="#10B981" name="Present" />
          <Bar dataKey="absent" fill="#EF4444" name="Absent" />
          <Bar dataKey="halfDay" fill="#F59E0B" name="Half Day" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}