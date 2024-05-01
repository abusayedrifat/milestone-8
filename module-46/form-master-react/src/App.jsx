
import './App.css'
// import CustomHookForm from './component/CustomHookForm/CustomHookForm'
import ReusableForm from './component/ReusableForm/ReusableForm'
// import SimpleForm from './component/SImpleForm/SimpleForm'
// import StatefulForm from './component/StatefulForm/StatefulForm'
// import RefForm from './component/refForm/RefForm'

function App() {
  const handleSignUpSubmit = data =>{
   console.log(data);
}
const handleUpdateProfileSubmit = data =>{
  console.log(data);
}


  return (
    <>
    
      <h1>Vite + React</h1>
     {/* <SimpleForm></SimpleForm> */}
     {/* <StatefulForm></StatefulForm> */}
     {/* <RefForm></RefForm> */}
     {/* <CustomHookForm></CustomHookForm> */}
     <ReusableForm formTitle='Sign Up' handleSubmit={handleSignUpSubmit}></ReusableForm>
     <ReusableForm formTitle='Update Profile' submitBtnText='update' handleSubmit={handleUpdateProfileSubmit}></ReusableForm>


    </>
  )
}

export default App
