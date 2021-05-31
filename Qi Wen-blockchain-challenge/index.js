submit=document.getElementById('submit')
Input = document.getElementById('input')
submit.onclick = function(){
  if(Input.value === '123456') {
    alert('Correct, FLAG{253:banapo}')
  } else {
    alert('Wrong')

  }
}