import { ReactNode, useState } from "react";
import { SearchContext } from "../SearchContext";

const SearchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [searchValue, setSearchValue] = useState<string>('');

    return (
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
            {children}
        </SearchContext.Provider>
    );
};
export default SearchProvider