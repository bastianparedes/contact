import React from 'react';

import styles from './styles.module.scss';

interface props {
  children?: React.ReactNode;
}

const Main = ({ children }: props): JSX.Element => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Contáctame</h1>
      {children}
    </main>
  );
};

export default Main;
