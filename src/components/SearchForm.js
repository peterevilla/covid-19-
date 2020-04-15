import React, { useState } from "react";
import { Input } from 'semantic-ui-react'

const SearchForm = (props) => {
  const [search, setSearch] = useState("");

  const handleOnchange = e => {
    setSearch(e.target.value);
    
  };

  

  const submitForm = (e) => {
    e.preventDefault()
    e.target.reset()
     
    
  };

  return (
    <form className='form' onSubmit={submitForm}>
      <label>
        <Input
          name="search"
          placeholder="search country"
          onChange={handleOnchange}
          values={search}
        />
      </label>
      <button >search</button>
    </form>
  );
};

export default SearchForm;