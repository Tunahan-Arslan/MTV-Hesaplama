var tipList=["Otomobil","Motosiklet","Kamyon"];
var hacimList=["1000-1300","1300-1600","1600-2000","2000 <"];
var yasList=["1-3","4-6","7-10"];

var aracSelect=document.getElementById("aracTip");
var hacimSelect=document.getElementById("motorHacim");
var yasSelect=document.getElementById("aracYas");
function aracTipleri(){
    for(var i=0;i<tipList.length;i++){
        var option=document.createElement("option");
        option.text=tipList[i];
        option.value=i;
        aracSelect.options.add(option);
    }
}
function hacimTipleri(){
    for(var i=0;i<hacimList.length;i++){
        var option=document.createElement("option");
        option.text=hacimList[i];
        option.value=i;
        hacimSelect.options.add(option);
    }
}
function yasTipleri(){
    for(var i=0;i<yasList.length;i++){
        var option=document.createElement("option");
        option.text=yasList[i];
        option.value=i;
        yasSelect.options.add(option);
    }
}
function hesapla(){
    var tip=aracSelect.value;
    var hacim=hacimSelect.value;
    var yas=yasSelect.value;
    var sonuc=0;
    if(tip==0){
        if(hacim==0){
            if(yas==0){
                sonuc=3000;
            }
            else if(yas==1){
                sonuc=2000;
            }
            else if(yas==2){
                sonuc=1000;
            }
            
        }
        else if(hacim==1){
            if(yas==0){
                sonuc=4200;
            }
            else if(yas==1){
                sonuc=3200;
            }
            else if(yas==2){
                sonuc=2200;
            }
        }
        else if(hacim==2){
            if(yas==0){
                sonuc=5300;
            }
            else if(yas==1){
                sonuc=4300;
            }
            else if(yas==2){
                sonuc=3300;
            }
        }
    }
    else if(tip==1){
        if(hacim==0){
            if(yas==0){
                sonuc=3100;
            }
            else if(yas==1){
                sonuc=2100;
            }
            else if(yas==2){
                sonuc=1100;
            }
        }
        else if(hacim==1){
            if(yas==0){
                sonuc=4100;
            }
            else if(yas==1){
                sonuc=3100;
            }
            else if(yas==2){
                sonuc=2100;
            }
        }
        else if(hacim==2){
            if(yas==0){
                sonuc=5100;
            }
            else if(yas==1){
                sonuc=4100;
            }
            else if(yas==2){
                sonuc=3100;
            }
        }
    }
    else if(tip==2){
        if(hacim==0){
            if(yas==0){
                sonuc=6500;
            }
            else if(yas==1){
                sonuc=5500;
            }
            else if(yas==2){
                sonuc=4500;
            }
        }
        else if(hacim==1){
            if(yas==0){
                sonuc=4500;
            }
            else if(yas==1){
                sonuc=3500;
            }
            else if(yas==2){
                sonuc=2500;
            }
        }
        else if(hacim==2){
            if(yas==0){
                sonuc=5500;
            }
            else if(yas==1){
                sonuc=4500;
            }
            else if(yas==2){
                sonuc=3500;
            }
        }
    }
    document.getElementById("tutar").value="2022 Yılı İçin Ödenmesi Gereken MTV Tutarı = "+sonuc;
}