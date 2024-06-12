const LoginModal = () => {
    return (
        <div className="modal" id="loginModal">
            <div className="modal-dialog modal-dialog-centered" id="login-modal">
                <div className="modal-content bg-secondary-subtle">
                    <form className="modal-body text-center fs-5">
                        <h1 className="mb-4">Log-In / Sign-Up</h1>
                        <label>E-mail</label><br />
                        <input className="mb-4 py-1 px-2 | border border-1 rounded border-dark-subtle" type="email" placeholder="email@example.com" />
                        <br />
                        <label>Password</label><br />
                        <input className="py-1 px-2 | border border-1 rounded border-dark-subtle" type="password" placeholder="Password" />
                        <br /><br />
                        <div className="d-flex | justify-content-evenly | mt-3 mb-4">
                            <button className="btn btn-lg btn-primary | w-25" type="submit">Log-In</button>
                            <button className="btn btn-lg btn-outline-primary | w-25" type="submit">Sign-Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default LoginModal;