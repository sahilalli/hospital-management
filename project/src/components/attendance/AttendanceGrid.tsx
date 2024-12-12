import React from 'react';
import { format } from 'date-fns';
import { Card } from '../common/Card';
import { StatusBadge } from '../common/StatusBadge';
import type { Attendance } from '../../types';

interface AttendanceGridProps {
  attendanceData: Attendance[];
  onMarkAttendance: (employeeId: string, status: Attendance['status']) => void;
}

export function AttendanceGrid({ attendanceData, onMarkAttendance }: AttendanceGridProps) {
  const getStatusType = (status: Attendance['status']) => {
    switch (status) {
      case 'Present':
        return 'success';
      case 'Absent':
        return 'error';
      case 'Half-Day':
        return 'warning';
      default:
        return 'info';
    }
  };

  return (
    <Card>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Employee
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {attendanceData.map((record) => (
              <tr key={record.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {record.employeeId}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    {format(record.date, 'PP')}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge 
                    status={record.status} 
                    type={getStatusType(record.status)} 
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => onMarkAttendance(record.employeeId, 'Present')}
                      className="text-green-600 hover:text-green-900"
                    >
                      Present
                    </button>
                    <button
                      onClick={() => onMarkAttendance(record.employeeId, 'Absent')}
                      className="text-red-600 hover:text-red-900"
                    >
                      Absent
                    </button>
                    <button
                      onClick={() => onMarkAttendance(record.employeeId, 'Half-Day')}
                      className="text-yellow-600 hover:text-yellow-900"
                    >
                      Half-Day
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}