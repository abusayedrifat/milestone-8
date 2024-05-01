

const ReusableForm = ({formTitle, submitBtnText='Submit', handleSubmit }) => {

   const handleLocalSubmit = e =>{
    e.preventDefault();
    const data ={
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value
    }
    handleSubmit(data)
   }

    return (
        <div>
            <h1>{formTitle}</h1>
             <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name" /> <br />
                <input type="email" name="email" /> <br />
                <input type="password" name="password" id="" /> <br />
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReusableForm;
