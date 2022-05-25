export function Link(props){
    const{className,href,values} = props;
    return(
        <a className={className} href={href}>{values}</a>
    )
}