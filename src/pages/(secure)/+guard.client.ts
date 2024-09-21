// change to guard.server.ts


import { redirect } from "vike/abort";

export async function guard() {
    // pageContext
    if (typeof window === "undefined" || localStorage.getItem("isSignedIn") !== "true") {
        console.log(window, localStorage)
        console.log('not signed in')
        // await new Promise((resolve, _) => setTimeout(resolve, 1000))
        throw redirect("/login", 301);
    }
}