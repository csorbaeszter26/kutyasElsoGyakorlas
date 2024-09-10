

export class Kartya{
    //feladata: egyetlen kutya datainak megjelenése lesz, 1 adott helyen

    // vannak: adattagok, tagfüggvény, konstruktor(1db)

    //adattagok:
    #kutyaAdat ={}; //ez egy objektum, inicializálnom kell üresen
    #szuloELEM; //ez egy html (dóm) elem, SZÜLŐELEM

    //konstruktor:
     //feladata: minden adattagját beállítsa 
    constructor(adat, szuloElem){  
        this.#kutyaAdat = adat
        this.#szuloELEM = szuloElem
        this.KutyaKiir()

        //megfogjuk a gomb elemet:
        this.gombElem = $(".kiv:last") //=> legutolso elem tartozzon hozzá
        //console.log(gombElem)
        this.gombKattint()

    } 

    //tagfüggyvény:
    KutyaKiir(kutya){
        //const divElem = $(".tartalom")
         //<div><h3>Név: ${kutya1.nev}</h3><p> Kor: ${kutya1.kor}, Nem: ${kutya1.nem}</p></div>  --> ezmá nem, ezt csak elsőre irtam még a main jsben, magamtól
         //style="width: 18rem;"
        //divElem.append(`
        this.#szuloELEM.append(`
            <div class="card col-lg-4 col-md-6" >
                <div class="card-body">
                    <h3 class="card-title">Név: ${this.#kutyaAdat.nev}</h3>
                    <p class="card-text">Kor: ${this.#kutyaAdat.kor}</p>
                    <p class="card-text">Nem: ${this.#kutyaAdat.nem}</p>
                    <button class = "kiv btn btn-success">Kiválaszt</button>
                </div>
                
            </div>
            `)
        
    }

    gombKattint(){
        this.gombElem.on("click", ()=>{ //a nyíl függvény ésa function() névtelen függvény között a különbség a "this" használatában van. FUNCTION esetén a this azt az elemet jelenti, amelyik az eseményt kiváltotta, tehát jellemzően egy html elemet. NYÍLFÜGGVÉNY esetén az őt körülölelő osztály példányára fog mutatni. !!!!!!!!!!!!!!!!!!!!!!
            // itt muszáj a nyíl mert az osztályról akarunk majd információkat mondani
            // saját esemény létrehozása, hogy az adott objektum át tudjon adni magáról infiormációkat
            
            console.log(this)
            // COSTUME EVENT OSZTÁLY
            const e = new CustomEvent("kivalaszt", {detail:this.#kutyaAdat})
            window.dispatchEvent(e) //teljes ablakon elérhetővé akarom tenni, igy hozzárendelem az előző eseményt az ablakhoz
           
        })
    }
}