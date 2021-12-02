import logotipo from '../../assets/logo.svg'
import { Container, Container2 } from './styles'

interface HeaderProps{
    onOpenNewTransactionModal: () => void
}

export function Header({onOpenNewTransactionModal}: HeaderProps) {
    return(
        <Container>

            <Container2>

            <img src={logotipo} alt="dt money" />
            <button type='button' onClick={onOpenNewTransactionModal}>Nova Transação</button>

            </Container2>

            
        
        </Container>
    )
}