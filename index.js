const card = document.getElementById('card')

const requestUrl = 'https://api.github.com/users/kanchankalauni'
const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl)
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText)
        card.innerHTML = `
        <div id='profile'>
            <img src="${data.avatar_url}" alt="profilPic" id='img'>
            <p>${data.name}</p>
        </div>
        <div id='followers'>Followers<br>${data.followers}</div>
        `
    }
}
xhr.send()