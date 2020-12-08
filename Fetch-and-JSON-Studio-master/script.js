async function main () {

    let response = await fetch('https://handlers.education.launchcode.org/static/astronauts.json'); 
    let json = await response.json();

    json = json.sort((a, b) => a.hoursInSpace - b.hoursInSpace); 

    let container = document.getElementById('container'); 

    let astronautListElements = ''


        json.forEach((astronaut) => {

            let isActiveHtml = astronaut.active
            if(astronaut.active === true) {
              isActiveHtml = `<span class="active">${astronaut.active}</span>`
            }
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
            }); 
        }; 


window.addEventListener("load", main); 