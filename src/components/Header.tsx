
export default function Header() {
    return (
        <>
            <div class="mt-2 mb-5 d-flex justify-content-between">
                <div class="d-flex flex-row gap-3">
                    <div>
                        <a href="/index.html" title="Corgi" class="imageLink">
                            <img class="logobar-logo" src="/images/RSE-logo.png" alt="Corgi"/>
                        </a>
                    </div>
                    <div>
                        <div>
                            <span class="h4 me-2" style="text-shadow: 2px 2px 2px #aaa">Corgi - PTC Database Manager</span>
                            <span class="text-secondary">(v3.0, spec U, metrolink)</span>
                        </div>
                        <div>
                            <i>powered by <span style="color: darkred;"><b>RSE, Inc.</b></span></i>
                        </div>
                    </div>
                </div>
                <nav>
                    <a href="" class="btn btn-link">Admin Console</a>
                    |
                    <a href="" class="btn btn-link">ptc</a>
                    |
                    <a href="/logout" class="btn btn-link">Sign Out</a>
                </nav>
            </div>
        </>
    )
}