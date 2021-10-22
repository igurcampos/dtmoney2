import logotipo from '../../assets/logo.svg'
import { Container, Container2 } from './styles'


export function Header() {
    return(
        <Container>

            <Container2>

            <img src={logotipo} alt="dt money" />
            <button type='button' >Nova Transação</button>

            </Container2>
        
        </Container>
    )
}