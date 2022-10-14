import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";

export function SerachForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Busque sua transação" />

      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}
