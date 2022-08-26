
function mrda(){
  var a =parseInt(document.querySelector('#conc').value);
  var b =document.querySelector('#LA').value;

  var mrd;
  if(b=="lido"){
    mrd = (500/(a*10)).toFixed(2)

  } else if (b=="arti") {
    mrd = (500/(a*10)).toFixed(2)
  } else if (b=="mepi") {
    mrd = (400/(a*10)).toFixed(2)
  } else if (b=="prilo") {
    mrd = (600/(a*10)).toFixed(2)
  } else if (b=="bupi") {
    mrd = (200/(a*10)).toFixed(2)

  }
document.querySelector("#result").innerHTML=mrd;
}

function mrdw(){

  var b =document.querySelector('#LA').value;
  var w =parseInt(document.querySelector('#wt').value);

  var mrd2;
  if(b=="lido"){
    mrd2 = (w * 7).toFixed(2)             // since we round about the value to 2nd decimal place, weight that after which its absolute value is slightly more than it actually is eg: for lidocaine 500/7 = 71.42kg,here 72 kg 
    if(mrd2 > 500){
      mrd2= 500
    }

  } else if (b=="arti") {
    mrd2 = (w*7).toFixed(2)
  } else if (b=="mepi") {
    mrd2 = (w* 6.6).toFixed(2)
    if(mrd2 > 400){
      mrd2= 400
    }
  } else if (b=="prilo") {
    mrd2 = (w*8).toFixed(2)
    if(mrd2 > 600){
      mrd2= 600
    }
  } else if (b=="bupi") {
    mrd2 = (w*2).toFixed(2)
    if(mrd2 > 200){                   //absolute maximum for 200 mg in Canada. No such in USA
      mrd2 = 200
    }

  }
document.querySelector("#done").innerHTML=mrd2;
}
