import { MyCard } from './MyCard.jsx';
import { MyCheckbox } from './Mycheckbox.jsx';
import { MyInput } from './Myinput';    


export function Login(){
    return (
        <div>
        <div id="layoutAuthentication_content">
    <main>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-5">
                   <MyCard>
                   <form>
                      <MyInput type = "email" label="Adresse e-mail" id="mail"/>
                                
                      <MyInput type = "password" label="Mot de passe" id="password"/>

                      <MyCheckbox type = "checkbox" label="Se souvenir de moi" id="check" />
                      <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                        <a className="small" href="password.html">Forgot Password?</a>
                        <a className="btn btn-primary" href="index.html">Login</a>
                      </div>
                    </form>
                   </MyCard>
                </div>
            </div>
        </div>
    </main>
</div>
<div id="layoutAuthentication_footer">
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
    )
}