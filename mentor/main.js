

function  counter () {
    for (let i = 0 ; i < 100 ; i = i + 5  ) {
     setTimeout(function () {
      console.log(i)
     },1000)

    }
}
counter()

 function  arr() {
  let massiv = [10, 20, 30, 40, 50]
  const  newMassiv= massiv.map( i=> i + 5)
  console.log(newMassiv)
 }
 arr ()


const submitBtn = document.querySelector('#submitBtn')


submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    getForm()
})


function getForm() {
 const inputsHTML = document.getElementsByTagName('input') // HTML-collection
 const inputsObj = Array.from(inputsHTML) // Превращаем HTML-коллекцию в массив
 const userData = {
  name: inputsObj[0].value,
  surname: inputsObj[1].value,
  age: inputsObj[2].value,
  secondName: inputsObj[3].value,
  data: inputsObj[4].value
 }


console.log(userData)
return userData
}

