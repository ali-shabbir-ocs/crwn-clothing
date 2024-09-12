import { CATEGORIES_ACTION_TYPES } from './categoryTypes';
import { createAction } from '../../utils/reducer/reducer.utils';

export const setCategories = (categoriesArray) => {
    if (!categoriesArray) {
        console.log('categoriesMap is undefined or null');
        return;
    }
    return createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
}