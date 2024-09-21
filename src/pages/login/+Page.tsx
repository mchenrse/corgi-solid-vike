import { createSignal, onMount } from "solid-js";
import Footer from "../../components/Footer";

export default function Login() {

    const [savedCredentials, setSavedCredentials] = createSignal<{username: string, password: string}>({username: "", password: ""})

    async function verifyCredentials(_username: string, _password: string): Promise<boolean> {
        if (!_username || !_password) {
            return false;
        }
        return true;
    }

    async function handleLogin(e: any) {
        
        const formData = new FormData(e.target)

        e.preventDefault();

        const username = formData.get("username")?.valueOf().toString() || "";
        const password = formData.get("password")?.valueOf().toString() || "";

        // verify username and password
        if (!await verifyCredentials(username, password)) {
            console.log("Failed to verify credentials");
            return;
        }

        // save username and password locally?
        localStorage.setItem("savedUsername", username);
        localStorage.setItem("savedPassword", password);

        localStorage.setItem("isSignedIn", "true");

        console.log("signed in!")

        location.href = "/"
    }

    onMount(() => {

        // if (localStorage.getItem("isSignedIn") === "true") {
        //     location.href = "/"
        // }

        setSavedCredentials({
            username: localStorage.getItem("savedUsername") || "",
            password: localStorage.getItem("savedPassword") || ""
        })

    })

    

    return (
        <>
            <div class="mt-5 mb-3 w-100 d-flex flex-column align-items-center">
                <h2 class="text-secondary-emphasis">CORGI - PTC Database Manager</h2>
                <p class="text-secondary">(v2.01, spec 8, metrolink)</p>
            </div>
            <div class="d-flex justify-content-center align-items-center">
                <div class="card" style="max-width: 400px">
                    <div class="card-body p-5">
                        <img class="img-fluid" src="/images/login-logo.png" />
                        <div class="d-flex justify-content-end">
                            powered by <span style="color: darkred;"><b>RSE, Inc.</b></span>
                        </div>
                        <form onSubmit={handleLogin}>
                        <div class="mb-3">
                            <label for="username" class="form-label">Username</label>
                            <input type="text" class="form-control" name="username" id="username" value={savedCredentials().username}/>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" name="password" id="password" value={savedCredentials().password}/>
                        </div>
                        <button type="submit" class="btn btn-primary w-100" id="signin">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}