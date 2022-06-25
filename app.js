
// 1-misol



let sayt = document.querySelector(".sayt")

qoshish(pokemons)
function qoshish(data){

    
    data.map(element => {
        let col =  document.createElement("div")
        col.classList.add("col-3")
        col.classList.add("m-2")
        col.style.border = "1px solid black"

        let img = document.createElement("img")
        img.src = element.img
    
        img.classList.add("img-fluid")
        let id = document.createElement("p")
        id.innerText ="id:  " + element.id

        let name = document.createElement("p")
        name.innerText = "name:  " + element.name
        let heigh = document.createElement("p")
        heigh.innerText = "height:  " + element.height
        let weight = document.createElement("p")
        weight.innerText = "weight:  " + element.weight
    
        
        col.appendChild(img)
        col.appendChild(id)
        col.appendChild(name)
        col.appendChild(heigh)
        col.appendChild(weight)
        sayt.appendChild(col)
    }
    
    
    )
}


// 2-Misol

function qidiruv(input){

    let soz=input.value
   
   let a = pokemons.filter(
        element => {
            return element.name.toLowerCase().includes(soz.toLowerCase())
        }
    )
sayt.innerHTML=""
    qoshish(a)
}


function dan(){
    let sonvalue1 =Number( document.querySelector(".son1").value)
    let sonvalue2 =Number( document.querySelector(".son2").value)

    let wed = []

    pokemons.map(taqqosla => {
        let currentHeight = Number(taqqosla.height.split(" ")[0])
        if(currentHeight > sonvalue1 && currentHeight < sonvalue2){
            wed.push(taqqosla)
            
        }
        sayt.innerHTML = ""
        // console.log(currentHeight);
    })



    qoshish(wed)    

}

























