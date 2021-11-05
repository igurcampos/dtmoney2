import { Summary } from "../Summary"
import { TrasactionTable } from "../TransactionsTable"
import { Container } from "./style"

export function Dashboard() {
    return(
        <Container>
            <Summary/>

            <TrasactionTable/>
        </Container>
    )
}