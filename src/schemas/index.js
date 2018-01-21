import api from '../api.json';
import { normalize, schema } from 'normalizr';

/**
 * @param String Indice del esquema
 * @param Object Objeto heredado para schema - definición
 * @param Object Objeto parametros
 */
const media = new schema.Entity('media', {}, {
	idAttribute: 'id', // -> usar en caso de que el campo key no se llame id
	processStrategy: (value, parent, key)=>({...value, category: parent.id})
});
const category = new schema.Entity('categories', {
	playlist: new schema.Array(media)
});
const categories = { categories: new schema.Array(category) }

const normalizedData = normalize(api, categories);

export default normalizedData;