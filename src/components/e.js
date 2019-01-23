const hocComponent = (wrappedComponent)=>(class NewComponent extends wrappedComponent{
    render(){
        const element = super.render();
        const newStyle = {
            color:element.type==='div'?'red':'green'
        }
        const newProps = {...props,style:newStyle}
        return React.cloneElement(element,newProps,element.props.children)
    }
})