import logo from "../../assets/images/logo.png";
import hamburgerIcon from "../../assets/icons/list.svg";

const Header = () => {
    return (
        <header className="position-sticky start-0 top-0 vw-100 bg-secondary-subtle d-flex align-items-center justify-content-between px-3 vh-50">
            <a href="/"><img className="p-1" src={logo} height="60px" ></img></a>
            <a href="/"><img className="p-1 bi" src={hamburgerIcon} height="40px" ></img></a>
        </header>
    );
};
export default Header;