const form = document.querySelector(".fale-conosco")
const mascara1 = document.querySelector(".mascara1")


function mostrarform(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara1.style.visibility = "visible"

}
 function esconderform(){
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    mascara1.style.visibility = "hidden"

 }
