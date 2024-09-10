export function KutyaKiir(kutya){
    const divElem = $(".tartalom")
     //<div><h3>Név: ${kutya1.nev}</h3><p> Kor: ${kutya1.kor}, Nem: ${kutya1.nem}</p></div>  --> ezmá nem, ezt csak elsőre irtam még a main jsben, magamtól
     //style="width: 18rem;"
    divElem.append(`
        <div class="card col-lg-4 col-md-6" >
            <div class="card-body">
                <h3 class="card-title">Név: ${kutya.nev}</h3>
                <p class="card-text">Kor: ${kutya.kor}</p>
                <p class="card-text">Nem: ${kutya.nem}</p>
                <button class = "kiv btn btn-success">Kiválaszt</button>
            </div>
            
        </div>
        `)
    
}