"use client";

import React from 'react';
import styles from './parf_output.module.css';
import IterationTable from "./visual/IterationTable";

const Initial_output = () => {
  return (
    <div className={styles.parfInputContainer} style={{ minWidth: '20vw', maxHeight: '100vh', overflow: 'hidden' }}>
      <div 
        className={styles.displayMonitor} 
        style={{ minHeight: '45vh', maxHeight: '80vh', overflowY: 'auto', padding: '1rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
      >
        <h1 className="text-3xl font-bold text-center mb-8">参数分布迭代表</h1>
        <IterationTable />
      </div>
    </div>
  );
};

export default Initial_output;
