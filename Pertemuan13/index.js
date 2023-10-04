// // Class in JS
// //__________

// const mobil ={
//     transmisi: "Manual",
//     bahanBakar : "Bensin",
//     mesin : 1500,
//     nyalakanMesin: function (){
//         console.log('Mobil ${this.transmisi} dinyalakan')
//     },
// };

// const mobil2 ={
//     transmisi: "Automatic",
//     bahanBakar : "Solar",
//     mesin : 2000,
//     nyalakanMesin: function (){
//         console.log('Mobil ${this.transmisi} dinyalakan')
//     },
// }

class Mobil {
    construstor(transmisi, bahanBakar, mesin){
        this.transmisi = transmisi;
        this.bahanBakar = bahanBakar;
        this.mesin = mesin;
    }
}

const mobil1 = new Mobil("Manual", "Bensin", 1500);
mobil1.nyalakanMesin();
const mobil2 = new Mobil("Automatic", "Solar", 2000);
mobil2.nyalakanMesin();


//inheritance
class Toyota extends Mobil{
    constructor(tranmisi, bahanBakar, mesin, merek, warna){
        super(transmisi, bahanBakar, mesin);
        this.merek = merek;
        this.warna = warna;
    }
}

//Override
nyalakanMesin() {
    console.log
}

const agya = new Toyota("Automatic", "Bensin", 1000, "Agya", "Putih");
agya.nyalakanMesin();
console.log(agya);
