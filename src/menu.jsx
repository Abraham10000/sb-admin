 import { Tittle } from "./Tittle";
 import { dashboard } from "./dashboard";
 import { layout } from "./layout";
 import { page } from "./page";
 import { chart } from "./chart";
 import { table } from "./table";
import { Link } from "./Link"; 
export function menu() {
     return(
        <div className="nav">
        <Tittle className="sb-sidenav-menu-heading" values='Core'/> 

        <dashboard/>

        <Tittle className="sb-sidenav-menu-heading" values='Interface'/> 

        <layout/>
        <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
            <nav className="sb-sidenav-menu-nested nav">
                <Link className="nav-link" href="layout-static.html" values ='Static Navigation'/>
                <Link className="nav-link" href="layout-sidenav-light.html" values ='Light Sidenav'/>
            </nav>
        </div>
        <pages/>
        <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
            <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                    Authentication
                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </a>
                <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                    <nav className="sb-sidenav-menu-nested nav">
                        <Link className="nav-link" href="login.html" values = 'Login'/> 
                        <Link className="nav-link" href="register.html" values = 'Register'/> 
                        <Link className="nav-link" href="password.html" values = 'Forgot Password'/> 
                    </nav>
                </div>
                <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                    Error
                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                </a>
                <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                    <nav className="sb-sidenav-menu-nested nav">
                        <Link className = "nav-link" href="401.html" values = '401 Page'/>
                        <Link className = "nav-link" href="404.html" values = '404 Page'/>
                        <Link className = "nav-link" href="500.html" values = '500 Page'/>
                    </nav>
                </div>
            </nav>
        </div>
        <Tittle className="sb-sidenav-menu-heading" values='Addons'/> 
        <chart/>

        <table/>
    </div>
     )
 }