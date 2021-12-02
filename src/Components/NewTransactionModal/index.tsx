import Modal from 'react-modal';
import { Container3 } from './style';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose:() => void;
}

export function NewTransactionModal({isOpen, onRequestClose} : NewTransactionModalProps) {

    return(
    <Modal 
          isOpen={isOpen} 
          onRequestClose={onRequestClose}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
                    
    >

    <Container3>


    <h2>Cadastrar transação</h2>

    <input placeholder='Item' />
    <input type='number' placeholder='Valor' />
    <input placeholder='Categoria' />

    <button type="submit">Cadastrar</button>


    
    </Container3>

    </Modal>

    );
}