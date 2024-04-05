let p= fetch("https://dev-api.conqt.com/api/tc-song-vault/get-all-song-list?page=1&limit=100")
p.then((value1) => {
    return value1.json()
}).then((value2) => {
    console.log(value2)
    let html=''
    for(let i=0; i<value2.data.length; i++) 
    {
        let data=value2.data[i]
        console.log (data)
        html+=`
    <div class="card">
        <div class="image">
            <img class="main-image" src = "${data['album_art']}">
        </div>
        <div class="card-body">
            <p class="title">
                ${
                    data['track_title']
                }
            </p>
            <p class="singer-name">
                ${
                    data['artist_name']
                }
            </p>
        <div class="icon">
            <img class="icon-img" src="Vector.png">
            <span>
                10k
            </span>
            <img class="icon-img" src="Vector2.png" alt="">
            <span>1k</span>
        </div>
        </div>
    </div>`
    }
    document.querySelector(
        '.container'
    ).innerHTML=html
})
.catch(error => console.log(error));
