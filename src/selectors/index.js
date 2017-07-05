import { createSelector } from 'reselect';
import { merge, values } from 'lodash';
export * from './posts';
export * from './todos';
export * from './exchange-rates';

export const getSelectedGiphy = state => state.giphy.selected;

export const getTags = state => values(state.tags.tags).map(tag => tag.text);

export const getProfile = state => state.profile;

export const getModals = state => state.modals;
