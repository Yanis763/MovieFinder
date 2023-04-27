const displayMovie = () => {
    document.getElementById('display').innerHTML = "";
    const search = document.getElementById("searchBar").value
    const url = `https://www.omdbapi.com/?s=${search}&apikey=${apikey}`;
    fetch(url)
    .then((response) => response.json() )
    .then((data) => {
        data.Search.forEach(element =>{
        const selector = document.getElementById("display")
            selector.innerHTML += `
                <div class="card mb-3 container-fluid" style="max-width: 940px; max-height: 300px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${element.Poster}" alt="photo du film" height ="200px">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h2 class="card-title">${element.Title}</h2>
        <h3>(${element.Year})</h3>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onclick="displayMore('${element.Title}')">
          En savoir plus
        </button>
        
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Description du film</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                    Chargement...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>
      </div>
                   `
  
                
            
    })
})
}
const displayMore = (title) => {
    const moreUrl = `https://www.omdbapi.com/?t=${title}&apikey=${apikey}`;
    const modalBody = document.querySelector(".modal-body");
    modalBody.innerHTML = "Chargement ...";
    fetch(moreUrl)
    .then((response) => response.json() )
    .then((data) => {
        document.querySelector(".modal-body").innerHTML =`
        <img src=${data.Poster} alt="affiche du film">
        <p>
            ${data.Released}
            ${data.Plot}
        </p>`
    })  
}   

    
    
    

