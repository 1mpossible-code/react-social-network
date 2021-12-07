import {createSelector} from "reselect";
import {RootState} from "../store";

export const getUsers = (state: RootState) => {
    return state.usersPage.users;
}

export const getCurrentPage = (state: RootState) => state.usersPage.currentPage;

export const getIsLoading = (state: RootState) => state.usersPage.isLoading;

export const getLimit = (state: RootState) => state.usersPage.limit;

export const getIsEnd = createSelector(getUsers, getCurrentPage, getLimit, (users, currentPage, limit) => {
    return currentPage * limit <= users.length
})
