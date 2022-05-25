import logo from './logo.svg';
import './App.css';
import { myListe } from './MyListe';
import { menu } from './menu';
import { footer } from './footer';
import { tableHeader } from './tableHeader';
import { tablef } from './tableF';

function Layout(props) {
  
}

function App() {
    return(
        
        <div className="sb-nav-fixed">
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            Navbar Brand
            <a className="navbar-brand ps-3" href="index.html">Start Bootstrap</a>
             Sidebar Toggle
            <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
             Navbar Search
            <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
               <myListe/>
            </form>
             Navbar
            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#!">Settings</a></li>
                        <li><a className="dropdown-item" href="#!">Activity Log</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#!">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <menu/>
                    </div>
                    <footer/>
                </nav>
            </div>
            <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid px-4">
                        <h1 className="mt-4">Tables</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                            <li className="breadcrumb-item active">Tables</li>
                        </ol>
                        <div className="card mb-4">
                            <div className="card-body">
                                DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the
                                <a target="_blank" href="https://datatables.net/">official DataTables documentation</a>
                                .
                            </div>
                        </div>
                        <tablef/>
                    </div>
                </main>
                <footer className="py-4 bg-light mt-auto">
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">Copyright &copy; Your Website 2022</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
        <script src="js/scripts.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/simple-datatables@latest" crossorigin="anonymous"></script>
        <script src="js/datatables-simple-demo.js"></script>
        
       
    </div>
    )
}

//function Table(){
 //   return(
/*<div> 
    <Login/>
</div> 
    ) 
}*/

export default App;
