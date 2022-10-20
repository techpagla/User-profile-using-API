const url = 'https://randomuser.me/api/?results=50';
function loadData() {
    fetch(url)
    .then ( res => res.json())
    .then ( data => displayData(data.results))
}

const displayData = users => {
    console.log(users);
    for( user of users) {
        var commentsContainet = document.getElementById('comments-container');
            var div = document.createElement('div');
            div.classList.add('commentsDiv');
            
            div.innerHTML = `
            <img src=' ${user.picture.medium}' alt='Net problem'>
            <h5>Name: ${user.name.title +' '+ user.name.first + ' '+ user.name.last} </h5>
            <h6>Gender: ${user.gender} </h6>
            <h6>Email: ${user.email} </h6>
            <h6>Phone No: ${user.cell} </h6>
            <p>Address: ${user.location.city + ', '+ user.location.state + ', '+ user.location.country } </p>
            <p> <a href='https://jsonplaceholder.typicode.com/comments/'> More </a></p>
            

            `; 

            commentsContainet.appendChild(div);
    }
}