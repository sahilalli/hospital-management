import React, { useState } from 'react';
import { AttendanceGrid } from '../../components/attendance/AttendanceGrid';
import type { Attendance } from '../../types';

const mockAttendance: Attendance[] = [
  {
    id: '1',
    employeeId: '1',
    date: new Date(),
    status: 'Present',
    supervisorId: 'sup1',
  },
  // Add more mock data
];

export default function AttendancePage() {
  const [attendance, setAttendance] = useState<Attendance[]>(mockAttendance);

  const handleMarkAttendance = (employeeId: string, status: Attendance['status']) => {
    setAttendance(prev => prev.map(record => 
      record.employeeId === employeeId 
        ? { ...record, status } 
        : record
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Attendance Management</h2>
      </div>
      
      <AttendanceGrid 
        attendanceData={attendance}
        onMarkAttendance={handleMarkAttendance}
      />
    </div>
  );
}