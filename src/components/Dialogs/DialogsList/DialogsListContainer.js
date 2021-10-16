import React from "react";
import DialogsList from "./DialogsList";
import StoreContext from "../../../StoreContext";

const DialogsListContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                const state = store.getState().dialogsPage;

                return <DialogsList dialogs={state.dialogs}/>
            }}
        </StoreContext.Consumer>
    )
}

export default DialogsListContainer;