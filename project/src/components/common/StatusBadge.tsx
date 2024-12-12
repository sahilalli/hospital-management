import React from 'react';
import clsx from 'clsx';

type StatusType = 'success' | 'warning' | 'error' | 'info';

interface StatusBadgeProps {
  status: string;
  type?: StatusType;
}

const statusStyles: Record<StatusType, string> = {
  success: 'bg-green-100 text-green-800',
  warning: 'bg-yellow-100 text-yellow-800',
  error: 'bg-red-100 text-red-800',
  info: 'bg-blue-100 text-blue-800',
};

export function StatusBadge({ status, type = 'info' }: StatusBadgeProps) {
  return (
    <span className={clsx(
      'px-2 inline-flex text-xs leading-5 font-semibold rounded-full',
      statusStyles[type]
    )}>
      {status}
    </span>
  );
}