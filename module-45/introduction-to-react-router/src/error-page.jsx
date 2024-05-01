import { Link, useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
 const navigate = useNavigate()

 const handleGoBack = () =>{
 navigate('/')
 }
  return (
    <div className="flex flex-col text-center items-center justify-center mt-[50vh] translate-y-[-50%] " id="error-page">
      <h1 className="text-5xl font-bold">Oops!</h1>
      <div className="text-xl my-5">
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button onClick={handleGoBack} className="mx-auto my-8 p-3 w-[150px] border rounded-xl bg-slate-400" >Go to Back</button>
      </div>
    </div>
  );
}