const Header = () => {
    return (
        <header className="position-fixed start-0 top-0 vw-100 bg-secondary-subtle d-flex align-items-center justify-content-between px-3 vh-50">
            <a href="/"><img className="p-1" src="./src/assets/images/logo.png" height="60px" ></img></a>
            <a href="/"><img className="p-1 bi" src="./src/assets/icons/list.svg" height="40px" ></img></a>
        </header>
    );
};
export default Header;