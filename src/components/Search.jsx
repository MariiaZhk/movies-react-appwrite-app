/* eslint-disable react/prop-types */

export default function Search({ searchTerm, setSearchTerm }) {
  return (
    <div className="search">
      <div>
        <img src="search.svg" alt="Search" />
        <input
          type="text"
          placeholder="Search for a movie"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
