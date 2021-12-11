import React from 'react';
import arrayFloatSum from '../../wasm/functions/arrayFloatSum';
import arrayIntSum from '../../wasm/functions/arrayIntSum';
import styles from './styles.scss';

const IndexPageComponent = () => {
  const intData = [1, 2.75];
  const floatData = [10, 0, 25, 50];

  return (
    <div className={styles.root}>
      <h1>WebAssembly tests</h1>
      <ul>
        <li>
          {intData.join(' + ')}
          {' '}
          =
          {' '}
          {arrayFloatSum(intData)}
        </li>
        <li>
          {floatData.join(' + ')}
          {' '}
          =
          {' '}
          {arrayIntSum(floatData)}
        </li>
      </ul>
    </div>
  );
};

export default IndexPageComponent;
