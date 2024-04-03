import React, {useState} from 'react';

function App() {

  /**
   * Bir değer tanımlamak -> let sayi= 56;
   * 
   * Dikkat!!!
   * Bir bileşen içinde değerler değiştiğinde sayfaya etki edebilmesi için o sayfanın
   * render edilmesi gereklidir. Bu nedenle sayfada değişiklik olup olmadığını takip
   * etmek üzere React Hook'larını kullanırız. 
   * useState bunu takip eder -> import React, {useState} from 'react'; bu şekilde import edilir.
   */

  /**
   * const [getSayi, setSayi] =useState(56); bu işlemin gidişatı aşağıdaki gibidir;
   * 
   * render yapayım mı?
   * const sayi=56;
   * 
   * function getSayi(){
   * return sayi;
   * }
   * 
   * function setSayi(sayi){
   * this.sayi=sayi;
   * render yap
   * }
   */

  //let sayi =56;  -Z böyle tanımarken react bunu değişip değişmediğnii anlamaz, izlemek gerekli bu da useState ile olacak
  const [getSayi, setSayi] =useState(56); //buraya verile değer başlangıç değeri initiliaze edilemsi için kullanılıyor.

  const arttir = () => {
    //sayi++; -> bunun yerine alttaki kullanılır
    setSayi (getSayi+1);
    console.log("Sayıyı arttırdım");
  }

  const azalt = () => {
    //sayi --;
    setSayi (getSayi-1);
    console.log("Sayıyı azalttım");
  }

  console.log('Sayfa render oldu')
  return ( //buraya yazılan kısım görsel alandır görülen kısımdır, kod yazılan kısım return ile function arasıdır.
    <>
      <div className= "container-fluid text-bg-danger" style= {{minHeight: 150}}>
     
      </div>

      <div className= "container mt-1 rounded-3">

        <div className="row">
           <div className="col-2 border border-primary" style={{minHeight: 500}}>

           </div>

            <div className="col-10 border border-success" style={{minHeight: 500}}>

              <div>
                <button onClick= {arttir}> + </button>  <br />
                <button onClick={azalt}> - </button>

              </div>

                 <h1>{getSayi}</h1>
                 

             </div>
        </div>
      </div>
    </>
  );
}

export default App;


//İstediğim kodları dinamik kullanmak için {degisken_Adi} yazmamız gerekir.
// {courses.map((element)=> <li>{element.course} listeyi dinamik şekilde yaratabilmek için map kullandık
