import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Hospital, Users, ClipboardList, BarChart2, Settings, User } from 'lucide-react';

type SidebarItem = {
  icon: React.ElementType;
  label: string;
  path: string;
};

const adminItems: SidebarItem[] = [
  { icon: Users, label: 'Employees', path: '/admin/employees' },
  { icon: Users, label: 'Supervisors', path: '/admin/supervisors' },
  { icon: ClipboardList, label: 'Shifts', path: '/admin/shifts' },
  { icon: BarChart2, label: 'Reports', path: '/admin/reports' },
  { icon: Settings, label: 'Settings', path: '/admin/settings' },
];

const supervisorItems: SidebarItem[] = [
  { icon: ClipboardList, label: 'My Shift', path: '/supervisor/shift' },
  { icon: Users, label: 'Employee Assignments', path: '/supervisor/assignments' },
  { icon: ClipboardList, label: 'Attendance', path: '/supervisor/attendance' },
  { icon: ClipboardList, label: 'Task Management', path: '/supervisor/tasks' },
];

export default function Layout({ children, role = 'admin' }: { children: React.ReactNode; role?: 'admin' | 'supervisor' }) {
  const location = useLocation();
  const items = role === 'admin' ? adminItems : supervisorItems;

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4 border-b">
          <div className="flex items-center space-x-2">
            <Hospital className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">HMS</span>
          </div>
        </div>
        <nav className="p-4">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 p-3 rounded-lg mb-1 ${
                  isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <h1 className="text-2xl font-semibold text-gray-800">
              Hospital Management System
            </h1>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                <User className="h-5 w-5" />
                <span>Profile</span>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto bg-gray-50 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}