'use client';
import { useEffect } from 'react';

export default function ResponsiveTableWrapper({ children }) {
  useEffect(() => {
    // Add responsive wrapper to all tables in blog content
    const tables = document.querySelectorAll('.blog-content table');
    
    tables.forEach(table => {
      // Check if table is already wrapped
      if (!table.parentElement?.classList.contains('table-responsive')) {
        // Create wrapper
        const wrapper = document.createElement('div');
        wrapper.className = 'table-responsive overflow-x-auto my-6 rounded-lg border border-gray-200 shadow-sm';
        
        // Wrap the table
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
        
        // Add responsive classes to table
        table.className = 'min-w-full divide-y divide-gray-200 bg-white text-sm';
        
        // Style table headers
        const headers = table.querySelectorAll('th');
        headers.forEach(header => {
          header.className = 'px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50 whitespace-nowrap';
        });
        
        // Style table cells
        const cells = table.querySelectorAll('td');
        cells.forEach(cell => {
          cell.className = 'px-4 py-3 whitespace-nowrap text-gray-900 border-b border-gray-200';
        });
        
        // Style table rows
        const rows = table.querySelectorAll('tbody tr');
        rows.forEach((row, index) => {
          if (index % 2 === 0) {
            row.className = 'bg-white hover:bg-gray-50';
          } else {
            row.className = 'bg-gray-50 hover:bg-gray-100';
          }
        });
      }
    });
  }, [children]);

  return <>{children}</>;
}