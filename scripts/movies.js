// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let container=document.querySelector("#movies");

function Searching(e){
    let movie=document.getElementById("search").value;
    let url=`http://www.omdbapi.com/?i=${movie}&page=apikey=56f55046`+movie;
  console.log("tset")
    fetch(url).then(function(res){
        return res.json()
    }).then(function(res){
      console.log(res)
    }).catch(function(err){
        console.log("err",err)
    })
}

var updateDebounce = debounce(Searching(), 1000);
 

function debounce(callback, delay) {
    let timeout;

    return (args) => {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        callback(args);
        
      }, delay);
    };
  }


function append(data){
    console.log(data);
    container.innerHTML=null;
    if(data.Response=="False" || data.Poster== "N/A"){
        let image=document.createElement("img");
        image.src="err.png";
        image.style.width="100%";
        
    let button =document.createElement("button");
    button.innerText="Book now";
    button.style.width="15%";
    button.style.marginBottom="20px"
    button.addEventListener("click",function(){
      window.location.href="movies.html";
    });
}
}
