import { onMount } from "solid-js"
import Databases from "./Databases"
import ChangeRequests from "./ChangeRequests"


export default function Home() {

    onMount(() => {

    })

    return <>
        <h3 class="border-bottom">Databases</h3>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link active" id="databases-tab" data-bs-toggle="tab" data-bs-target="#databases-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Databases</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="changes-tab" data-bs-toggle="tab" data-bs-target="#changes-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Change Requests</button>
        </li>
        </ul>
            <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="databases-tab-pane" role="tabpanel" aria-labelledby="databases-tab" tabindex="0"><Databases/></div>
            <div class="tab-pane fade" id="changes-tab-pane" role="tabpanel" aria-labelledby="changes-tab" tabindex="0"><ChangeRequests/></div>
        </div>
    </>
}