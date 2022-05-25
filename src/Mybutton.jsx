export function Mybutton(props) {
    const {id,type} = props;
    return <button classNameName="btn btn-primary" id={id} type={type}><i classNameName="fas fa-search"></i></button>
}
