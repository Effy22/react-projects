function CustomInput(props){
    /*
    Bir fonksiyon için totalde 2 bölüm bulunur.
    İlk kısımda komutlar ve tanımlamalar olur.
    İkinci kısımda bir değer dönülür.
    return kısmında mutlaka bir değer dönmelisiniz ancak;
    return tek bir değer dönebilir.
    NOT!
    Bir bileşene parametre geçebilirsiniz. Nasıl ki bir metot dışarıdan parametre alabilir, aynı şekilde bir  component de dışarıdan parametre alabilir.
    */
   console.log('tip...:', props.tip);
   console.log('Özel Id...:', props.ozelid);

   return(
    props.tip === 'text'
    ? <input type="text" style={{minHeight: 50, backgroundColor: "red"}} />
    : <input type="password" style={{minHeight: 100, backgroundColor: "green", margin: 10}} />
   );

}
export default CustomInput;