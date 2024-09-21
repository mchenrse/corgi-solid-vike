import { createSignal, onMount } from "solid-js"


export default function Databases() {

    const [databases, setDatabases] = createSignal<{name: string, subdivision: string}[]>([])

    async function fetchDatabases(): Promise<{name: string, subdivision: string}[]> {
        return [
            {
                name: "ptcb1",
                subdivision: "San Gabriel"
            },
            {
                name: "ptcb2",
                subdivision: ""
            },
            {
                name: "ptcb3",
                subdivision: ""
            },
            {
                name: "ptcb4",
                subdivision: ""
            }
        ]
    }

    onMount(() => {
        fetchDatabases().then(result => {
            setDatabases(result);
        })
    })

    return (
        <div class="card">
            <div class="card-body">
                <h4 class="card-title border-bottom py-3">Subdivision Databases</h4>
                <table class="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col" style="width: 0%">Database</th>
                            <th scope="col" style="width: 10%">Subdivision</th>
                            <th scope="col" style="width: 10%"></th>
                            <th scope="col" style="width: 10%"></th>
                            <th scope="col" style="width: 50%"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            databases().map(data => 
                                <tr>
                                    <th scope="row" class="text-end">{data.name}</th>
                                    <td>
                                        <a 
                                            class="btn btn-sm" 
                                            classList={{"btn-primary": !!data.subdivision, "btn-light border-dark-subtle": !data.subdivision}}>
                                                {data.subdivision || "Unassigned"}
                                        </a>
                                    </td>
                                    <td>
                                        <a class="btn btn-sm btn-light border-dark-subtle w-100">Assign</a>
                                    </td>
                                    <td>
                                        <a class="btn btn-sm btn-light border-dark-subtle w-100">Unassign</a>
                                    </td>
                                    <td>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}