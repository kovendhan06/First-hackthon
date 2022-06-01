
var div=document.createElement("div");
div.innerHTML=`<input type="text" id="txt">
<button type="button" id="btn" onclick="foo()">Search</button>
<div id="name"></div>
<div id="address_2"></div>
<div id="website_url"></div>
<div id="phone"></div>`;
div.style.textAlign="center";
document.body.append(div);


async function foo()
{
try{
let cc=document.getElementById("txt").value ; 
let res=await fetch(`https://api.openbrewerydb.org//${cc}`);
let res1=await res.json();

let{
    name=res1[1]['name'],
 address_2=res1[1]['address_2'],
 website_url=res1[1]['website_url'],
 phone=res1[1]['phone'],
}=res1
console.log(res1);
document.getElementById("name").innerText=` Name: ${name}`;
document.getElementById("address_2").innerText=`Address: ${address_2}`;
document.getElementById("website_url").innerText=`website_url: ${website_url}`;
document.getElementById("phone").innerText=` phone: ${phone}`;

console.log(`name: ${name}`)
console.log(`Address: ${address_2}`);
console.log(`website_url: ${website_url}`);
console.log(`phone: ${phone}`);

}
catch(error)
{
    console.error(error);
}
}













