import React from 'react';
import './search.css';

const Search = (props) => (
	<form
		className="search"
		action=""
		onSubmit={props.handleSubmit}
	>
		<input
			ref={props.setRef}
			type="text"
			className="search-input"
			placeholder="Busca tu video favorito"
			// defaultValue="jhon erick"
			onChange={props.handleChange}
			value={props.value}
		/>
	</form>
);

export default Search;