"use strict"

// タブメニュー 文字装飾
{
  const labels = document.querySelectorAll("label");

  labels.forEach(label=>{
    label.onclick = function(){
      labels.forEach(label=>{
        label.classList.remove("active");
      })
      label.classList.add("active");
    }
  })
}

// モーダルウィンドウ
{
  const modal = document.getElementById("modal");
  const mask = document.getElementById("modal-mask");
  const open = document.getElementById("open");
  const close = document.getElementById("close");

  open.onclick = function(){
    mask.classList.add("active");
    modal.classList.add("scroll");
  }
  close.onclick = function(){
    mask.classList.remove("active");
    modal.classList.remove("scroll");
  }
  mask.onclick = function(){
    mask.classList.remove("active");
    modal.classList.remove("scroll");
  }
  
}