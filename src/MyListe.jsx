import { Mybutton } from "./Mybutton";
import { MyInput } from "./Myinput";


export function myListe(props) {
    const {} = props;
   return (
    <div className="input-group">
        <MyInput className="form-control" id = 'input search' type= 'text' placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
        <Mybutton typ= "bouton" id = "search boutton"/>
    </div>
   )
}