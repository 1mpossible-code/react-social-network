import DialogsList from "./DialogsList";
import {connect} from "react-redux";
import {RootState} from "../../../redux/store";

const mapStateToProps = (state: RootState) => ({
    dialogs: state.dialogsPage.dialogs,
})

const DialogsListContainer = connect(mapStateToProps)(DialogsList);

export default DialogsListContainer;