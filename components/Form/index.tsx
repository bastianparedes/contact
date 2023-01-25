import React, { useState } from 'react';

import { Loader } from 'bastianparedes/components';
import { BiErrorCircle } from 'react-icons/bi';
import { GrStatusGood } from 'react-icons/gr';

import styles from './styles.module.scss';
import { basePath } from '../../next.config';
import ResultModal from '../ResultModal';

interface typeElements extends HTMLFormControlsCollection {
  userName: { value: string };
  email: { value: string };
  subject: { value: string };
  message: { value: string };
}

interface typeTarget {
  elements: typeElements;
}

const Form = (): JSX.Element => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalProps, setModalProps] = useState({});
  const [showLoader, setShowLoader] = useState(false);
  const successModalProps = {
    Icon: GrStatusGood,
    text: 'Mensaje enviado correctamente, te contactaré lo antes posible.'
  };

  const failModalProps = {
    Icon: BiErrorCircle,
    text: 'Ha ocurrido un error, por favor inténtelo más tarde.'
  };

  const onSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    setShowLoader(true);
    const target = event.target as typeof event.target & typeTarget;
    const elements = target.elements;
    const userName = elements.userName.value;
    const email = elements.email.value;
    const subject = elements.subject.value;
    const message = elements.message.value;

    fetch(String(basePath) + '/api/contact', {
      body: JSON.stringify({
        subject: `${userName} quiere contactarte.`,
        text: [
          `Nombre: ${userName}`,
          `Subject: ${subject}`,
          `E-mail: ${email}`,
          `Message: ${message}`
        ].join('\n')
      }),
      method: 'POST'
    })
      .then((response) => {
        if (response.ok) {
          setModalProps({ ...successModalProps });
        } else {
          setModalProps({ ...failModalProps });
        }
      })
      .catch(() => {
        setModalProps({ ...failModalProps });
      })
      .finally(() => {
        setShowLoader(false);
        setModalVisible(true);
      });
  };

  return (
    <>
      <form
        className={styles.form}
        data-testid="contact-form"
        onSubmit={onSubmit}
      >
        <input name="userName" placeholder="Nombre" type="text" />
        <input name="email" placeholder="Correo electrónico" type="email" />
        <input name="subject" placeholder="Asunto" type="text" />
        <textarea
          className={styles.textarea}
          name="message"
          placeholder="Mensaje"
        />
        <button type="submit" value="Enviar">
          Enviar
        </button>
      </form>
      {modalVisible && (
        <ResultModal setModalVisible={setModalVisible} {...modalProps} />
      )}
      {showLoader && <Loader />}
    </>
  );
};

export default Form;
