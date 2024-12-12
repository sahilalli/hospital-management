export type Employee = {
  id: string;
  name: string;
  designation: string;
  accountDetails: {
    bankName: string;
    accountNumber: string;
  };
  block?: string;
  shift?: string;
  status: 'Available' | 'Assigned';
};

export type Supervisor = {
  id: string;
  name: string;
  block: string;
  shift: string;
};

export type Task = {
  id: string;
  employeeId: string;
  description: string;
  status: 'Pending' | 'Completed';
  createdAt: Date;
  completedAt?: Date;
};

export type Attendance = {
  id: string;
  employeeId: string;
  date: Date;
  status: 'Present' | 'Absent' | 'Half-Day';
  supervisorId: string;
};