import React, { useState } from "react";

const SearchForm = (props) => {
  const [search, setSearch] = useState("");

  const handleOnchange = e => {
    setSearch(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault()
    console.log(search);
    // props.onSearch(search)
     
    
  };

  return (
    <form onSubmit={submitForm}>
      <label>
        <input
          name="search"
          placeholder="search country"
          onChange={handleOnchange}
          values={search}
        />
      </label>
    </form>
  );
};

export default SearchForm;