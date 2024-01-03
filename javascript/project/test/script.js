const savElement = document.querySelector('#sav')
const sav = []

const savruuNemeh = ()=> {
    const task = {
        title: 'tit',
        desc: 'desc'
    }
    {
        title:"Weqf"
        desc:"safsaf"
    }
    sav.push(task)
    savandahiTaskiigZurah()
}


const savandahiTaskiigZurah = () => {
    let result = ""
    for(let i = 0; i < sav.length; i++){
        
        let box = `<p>${sav[0].title} ${sav[0].desc}</p>`
        result +=box
        savElement.innerHTML = result;
    }
    console.log(result)
 
}
const add = () => {
    let text =document.getElementById("text").value
    sav.push(text)
    
}




