import useSearch from "../../utility/hooks/useSearch";

const Roles = () => {
    const { searchValue } = useSearch();
    return (
        <div>Roles
            <p>Search Query: {searchValue}</p>
        </div>
    )
}

export default Roles