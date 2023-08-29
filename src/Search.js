import React,{useState} from 'react';

const Search = ({searchText}) => {
  const [text,setText]=useState('');
  const onSubmit=(e)=>{
  e.preventDefault();
  searchText(text);
  }
  return (
   
<div className="py-10 flex justify-center">
  <form onSubmit={onSubmit} className="mb-3 xl:w-96">
    <div className="input-group relative flex  items-stretch w-full mb-4">
      <input onChange={e => setText(e.target.value)} type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-300 bg-clip-padding  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white rounded focus:outline-none" placeholder="Search" aria-label="Search "  aria-describedby="button-addon2"/>
      
       
          <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
        
     
    </div>
  </form>
</div>

  )
}

export default Search;