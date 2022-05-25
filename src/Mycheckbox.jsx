export function MyCheckbox(props){
    const {type,label,id} = props;
    return (
      <div className="form-check mb-3">
        <input className="form-check-input" id={id} type={type} value="" />
        <label className="form-check-label" for="inputRememberPassword">{label}</label>
      </div>
    )
  }