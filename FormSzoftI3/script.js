document.querySelectorAll('input[type="checkbox"]').forEach(function (checkbox) {
    checkbox.addEventListener("change", function feltetKikapcs() {
        var feltet1 = document.getElementById('feltet1');
        var feltet2 = document.getElementById('feltet2');
        var feltet3 = document.getElementById('feltet3');

        if (checkbox === feltet1) {
            feltet2.checked = false;
            feltet3.checked = false;
        }

        if (checkbox === feltet2 && feltet2.checked) {
            feltet1.checked = false;
        }

        if (checkbox === feltet3 && feltet3.checked) {
            feltet1.checked = false;
        }
    });
});



document.querySelector('form').addEventListener("submit",
function(event){
    event.preventDefault()
    // // console.log(event.target.elements.pizza.children[0].innerHtml)
    // console.log(event.target.elements.pizza.children[event.target.elements.pizza.selectedIndex].innerHTML)
    // console.log(event.target.elements.meret.value)
    // console.log(event.target.elements.feltet[0].checked)
    // console.log(event.target.elements.datum.value)

//     A cél:
//     Tisztelt Név , rendeltél x db y cm-es valamilyen pizzát (Pluszfeltétek/ha van/)
//     A kiszállítás datum idő kor fog megtörténi!
//     Üdvözlettel, PizzaPizzázó



function megrendelesMegjelenit(){
   var n   = event.target.elements.nev.value
   const p = event.target.elements.pizza.children[event.target.elements.pizza.selectedIndex].innerHTML
   const m = event.target.elements.meret.value
   //var f   =  
   const d = event.target.elements.datum.value
   var sz  = event.target.elements.db.value

   
    alert(`Kedves ${n} rendeltél ${sz} darab ${p} pizzát ami ${m} méretű és {f} rajta,\nelkészítés után ${d} kerül majd kiszállításra \nköszönjük a rendelésed \nüdvözlettel: Donna mamma mia :) `);
        

}

megrendelesMegjelenit()

}
)

