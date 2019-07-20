console.log('Client side javascript file is loaded!')

fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})

fetch('/weather?address=Boston').then((response) =>{
    response.json().then((data) => {
        if(!data.error){
            console.log(data.forecast)
            console.log(data.location)
        }else{
            console.log(data.error)
        }
    })
})