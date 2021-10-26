import {createSelector} from "reselect";

export const getUsers = (state) => {
    return state.usersPage.users;
}

export const getCurrentPage = state => state.usersPage.currentPage;

export const getIsLoading = state => state.usersPage.isLoading;

export const getLimit = state => state.usersPage.limit;

export const getIsEnd = createSelector(getUsers, getCurrentPage, getLimit, (users, currentPage, limit) => {
    return currentPage * limit <= users.length
})
