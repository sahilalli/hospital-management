import React, { useState } from 'react';
import { format } from 'date-fns';
import { Download } from 'lucide-react';
import { Card } from '../../components/common/Card';
import { AttendanceChart } from '../../components/reports/AttendanceChart';
import { TaskCompletionChart } from '../../components/reports/TaskCompletionChart';

const mockAttendanceData = [
  { name: 'Week 1', present: 42, absent: 3, halfDay: 5 },
  { name: 'Week 2', present: 38, absent: 7, halfDay: 5 },
  { name: 'Week 3', present: 45, absent: 2, halfDay: 3 },
  { name: 'Week 4', present: 40, absent: 5, halfDay: 5 },
];

const mockTaskData = [
  { name: 'Completed', value: 75 },
  { name: 'Pending', value: 25 },
];

export default function ReportsPage() {
  const [dateRange, setDateRange] = useState({
    start: format(new Date(), 'yyyy-MM-dd'),
    end: format(new Date(), 'yyyy-MM-dd'),
  });

  const handleExport = () => {
    // In a real app, this would generate and download a report
    console.log('Exporting report...');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Reports</h2>
        <button
          onClick={handleExport}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Download className="h-5 w-5" />
          <span>Export Report</span>
        </button>
      </div>

      <Card>
        <div className="flex space-x-4 items-center">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Start Date
            </label>
            <input
              type="date"
              value={dateRange.start}
              onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              End Date
            </label>
            <input
              type="date"
              value={dateRange.end}
              onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AttendanceChart data={mockAttendanceData} />
        <TaskCompletionChart data={mockTaskData} />
      </div>
    </div>
  );
}