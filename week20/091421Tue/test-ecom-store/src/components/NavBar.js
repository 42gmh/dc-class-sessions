import {Link} from 'react-router-dom';
import styled from 'styled-components';
import logo from '../logo.svg'
import { ButtonContainer } from './Button';

const NavBar = props => (
    <NavWrapper className="navbar navbar-expand-sm navbar-dark pk-sm-5">
        <Link to='/'>
            <img src={logo} alt="nav bar" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
                <Link to="/" className="nav-link">
                    products
                </Link>
            </li>
        </ul>
        <Link to="/cart" className="ms-auto">
            <ButtonContainer>
                <span className="mr-2">
                    <i className="fas fa-cart-plus"/>
                </span>
                my cart
            </ButtonContainer>
        </Link>
    </NavWrapper>
)

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
}
`;
export default NavBar;