let row=1;

let btn1 = document.getElementById('btn');

btn1.addEventListener('click',function(){
  let name = document.getElementById('fname').value;
  let date = document.getElementById('fdate').value;
  let amt = document.getElementById('famount').value;

  if(!name||!date||!amt){
    alert('fill all the boxes');
    return;
  }

  let tab = document.getElementById('table');

  let regx=/\d{1,4}/;
  if(regx.test(amt))
  {

  let new_row = tab.insertRow(row);

  let cel1 = new_row.insertCell(0);
  let cel2 = new_row.insertCell(1);
  let cel3 = new_row.insertCell(2);

  
  cel1.innerHTML=name;
  cel2.innerHTML=date;
  cel3.innerHTML=amt;


  }
  else{
    alert('insert valid amount');
  }
  row++;

   document.getElementById('fname').value='';
   document.getElementById('fdate').value='';
   document.getElementById('famount').value='';

   
})