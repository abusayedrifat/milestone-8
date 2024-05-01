import { useEffect, useRef } from "react";


const RefForm = () => {

    const nameRef = useRef(null);
    const passRef = useRef(null);

    useEffect( () =>{

        nameRef.current.focus();
    },[])

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(nameRef.current.value , passRef.current.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input  type="text" name="name" ref={nameRef}  placeholder="Name" /> <br />
                <input type="email" name="email"  placeholder="Email" required/> <br />
                <input type="password" name="password" ref={passRef} id="" placeholder="Password" required/> <br />
                <input type="submit" value="Submit"  />
            </form>
        </div>
    );
};

export default RefForm;