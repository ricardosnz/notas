import React from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

export default function Modal({ children, classname }) {
  return createPortal(
    <section className={`Modal ${classname}`}>
      <div className="Modal-container">
        {children}
      </div>
    </section>,
    document.getElementById('modal')
  );
}
