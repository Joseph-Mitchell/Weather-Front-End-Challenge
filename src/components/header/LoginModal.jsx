const LoginModal = () => {
    return (
        <div className="modal" id="loginModal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <form className="modal-body text-center">
                        <h1>Log-In / Sign-Up</h1>
                        <label>E-mail</label><br />
                        <input type="email" placeholder="email@example.com" />
                        <br /><br />
                        <label>Password</label><br />
                        <input type="password" placeholder="password" />
                        <br /><br />
                        <div className="d-flex justify-content-center">
                            <button className="mx-2" type="submit">Log-In</button>
                            <button className="mx-2" type="submit">Sign-Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default LoginModal;