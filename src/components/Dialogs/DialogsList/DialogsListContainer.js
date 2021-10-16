import DialogsList from "./DialogsList";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    dialogs: state.dialogsPage.dialogs,
})

const DialogsListContainer = connect(mapStateToProps)(DialogsList);

export default DialogsListContainer;