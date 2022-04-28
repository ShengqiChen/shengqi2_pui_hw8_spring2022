const NCOLOR = '#fff'
const FCOLOR = 'black'
let bgImage = window.localStorage.getItem('bgImage') || '1'
let body = document.getElementsByTagName('body')[0]
let navList = document.getElementsByTagName('li')
let isIn = false
let href = location.href
let bgPageArr = ['meat', 'Seafood', 'Asian', 'General']
let bgPageArrUrl = ['url("images/bg2.png")', 'url("images/bg3.png")', 'url("images/bg4.png")', 'url("images/bg5.png")']
let bgPageArrUrlN = ['url("images/n-Meat.png")', 'url("images/n-Seafood.png")', 'url("images/n-Asian.png")', 'url("images/n-General.png")']
for(let i = 0; i < bgPageArr.length; i++){
  if(href.indexOf(bgPageArr[i]) != -1){
    isIn = true;
    if(bgImage == '1'){
      body.style.background = bgPageArrUrl[i]
      body.style.color = 'black'
    }else {
      body.style.background = bgPageArrUrlN[i]
      body.style.color = NCOLOR
    }
  }
}
if(!isIn){
  if(bgImage == '1'){
    body.style.background = 'url("images/bg1.png")'
    body.style.color = 'black'
  }else {
    body.style.background =  'url("images/b1.png")'
    body.style.color = NCOLOR
  }
}

let reA = document.getElementsByClassName('re') || []
let h_bkA = document.getElementsByClassName('h_bk') || []
for(let i=0; i < h_bkA.length; i++){
  let h_bkATom = h_bkA[i].getElementsByTagName('a')[0]
  if(h_bkATom){
    h_bkATom.style['font-size'] = '2rem'
    h_bkATom.style.color = 'black'
  }
}
if(bgImage != '1'){
  for(let i=0; i < navList.length; i++){
    navList[i].style.color = NCOLOR
    if(i == navList.length - 1){
      navList[i].style.color = FCOLOR
    }
  }
  for(let i=0; i < reA.length; i++){
    reA[i].getElementsByTagName('a')[0].style.color = NCOLOR
  }
  for(let i=0; i < h_bkA.length; i++){
    let h_bkATom = h_bkA[i].getElementsByTagName('a')[0]
    if(h_bkATom){
      h_bkATom.style.color = NCOLOR
    }
  }
}

body.style['background-position'] = 'center'
body.style['background-repeat'] = 'no-repeat'
body.style['background-attachment'] = 'fixed'
body.style['background-size'] = 'cover'
body.style['position'] = 'relative'

let addBtn = document.getElementsByClassName('addBtn') || []
let addText = document.getElementsByClassName('con_locat_list') || []
if(addText.length == 0){
  addText = document.getElementsByClassName('con_zt_list_msg')
}

for (let i = 0; i < addBtn.length; i++){
  let storeList = JSON.parse(window.localStorage.getItem('storeList')) || []
  let text = addText[i].getElementsByTagName('div')[1].innerText
  if(storeList.indexOf(text) != -1){
    addBtn[i].innerHTML = `Added ✔`
  }
  addBtn[i].onclick = function(){
    if(addBtn[i].innerHTML != `Added ✔`){
      addBtn[i].innerHTML = `Added ✔`
      storeList.push(text)
      window.localStorage.setItem('storeList', JSON.stringify(storeList))
    }
  }
}

let btn = document.getElementsByClassName("btn")
if(btn.length > 0){
  btn[0].onclick = function() {
    let bgImage = window.localStorage.getItem('bgImage') || '1'
    if(bgImage != '1'){
      bgImage = '1'
    }else {
      bgImage = '2'
    }
    window.localStorage.setItem('bgImage', bgImage)
    location.reload()
  }
  if(bgImage != '1'){
    btn[0].style.color = FCOLOR
    btn[0].style.background = 'white'
    btn[0].innerText = 'switch to day mode'
  }
}