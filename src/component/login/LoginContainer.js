import {TextField, Typography, Button} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import {useState} from "react";
import axios from "axios";
import {Auth} from "../auth";
import {Redirect} from "react-router-dom";

export const LoginContainer = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    if (localStorage.getItem('isAuth') !== "true") {
        const submitForm = () => {
            if (email === "" || password === "") {
                setError("Fields are required");
                return;
            }
            axios({
                method: "post",
                url: "http://localhost:5000/user/login",
                data: {"user": email}
            }).then((res) => {
                    Auth.auth();
                    console.log(res);
                    const user = res.data.result;
                    localStorage.setItem('user', user);
                    console.log("axios login " + localStorage.getItem('isAuth'));
                }, (error) => console.log(error)
            );
            return (<Redirect to='/home'/>);
        };
        const Submit = () => {
            let u = localStorage.getItem('user');
            if (u) {
                axios({
                    method: "get",
                    url: "http://localhost:5000/user/dashboard",
                    headers: {'authorization': "Bearer " + u}
                }).then((res) => {
                    Auth.auth();
                    console.log(res);
                    console.log(localStorage.getItem('isAuth'))
                }, (error) => {
                    console.log(error);
                    Auth.logout();
                });
            } else {
                Auth.logout();
            }
        }
        const logout = () => {
            try {
                localStorage.clear();
                Auth.logout();
                console.log(localStorage.getItem('isAuth'));

            } catch (e) {
                console.log("err :" + e);
            }
        }

        return (
            <div>
                <form>
                    <Typography variant="h5" style={{marginBottom: 8}}>
                        Login
                    </Typography>
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        className="form-input"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        fullWidth
                        className="form-input"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        className="form-input"
                        size="large"
                        onClick={submitForm}
                    >
                        Login
                    </Button>

                    {error && (
                        <Alert severity="error" onClick={() => setError(null)}>
                            {error}
                        </Alert>
                    )}
                </form>
                <div>
                    <button onClick={Submit}>checkLogin</button>
                    <button onClick={logout}>checkLogout</button>
                </div>
            </div>
        );
    }

    else{
        return (
            <Redirect to='/home'/>
        );

    }
}

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default LoginContainer;