import * as S from "components/exchangeStore/SearchBar/SearchBar.style";
import { MdSearch } from "react-icons/md";

export default function SearchBar({ where, onChange, onSearch }) {
  return (
    <S.SearchBarWapper>
      <S.LocationSearchForm onSubmit={onSearch}>
        <S.LocationSearchInput placeholder="원하는 지역을 입력하세요" value={where} onChange={onChange} />
      </S.LocationSearchForm>
      <button type="submit">
        <MdSearch size="2rem" onClick={onSearch} />
      </button>
    </S.SearchBarWapper>
  );
}
