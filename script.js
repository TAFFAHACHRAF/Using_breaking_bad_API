const api="https://www.breakingbadapi.com/api/characters/";
async function getData(){
    try{
        const response = await fetch(api)
        const data = await response.json()
        printData(data)
    }catch(e){
        console.log("Error : ".e.message)
    }
}
function printData(data){
    const header=document.querySelector("#container #header")
    // const data=document.querySelector("#content")
    header.innerHTML += `
        <select class="form-control" onchange="getCharacter(this.value)">
            <option>Chose an actor please</option>
            ${data.map(character => `<option>${character.name}</option>`)}
        </select>
    `
}
async function getCharacter(val){
    const response = await fetch(api+"?name="+val)
    const data = await response.json()
    const content=document.querySelector("#container #content")
    content.innerHTML = `
    <br>
    <img  src="${data[0].img}">
`   
    document.querySelector("#container #header .p1").innerHTML="name : "+data[0].name
    document.querySelector("#container #header .p2").innerHTML="birthday : "+data[0].birthday
    document.querySelector("#container #header .p3").innerHTML="occupation : "+data[0].occupation
    document.querySelector("#container #header .p4").innerHTML="status : "+data[0].status
    document.querySelector("#container #header .p5").innerHTML="nickname : "+data[0].nickname
}
getData()