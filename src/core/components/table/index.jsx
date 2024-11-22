// import Textfield from '../input'
import './index.scss'
import React, { useState, useMemo, memo } from 'react';

const TableUI = ({ columns, data = [], options, actions }) => {
  const [sortConfig, setSortConfig] = useState(null);
  const [filter, setFilter] = useState('');

  const sortedData = useMemo(() => {
    let sortableItems = [...data];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [data, sortConfig]);

  const requestSort = key => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const filteredData = sortedData.filter(item =>
    columns.some(col => {
      const value = item[col.accessor];
      return value
        ? value.toString().toLowerCase().includes(filter.toLowerCase())
        : false;
    })
  );

  return (
    <div className='table-container-main'>
      <div className='table-functions'>
        <div className='search-input'>
          <input
            type="text"
            placeholder="Buscar..."
            value={filter}
            onChange={e => setFilter(e.target.value)}
          />
        </div>

        <div className='register-button'>
          <button onClick={options?.onClick ?? null}>
            <img src='/icons/edit.svg' />
          </button>
        </div>

      </div>
      <div className='table-container'>
        <table>
          <thead>
            <tr>
              {columns.map(column => (
                <th
                  key={column.accessor}
                  onClick={() => requestSort(column.accessor)}
                >
                  <h3 className='text'>
                    <p>{column.label}</p>
                    {sortConfig && sortConfig.key === column.accessor ? (
                      sortConfig.direction === 'ascending' ? (<span className="material-symbols-outlined">⬆️</span>) : (<span className="material-symbols-outlined">⬇️</span>)
                    ) : null}
                  </h3>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                {columns.map(column => (
                  <td key={column.accessor}>{String(item[column.accessor]).length > 30 ? `${String(item[column.accessor]).slice(0, 35)}...` : item[column.accessor]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default memo(TableUI);
