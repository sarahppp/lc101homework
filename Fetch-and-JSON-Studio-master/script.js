function main () {
    fetch('https://handlers.education.launchcode.org/static/astronauts.json')
    .then((response)=>{
        response.json()
        .then((json)=>{
            let container = document.getElementById('container'); 
            let astronautListElements = ''
            json.forEach((astronaut) => {
                astronautListElements += `
                <div class="astronaut">
                     <div class="bio">
                         <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                            <ul>
                                <li>Hours in space: ${astronaut.hoursInSpace}</li>
                                <li>Active: ${astronaut.active}</li>
                                <li>Skills: ${astronaut.skills.join(', ')}</li>
                            </ul>
                     </div>
                         <img class="avatar" src="${astronaut.picture}">
                </div>
            `
            container.innerHTML = astronautListElements; 
            })
        })
    })

}

window.addEventListener("load", main); 