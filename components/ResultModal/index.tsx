import React from 'react';

import { Modal } from 'bastianparedes/components';
import type { IconType } from 'react-icons';

import styles from './styles.module.scss';

interface props {
  setModalVisible: (boolean: boolean) => void;
  Icon?: IconType | null;
  text?: string;
}

const ResultModal = ({
  setModalVisible,
  Icon = null,
  text = ''
}: props): JSX.Element => {
  return (
    <Modal setModalVisible={setModalVisible}>
      <div className={styles.container}>
        <div className={styles.iconContainer}>{Icon !== null && <Icon />}</div>
        <div className={styles.textContainer}>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </Modal>
  );
};

export default ResultModal;
