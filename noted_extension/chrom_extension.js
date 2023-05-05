let array=[]
let kw=[]
const inputi=document.getElementById("take_input")
const inputbtn=document.getElementById("btn_id")
const elul=document.getElementById("ulist")
const delbtn=document.getElementById("btn_id1")
const tabtbn=document.getElementById("btn_id2")
const inputi1=document.getElementById("take_input1")

delbtn.addEventListener("click",function()
{
   localStorage.clear()
   kw=[]
   array=[]
   save(array)
   save(kw)
})

inputbtn.addEventListener("click",function(){
    array.push(inputi.value)
    kw.push(inputi1.value)
    inputi.value=""
    inputi1.value=""
    localStorage.setItem("array",JSON.stringify(array))
    localStorage.setItem("kw",JSON.stringify(kw))
    save(array)
})

let lfs=JSON.parse(localStorage.getItem("array"))
let lkw=JSON.parse(localStorage. getItem("kw"))

if(lkw){
    kw=lkw
    save(kw)
}

if(lfs)
{
   array=lfs
   save(array)
}

tabtbn.addEventListener("click",function(){
    kw.push(inputi1.value)
    inputi1.value=""
    chrome.tabs.query({active:true , currentWindow:true},function(tabs){
    array.push(tabs[0].url)
    localStorage.setItem("array",JSON.stringify(array))
    localStorage.setItem("kw",JSON.stringify(kw))
    save(array)})
})

function save(array)
{
    let lsititem=""
     for(let i=0;i<array.length;i++)
    {
       lsititem+=`
       <li>
          ${kw[i]} :
          <a target='_blank' href='${array[i]}'>
          ${array[i]}
        </a>
        </li>`
    }
    elul.innerHTML=lsititem
}
