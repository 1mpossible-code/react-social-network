import React, {FC} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {RootState} from "../../redux/store";

type StateToProps = {
    name: string | null;
    isAuthorized: boolean;
}

type Props = StateToProps;

const HeaderContainer: FC<Props> = (props) => {
    return (
        <Header {...props}/>
    );
}

const mapStateToProps = (state: RootState) => ({
    name: state.auth.name,
    isAuthorized: state.auth.isAuthorized,
})

export default connect(mapStateToProps)(HeaderContainer);