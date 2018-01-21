import { OPEN_MODAL, CLOSE_MODAL, SEARCH_ENTITIES, IS_LOADING } from '../action-types/index';

export function openModal(mediaId) {
	return {
		type: OPEN_MODAL,
      payload: {
        mediaId
      }
	}
}
export function closeModal() {
	return {
		type: CLOSE_MODAL
	}
}
export function searchEntities(query){
	return {
		type: SEARCH_ENTITIES,
		payload: {
			query
		}
	}
}
export function isLoading(value){
	return{
		type: IS_LOADING,
		payload: {
			value
		}
	}
}
export function searchAsyncEntities(query){
	return (dispatch) => {
		dispatch(isLoading(true));
		setTimeout(() => {
			dispatch(searchEntities(query));
			dispatch(isLoading(false));
		}, 5000);
	}
}