import Increment from "../components/Increment";
import { connect } from 'react-redux';

import { actionIncrement } from "../../redux-widgets/actions";

const mapDispatchToProps = (dispatch) => (
    {
        handleClick: () => dispatch(actionIncrement())
    }
)

export default connect(null, mapDispatchToProps)(Increment);