const button = document.querySelector('#pesquisa button')
const artist = document.querySelector('#artist')
const music = document.querySelector("#music")

button.addEventListener('click', (e)=>{
    e.preventDefault()
    fetch(`https://api.vagalume.com.br/search.php?art=${artist.value}&mus=${music.value}`)
.then(data=>data.json())
.then(data=>{
    if(data.type=='song_notfound'){
        document.querySelector('#areaDetexto').value=`musica "${music.value}" não encontrada`
    }else if(data.type=='notfound'){
        document.querySelector('#areaDetexto').value= `Artista ${artist.value} não encontrado`
    }else{
    document.querySelector('#areaDetexto').value=data.mus[0].text
    artist.value=''
    music.value=''
    }
})
.catch((err)=>{
    
    console.log(err,"hoje tem bailão ")
})

})
// https://api.lyrics.ovh/v1/Coldplay/Adventure of a Lifetime