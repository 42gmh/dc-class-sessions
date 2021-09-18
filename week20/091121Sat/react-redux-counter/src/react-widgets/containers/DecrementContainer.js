import Decrement from "../components/Decrement";
import { connect } from 'react-redux';

import { actionDecrement } from "../../redux-widgets/actions";

const mapDispatchToProps = (dispatch) => (
    {
        handleClick: () => dispatch(actionDecrement())
    }
)

export default connect(null, mapDispatchToProps)(Decrement);
