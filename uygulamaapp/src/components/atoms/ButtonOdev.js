function Buttons(props){

    /**
    * JavaScriptte bir değişkene fonksiyondan dönen değer
    * yani fonksiyon atanabilir
    * *****ArrowFunction; bir method tanımlandı, kendisi bir switch case dönüyor 
    * buradan değeri adı SelectButton olan değişkene atadı, return olarak da bu değişken verildi.
    */
 
    const SelectButon = () => {
     switch (props.type) {
       case 'button':
         return <button class="btn btn-primary btn-lg ms-5" type="button" style={{width: 200, height: 50}}>Kaydet</button>
 
       case 'reset':
         return <button class="btn btn-outline-warning btn-lg m-5" type="reset"  style={{width: 300, height: 50}}>Sil</button>
 
       case 'update':
         return <button class="btn btn-dark active btn-md m-5" type="update " style={{width: 100, height: 50}}>Update</button>
 
       default:
         return <button class="btn btn-dark active btn-md m-5" type="update " style={{width: 100, height: 50}}>Update</button>
     }
 
    };
 
 
 
     return(
       SelectButon()
     );
 }
 
 export default Buttons;