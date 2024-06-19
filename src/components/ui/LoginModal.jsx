import { useEffect, useState } from "react";
import registerAccount from "../../services/Register.service.js";
import loginAccount from "../../services/Login.service.js";
import { Modal } from 'bootstrap';

const LoginModal = ({ loginModal, setLoginModal }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [alert, setAlert] = useState("");
    const [alertColour, setAlertColour] = useState("danger");

    useEffect(() => {
        setLoginModal(new Modal(document.getElementById("loginModal")));
        hideAlert();
    }, []);

    function emailChange(e) {
        setEmail(e.target.value);
    }

    function passwordChange(e) {
        setPassword(e.target.value);
    }

    async function login() {
        const response = await loginAccount(email, password);
        console.log(response);

        if (response.message) {
            setAlert(response.message);
            setAlertColour("danger");
        } else {
            localStorage.setItem("token", response.token);
            loginModal.hide();
        }
        document.getElementById("responseAlert").classList.remove("d-none");
    }

    async function signup() {
        const response = await registerAccount(email, password);

        if (response.message) {
            setAlert(response.message);
            setAlertColour("danger");
        } else {
            setAlert("Registered successfully, please log in with your credentials");
            setAlertColour("success");
        }
        document.getElementById("responseAlert").classList.remove("d-none");
    }

    function hideAlert() {
        document.getElementById("responseAlert").classList.add("d-none");
    }

    return (
        <>
            <div className="modal fade" id="loginModal">
                <div className="modal-dialog modal-dialog-centered" id="login-modal">
                    <div className="modal-content bg-secondary-subtle">
                        <form className="modal-body text-center fs-5">
                            <h1 className="mb-4">Log-In / Sign-Up</h1>
                            <label>E-mail</label><br />
                            <input
                                className="mb-4 py-1 px-2 | border border-1 rounded border-dark-subtle"
                                type="email"
                                placeholder="email@example.com"
                                value={email}
                                onChange={emailChange}
                            />
                            <br />
                            <label>Password</label><br />
                            <input
                                className="py-1 px-2 | border border-1 rounded border-dark-subtle"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={passwordChange}
                            />
                            <br /><br />
                            <div className="d-flex | justify-content-evenly | mt-3 mb-4">
                                <button className="btn btn-lg btn-primary | w-25" type="button" onClick={login}>Log-In</button>
                                <button className="btn btn-lg btn-outline-primary | w-25" type="button" onClick={signup}>Sign-Up</button>
                            </div>
                        </form>
                        <div className={"alert alert-" + alertColour + " alert-dismissible fade show position-fixed w-50 start-50 top-50 translate-middle"} role="alert" id="responseAlert">
                            {alert}
                            <button type="button" className="btn-close" aria-label="Close" onClick={hideAlert}></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default LoginModal;