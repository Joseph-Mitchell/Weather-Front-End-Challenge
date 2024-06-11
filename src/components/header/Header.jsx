import NavButtons from "./NavButtons.jsx";

const Header = () => {
    return (
        <header className="position-sticky start-0 top-0 vw-100 bg-secondary-subtle d-flex align-items-center justify-content-between px-3 vh-50">
            <a href="/"><img className="p-1" src="/assets/images/logo.png" height="60px" ></img></a>
            <NavButtons />
            <a href="#offCanvasMenu" data-bs-toggle="offcanvas"><img className="p-1 bi" src="/assets/icons/misc-icons/list.svg" height="40px" ></img></a>
        </header>
    );
};
export default Header;