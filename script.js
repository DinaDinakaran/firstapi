var div1=document.createElement("div");
div1.style.height="200vh"
div1.style.backgroundColor="#FFD9DE"
div1.setAttribute("class","total")
var lab1=document.createElement("label")
lab1.innerHTML="<h1><b>Disney Characters Images</b></h1>"
lab1.style.fontFamily="'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"
lab1.style.display="flex"
lab1.style.justifyContent="center"
lab1.style.paddingTop="10%"
lab1.style.paddingRight="3%"
var input =document.createElement("input");
input.style.marginLeft="32%"
input.style.height="40px"
input.setAttribute("placeholder","Enter Character Name ")
input.setAttribute('type','text')
input.setAttribute('id','search')
input.style.paddingRight="10%"
input.style.paddingLeft="2%"
input.style.borderRadius="20px";
input.style.border="0px";
var btn=document.createElement('button');
btn.innerHTML ="<b>Search</b>"
btn.addEventListener("click",f1)
btn.style.backgroundColor="rgb(0,201,183)"
btn.style.color="#fff"
btn.style.fontSize="20px"
btn.style.marginLeft="30px"
btn.style.height="40px"
btn.style.borderRadius="20px";
btn.style.width="10%"
// btn.style.borderColor="black";
btn.style.cursor="pointer";
var br= document.createElement("br")
var result=document.createElement("label")
result.style.fontFamily="'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"
result.style.display="flex"
result.style.justifyContent="center"
result.style.paddingTop="2%"
result.style.paddingRight="30%";
result.innerHTML="characters Image Url :"

div1.append(lab1,input,btn,br,result)
document.body.append(div1)

async function f1(){
    var name=document.getElementById('search').value
    console.log(name)
 var res1=await fetch("https://api.disneyapi.dev/characters");
 var res2=await res1.json();
 console.log(res2.data)
 var data=res2.data;
 for(let i=0;i<data.length;i++){
    if(data[i].name==name){
  var br01= document.createElement("label")
  var imgurl=document.createElement("lable")
 imgurl.innerHTML=`<a href="${data[i].imageUrl}"target="_blank"> ${data[i].name}</a>`
  imgurl.style.display="flex"
  imgurl.style.justifyContent="center"
  imgurl.style.paddingTop="2%"
  imgurl.style.paddingRight="10%";


    div1.append(br01,imgurl)
        
    }
   
 }

}
f1();