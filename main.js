import { kutyaLISTA } from "./model/adat.js";
import { Kartya } from "./view/Kartya.js";
import  Kartyak  from "./view/Kartyak.js";


const kivKutyaLista = []


const taroloElem = $(".tartalom")
new Kartyak(kutyaLISTA, taroloElem)



// HA rákattintunk akiv gombra akkor a gombhoz tartozó kutya adata kerüljön bele a kiválasztott kutya listába

const kivElem = $(".kivalasztott")


//feliratkozunk a saját eseményünkre, ohgy elérjük azt az információt, hogy kire is kattintottak rá
$(window).on("kivalaszt", (event)=>{
    console.log(event.detail)
    kivKutyaLista.push(event.detail)
    console.log(kivKutyaLista)
    //példányosítok:
    new Kartya(event.detail, kivElem)
    

})