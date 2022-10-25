import { useEffect, useState } from "react";
import { Header } from "../../Components/Header/index";
import { Summary } from "../../Components/Summary";
import { SerachForm } from "./Components/SearchForm";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

interface Transactions {
  id: number;
  description: string;
  type: "income" | "outocome";
  price: number;
  category: string;
  createdAt: string;
}

export function Transactions() {
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  async function loadTransactions() {
    const response = await fetch("http://localhost:333/transactions");
    const data = await response.json();

    setTransactions(data);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SerachForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((trasaction) => {
              return (
                <tr key={trasaction.id}>
                  <td width="50%">{trasaction.description}</td>
                  <td>
                    <PriceHighlight variant={trasaction.type}>
                      {trasaction.price}
                    </PriceHighlight>
                  </td>
                  <td>{trasaction.category}</td>
                  <td>{trasaction.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
