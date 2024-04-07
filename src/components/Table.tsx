import React from 'react';

interface TableProps {
  data: any[]; // Assuming data is an array of objects
  columns: { key: string; title: string }[]; // Columns configuration
}

const Table: React.FC<TableProps> = ({ data, columns }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map(column => (
            <th key={column.key}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map(column => (
              <td key={column.key}>{row[column.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
