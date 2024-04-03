# REACT.JS KURULUM VE KULLANIM

## 1- Node.JS kurulumu yapılmalı.

    indirme işlemi download kısmından (https://nodejs.org/en/download sitesinden yapılır)
    kurulumu yaparak kontrol sağlayınız.

```bash
    node -v
```

## 2- Genel kurulum kodunun sisteme eklenmesi 

    Dikkat: Node.js Kurulumu içinde dahili olarak npm package manager gelir. Bunun sayesinde bir çok paket işlemini ve çalıştırma komutlarını yürütebilirsiniz.
    Alternatifi "yarn package manager"

```bash
    npm install -g create-react-app
```

    Burada yapmaya çalıştığımız olay şudur;
    "create-react-app" bir ek komuttur. Bunu çalışabilmesi için mutlaka bir paket manager ile tetiklenmesi gereklidir, Ancak siz bu ek kodu global kod havuzuna eklerseniz, artık nmp kullanımının ek parametrelerini kullanmadan da komutu çalıştırabilirsiniz.
    
```bash
    npm install n -g
```

# MAC'te paket izinlerini açmamız gerekiyor git'e tıkladık. sonra bin ve lib klasörlerinde sağa tıklayıp hem kilidi açtık hem de salt okuma ve yazma olarak değiştirdik.

# PROJE OLUŞTURMAK İÇİN; 

```bash
    create-react-app newreactapp
```
terminalde çıkan komutlardan;
start ile başladık bulunduğun konumu değiştir cd newreactapp yap
control c yapsan durdurur  ^C

src kısmına paketler koycaz
1- components
2- pages
3- store

Bootstrap web sayfasından 
download kısmında package manager dan aşağıdaki kodu kopyaladık, paketlere eklemek için cd newreactapp ye geçiyoruz sonra yine terminalde aşağıdaki kodu enterlıyoruz.

```bash
    npm install bootstrap@5.3.3
```

# UYGULAMA
    -projeyi oluştur
    -gereksiz kodları ve yorumları temizle
    -kullanıcının adını talep eden (props) bir değer alan component tasarla
    bu component kendisine verilen adı, h1 etiketi arasında yazıyor olsun ve h1 
    etiketine style ekle, bgColor, textColor width ve height vercez.

    React yüzbinlerce dosyadan oluşuyor. 
    node_modules'leri istediğimiz zaman internetten erişebiliyoruz. ne indirceğimiz isimlerinden belli. listesini tutsan, çalışmak istediğinde indirsen yeter.
    .gitigore' dosyasının içindekiler github'a yüklenmez. ve yok sayılır.

# App.js içinde; jsx yapısı vardır.
 tek bir return olması gerekiyor, tek bir element koyabiliriz.
 class yerine className kullanıyoruz.
 içerisinde değişkenler kullanabiliyoruz.
 html içinde js kullanmış olduğu yerde.

# Addind a SASS StyleSheet
projenin içine gelip; alttaki kodu terminalde çalıştırdık.

```bash
    npm install sass
```
index.css yerine artık index.scss yazıyoruz. dosya adını değiştirdik.
artık import ettiğimiz index.js içindeki import './index.css'; i scss olarak değiştirmemiz lazm

component içine Header.jsx yazdık
rafce kısayolunu yapıştırdık.
import React from 'react' kısmı silinebilir. arrtık zorunlulk yok

JSX uzantılı olunca yardımcı oluyo.

