//import { KutyaKiir} from "./fv.js"
import { kutyaLISTA } from "../model/adat.js";
import Kartya from "../view/Kartya.js";


let cim = "minden amit a kutyákról tudni kell" //megtudom valtoztatni, blokkszintű, pl cikluson belül van akkor csak ott fog látszódni, láthatóságban van különbség
cim = "Minden ami kutya!"
const nev = "Dézi"//nemtudom megvaltoztatni, blokkszintű
//var => globális is lehet lokális is, értékük változtatható, hatókörük meghatározott; függvényszintű, ciklustol függetlenül, csak adott függvényen belül látszik

//ez a szöveg kerülljön a főcím alá:
// 1. megfogjuk html elemet
const cimElem = $("header") //$jel az jquerys
cimElem.append(`<p>${cim}</p>`) //ez felülirja a html elem a tartalmát

//kutya adatait szeretném tárolni, név, kor, nem
// conttal hozom létre az objektumot mert ezzel összetett adatszerkezet esetén csak a memóriahely fix (??)

const kutya1={
    nev:"Dézi",
    kor:12,
    nem:"nőstény"
}

//utya1 = {nev:"Morzsa"} -> //ezzel megmondom h hozzon létre eg memoriaacimet neki DE ILYET NEM TUDOK tenni mert ez constans!!!
kutya1.nev = "Morzsa" //de igy igen
console.log(kutya1)

const teroloElem = $(".tartalom")
//listát ciklussal kiirom:
//kutyaLISTA.forEach((elem)=>{
    //KutyaKiir(elem)
    // páldányosítok:
    //new Kartya(elem, taroloElem)

//})


// metódusok:
//KutyaKiir(kutya1)




