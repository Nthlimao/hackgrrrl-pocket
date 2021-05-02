import React from "react";
import SearchComponent, { SearchInput } from "./search.styles";

const Search = () => {
    return (
        <SearchComponent>
            <SearchInput
                type="text"
                id="search"
                name="search"
                placeholder="Relizar buscas por categorias"
            />
            <i className="fi-br-search"></i>
        </SearchComponent>
    );
};

export default Search;
