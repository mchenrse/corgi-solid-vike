import { onMount } from "solid-js"
import { navigate, reload } from "vike/client/router";


export default function Logout() {
    

    async function handleSignOut() {
        
        // handle signing out
        localStorage.removeItem("isSignedIn");
        location.href = "/login"
    }


    onMount(() => {
        
        handleSignOut()

    })
    
    return (
        <>
            Signing Out...
        </>
    )
}