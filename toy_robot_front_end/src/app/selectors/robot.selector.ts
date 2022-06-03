import { createSelector } from '@ngrx/store';

export const chooseState = (state: any) => state;

export const chooseFirstState = createSelector(chooseState, (state: any) => state);
