import Output from "../components/Output";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({ amount: state.count });

export default connect(mapStateToProps)(Output);
