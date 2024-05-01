import useInputState from "../../Hooks/useInputState";


const CustomHookForm = () => {

    const nameState = useInputState()

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(nameState.value);
        
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
            <input {...nameState}  type="text" name="name" placeholder="Name" /> <br />
                <input type="email" name="email"  placeholder="Email" required/> <br />
                <input type="password" name="password" id="" placeholder="Password" required/> <br />
                <input type="submit" value="Submit"  />
            </form>
        </div>
    );
};

export default CustomHookForm;