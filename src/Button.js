import React,{useRef} from 'react';

//*After using memo for make memoization still render so that, will use callback
const Button=React.memo(({counterFn,label,n}) =>{
    let renderRef=useRef(0)
    console.log(renderRef.current++);
    return (
        <React.Fragment>
            <button className="btn-primary" onClick={()=>{counterFn(n)}}>{label}</button>
        </React.Fragment>
    );
})

export default Button;
