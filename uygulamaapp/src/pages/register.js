import { useState } from "react";

function Register(){
    const [userName, setUserName]=useState('');
    const [password, setPassword]=useState('');
    const [rePassword, setRePassword]=useState('');
    const [email, setEmail]=useState('');


    const getUserName = (evt)=>{setUserName(evt.target.value)};
    const getPassword = (evt)=>{setPassword(evt.target.value)};
    const getRePassword = (evt)=>{setRePassword(evt.target.value)};
    const getEmail = (evt)=>{setEmail(evt.target.value)};

    const register = () => {
        console.log('kayit bilgileri...: ', userName, email, password);
      }    

    return(
        <div className= "container">

           <div className="row">
               <div className="col-4"></div>
               <div className="col-4">

                   <div className="m-3">
                       <label className="form-label">Kullanıcı Adı</label>
                       <input className="form-control" type="text" onChange={getUserName}/>
                   </div>

                   <div className="m-3">
                       <label className="form-label">Şifre</label>
                       <input className="form-control" type="password" onChange={getPassword}/>
                   </div>

                   <div className="m-3">
                       <label className="form-label">rePassword</label>
                       <input className="form-control" type="rePassword" onChange={getRePassword}/>
                   </div>

                   <div className="m-3">
                       <label className="form-label">Email</label>
                       <input className="form-control" type="email" onChange={getEmail}/>
                   </div>

                   <div className="m-2">
                       <button className="btn btn-success" onClick={register}>Giriş Yap</button>
                   </div>

               </div>
               <div className="col-4"></div>
           </div>

        </div>

   );

}

export default Register;
