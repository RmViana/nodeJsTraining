console.log('Client side javascript file is loaded!')


const weatherForm = document.querySelector('form')
const search      = document.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const location = search.value
    const url      = '/weather?address=' + location
    fetch(url).then((response) =>{
        response.json().then((data) => {
            if(!data.error){
                console.log(data.forecast)
                console.log(data.location)
            }else{
                console.log(data.error)
            }
        })
    })
})