import React from 'react';
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

import './styles.css';

interface ModalProps {
    title: string,
    content: any,
    buttonText: string,
    setVisible: Function,
    confirmAction: Function
}

export const VelhIAModal:React.FC<ModalProps> = (props) => {
    const [show] = useState(true);

    function confirm() {
        props.confirmAction();
    }

    return (
        <>
            <Modal
                size="lg"
                contentClassName="modal-container"
                show={show}
                aria-labelledby="example-modal-sizes-title-sm"
                centered
            >
                <Modal.Header className="modal-header">
                    <Modal.Title className="modal-title">{props.title}</Modal.Title> 
                </Modal.Header>

                <Modal.Body className="modal-message">
                    
                </Modal.Body>

                <Modal.Footer className="modal-footer">
                    <Button onClick={confirm}>{props.buttonText}</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}