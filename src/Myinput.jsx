export function MyInput(props){
    const {type,label,id,ariaLabel,ariaDescribedby,place} = props;
    return (
          <input className="form-control" id={id} type={type} placeholder="Search for..."  ariaLabel={ariaLabel} ariaDescribedby={ariaDescribedby}/>
    )
  }