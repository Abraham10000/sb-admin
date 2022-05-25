export function layoutDrop() {
    return (
        <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <Link className="nav-link" href="layout-static.html" values ='Static Navigation'/>
                                    <Link className="nav-link" href="layout-sidenav-light.html" values ='Light Sidenav'/>
                                </nav>
        </div>
    )
}