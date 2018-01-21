import React, {Component} from 'react';
import Category from './category';
import './categories.css';
import SearchContainer from '../../widgets/containers/search';
import Media from '../../playlist/components/media';

export default function Categories(props){
	return(
		<div className="categories">
			<SearchContainer/>
			{
				props.isLoading &&
				<p>buscando tus videos favoritos...</p>
			}
			{
				// por immutable item ya no es un objeto sino un mapa
				props.search.map((item) => {
					return <Media openModal={props.handleOpenModal} key={item.get('id')} {...item.toJS()} />
				})
			}
			{
				(props.categories).map((item) => {
					return (
						<Category
							{...item.toJS()}
							key={item.get('id')}
							handleOpenModal={props.handleOpenModal}
						/>
					)
				})
			}
		</div>
	);
}