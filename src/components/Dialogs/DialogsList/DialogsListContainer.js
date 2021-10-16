import React from "react";
import DialogsList from "./DialogsList";

const DialogsListContainer = ({store}) => {
    const state = store.getState().dialogsPage;

    return (
        <DialogsList dialogs={state.dialogs}/>
    )
}

export default DialogsListContainer;