function colorClock(){
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  if (hours <= 9) {
    hours = '0' + hours;
  }
  if (minutes <= 9) {
    minutes = '0' + minutes;
  }
  if (seconds <= 9) {
    seconds = '0' + seconds;
  }

  var clockFace = hours + ':' + minutes + ':' + seconds;
  var hexColor = '#' + hours + minutes + seconds;
  
  console.log(clockFace + '\t' + hexColor);

  var clock = document.getElementById('clock');
  clock.innerHTML = clockFace;
//  alert(document.body.style.backgroundColor); 
  document.body.style.background = hexColor;
  
  setTimeout(function() {
    colorClock();
    }, 1000);
}


//colorClock();
