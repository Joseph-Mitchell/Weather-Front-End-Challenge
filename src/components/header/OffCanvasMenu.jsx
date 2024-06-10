import NavButtons from "./NavButtons.jsx";

const OffCanvasMenu = () => {
    return (
        <div className="offcanvas offcanvas-end w-75 text-center" id="offCanvasMenu">
            <h1 className="mt-4">Website Name</h1>
            <hr />
            <NavButtons />
        </div>
    );
};
export default OffCanvasMenu;