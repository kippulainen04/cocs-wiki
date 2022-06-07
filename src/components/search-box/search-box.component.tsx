import { ChangeEvent } from 'react';
import './search-box.style.css';

type SearchBoxProps = {
    className: string;
    placeholder?: string;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void; 
}

const SearchBox = ({ className, onChangeHandler }: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder="search characters"
    // placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;