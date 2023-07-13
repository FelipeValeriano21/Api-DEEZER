function chamamusica(musica){
    const container = document.querySelector('tbody');
    container.innerHTML = "";
    const artista = musica;
    const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=' + artista;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '494f4935f7msh69281d3099327d6p1d498ejsn321e400c749f',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }
    }


    fetch(url, options)
    .then(response => response.json())
    .then(data => {
      
      data.data.forEach(item => {
       

        container.innerHTML += `<tr>
       <td>
              `+ item.artist.name +  `
        </td>
        <td>
              `+ item.title + `
        </td>
         <td>
              `+ item.rank + ` °
        </td>
          <td>
            <audio src="` + item.preview + ` "controls></audio>
        </td>
    </tr>`

       
     
      });
    })
    .catch(error => console.error(error));
    
}