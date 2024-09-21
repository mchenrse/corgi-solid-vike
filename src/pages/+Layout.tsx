import { createSignal, onMount, Show, Suspense } from "solid-js";
import { Head } from "vike-solid/Head";
import Footer from "../components/Footer";


export function Layout({children}: any) {

    const [isSignInChecked, setSignInChecked] = createSignal(false)
    const [isHeaderAvailable, setHeaderAvailable] = createSignal(false);

    onMount(() => {

        if (location.pathname !== "/login" && localStorage.getItem("isSignedIn") !== "true") {

        }

        setSignInChecked(true);
        setHeaderAvailable(location.pathname !== "/login");

    })

    return (
        <>
            <Head>
                <link href="/pkg/bootstrap/5.3.3/css/bootstrap.min.css" rel="stylesheet"></link>
            </Head>
            <div class="container">
                {children}
            </div>
            <script src="/pkg/bootstrap/5.3.3/js/bootstrap.js" type="text/javascript"></script>
        </>
    )
}