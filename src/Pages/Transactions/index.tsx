import { Header } from "../../Components/Header/index";
import { Summary } from "../../Components/Summary";
import { SerachForm } from "./Components/SearchForm";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SerachForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de Site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000.00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/10/2022</td>
            </tr>
            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 59,99</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>12/10/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
