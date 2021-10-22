import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import TotalcomeImg from '../../assets/total.svg'

import { Container2 } from "./styles"

export function Summary() {
    return(
        <Container2>

        <div>
            <header>
                <p>Entradas</p>
                <img src={IncomeImg} alt="entradas" />
            </header>
            <strong>R$1000,00</strong>
        </div>
        <div>
            <header>
                <p>Saídas</p>
                <img src={OutcomeImg} alt="saidas" />
            </header>
            <strong>- R$500,00</strong>
        </div>
        <div className="cor-fundo" >
            <header>
                <p>Total</p>
                <img src={TotalcomeImg} alt="total" />
            </header>
            <strong>R$500,00</strong>
        </div>  

        </Container2> //coloquei uma classe na div para colocar uma cor diferente no background
    )
}