
function initialClick () {
    fetch('https://us-central1-xtechwebapp.cloudfunctions.net/api/increment', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
          }
    }).then(()=> {
        console.log('yes')
    })
    .catch((err)=> {
        console.error(err)
    })
  }


  function postFormData() {

  }