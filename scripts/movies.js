// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let container=document.querySelector("#movies");
document.getElementById("search").addEventListener('input', function (){
  //console.log("test")
  updateDebounce();

})
function Searching(e){

    let movie=document.getElementById("search").value//input value
    let url=`https://www.omdbapi.com/?s=${movie}&apikey=56f55046` //server(computer) --omdb- IP-192.68.56.00 - mohan - 70750
  
  fetch(url)
  .then(response => response.json()) //successfull fetch 200 201
  .then(data => {
    console.log(data)
    if(data.Search)append(data.Search)
    else  document.getElementById("movies").innerHTML="no results found"
    
  }).catch(err=>{// 500 404
    document.getElementById("movies").innerHTML="no results found"
    console.log(err)
  });
   
}





var updateDebounce = debounce(()=>{
  Searching()
},1000);
 

function debounce(callback, delay) {
    let timeout;

    return (args) => {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
       // console.log("debouce")
        callback(args);
        
      }, delay);
    };
  }
// function random(){

// }
// random();
// let random=()=>{

// }
// random();
function append(data){
  document.getElementById("movies").innerHTML=""
  const fragment=document.createDocumentFragment();  
  data.map((ele)=>{
    const p=document.createElement("p")
    p.innerText=ele.Title
    console.log("append")
    fragment.appendChild(p);
    //document.getElementById("movies").append(p);
    })
    document.getElementById("movies").appendChild(fragment)
    console.log("fragment")
    
   
  

}
