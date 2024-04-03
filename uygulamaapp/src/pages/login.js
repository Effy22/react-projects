import React, {useState} from "react"; //render yapabilmek için bunu import ettik
import {useNavigate} from "react-router-dom";

    /**
     * Bu sayfayı açmak için; index.js de app yerine bunu  <Login /> yazdık 
     * ve Logini import aldık ilk açılan sayfa burası oldu.
     */

    /**
     * Sayfada var olan bir değer js kısmına nasıl aktarılır okunur.
     * İnpurlardaki bigiler nasıl alınır 
     * onChange= inputun içinde bir değişklik oldu mu onu kontrol eder, bu bir eventHandler yani oay dinleyicisidir.
     * eğer bir değişikilk olursa event olursa bu eventin target.value'sını yani input içndeki değerini alır.
     * onChange={(evt)=>{setUserName(evt.target.value)}} -> bu hantal bir kullanımdır sayfa render olunca bu da render olur.
     * Bunun yerien bir const olarak tanımlamalıyız, react bunu bir kez tanımlıyor buraya bak bi daha son dklar
     * daha sonra onChange={getUserName} şeklinde constu onchange'e atıyoruz.
     */

function Login(){
    const navigate = useNavigate();

    const [userName, setUserName]= useState(''); //bu değişkenler güncellendiğinde sayfada render olsun diye yazıyoruz
    const [password, setPassword] = useState('');
    

    const login = () => { //bunu buttonda onclick yaptık
        console.log('Giriş butonuna basıldı.');
        console.log("Giriş bilgileri...: ", userName,password);
    }

    const getUserName = (evt)=>{setUserName(evt.target.value)};
    const getPassword = (evt)=>{setUserName(evt.target.value)};

   


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

                    <div className="m-2">
                        <button className="btn btn-success" onClick={login}>Giriş Yap</button>
                    </div>

                </div>
                <div className="col-4"></div>
            </div>

         </div>

    );

}

export default Login;