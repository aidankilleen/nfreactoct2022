import { useState } from "react";

function Message({ title, message, colour }) {

    const [read, setRead] = useState(false);

    const onClick = () => {
        setRead(previous => !previous);
        //setRead(!read);  // possible but...
    };

    return (
        <div className="box"
            style={{
                backgroundColor:colour
            }}
            onClick={onClick}
        >
            <h2>{ title }</h2>
            { !read && <p>{ message }</p>}
        </div>
    )
}

export default Message;


    // destructuring
    /*
    let list = [1, 2, 3];
    const [a, b, c] = list;

    let o = {
        a: 10, 
        b: 20, 
        c: 30
    }
    const { a:oa, b:ob, c:oc } = o;
    console.log(oa);
    console.log(ob);
    console.log(oc);
    const { a, ...rest} = o;
    console.log(a);
    console.log(rest);
    */
