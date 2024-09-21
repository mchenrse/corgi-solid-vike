import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { onMount } from "solid-js";

export function Layout({children}: any) {

    onMount(() => {
        if (localStorage.getItem("isSignedIn") !== "true") {
            location.href = "/login"
        }
    })

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}