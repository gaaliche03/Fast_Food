selected=[]
function save(service,crust,toppings,cheese,others,note){
  // Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Define the endpoint URL to which you want to send the POST request
var url = 'http://localhost:3000/api/food';

console.log("toppings","")
var data = {
  service: service,
  crust: crust,
  cheese:cheese,
  others:others,
  note:note,
  toppings:toppings,
  
};

// Convert the data to a JSON string
var jsonData = JSON.stringify(data);

// Set up the POST request
xhr.open('POST', url, true);

// Set the appropriate Content-Type header
xhr.setRequestHeader('Content-Type', 'application/json');

// Define a function to handle the response
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 201) {
      
      console.log('Request successful');
      alert("Your food order has been successfully placed :"+(JSON.parse(xhr.responseText).id)); 
    } else {
      // Request failed
      console.error('Request failed');
    }
  }
};

// Send the request with the data
xhr.send(jsonData);

}
      function onselects(x){
        console.log()
        if(!selected.includes(x.getAttribute('value'))){
            x.className=x.className.replace("stc" ,"stc selectedel ")
            
            selected.push(x.getAttribute('value'))
            
        }else{
          x.className=x.className.replace("stc selectedel ","stc")
          
          var copy=[]
          selected.forEach((e)=>{
            if(e!=x.getAttribute('value')){
              copy.push(e)
            }
          })
          selected=copy;
          
        }
        console.log(selected)
      }
function submitPizza() {
  const form = document.getElementById("pizzaForm");
  const crust = form.elements.crust.value;
  const toppings = Array.from(
    form.querySelectorAll('input[name="toppings"]:checked')
  ).map((checkbox) => checkbox.value);
  const sauce = form.elements.sauce.value;
  const cheeses = Array.from(
    form.querySelectorAll('input[name="cheese"]:checked')
  ).map((checkbox) => checkbox.value);
  const note = form.elements.note.value;
  save(selected,sauce,toppings,cheeses,[],note)
  console.log("submit pizza.....", note);

  alert(
    `You ordered a ${crust} crust pizza with ${toppings.join(
      ", "
    )} toppings , ${cheeses.join(", ")} cheeses and ${sauce} sauce..`
  );
}

function submitBurger() {
  const form = document.getElementById("burgerForm");
  const bun = form.elements.bun.value;
  const patty = form.elements.patty.value;
  const toppings = Array.from(
    form.querySelectorAll('input[name="toppings"]:checked')
  ).map((checkbox) => checkbox.value);
  const sauces =  Array.from(
    form.querySelectorAll('input[name="sauces"]:checked')
  ).map((checkbox) => checkbox.value);
  const cheeses = Array.from(
    form.querySelectorAll('input[name="cheese"]:checked')
  ).map((checkbox) => checkbox.value);
  const note = form.elements.note.value;

  console.log("submit nurger.....", note);
  console.log(sauces,cheeses,bun,patty,toppings,selected)
  save(selected,bun,toppings,cheeses,patty,note)


}
