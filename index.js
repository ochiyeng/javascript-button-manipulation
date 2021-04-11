// при клике по кнопке скрипт запустит код
// button.onclick = function () {
//     // если фон кнопки чёрный
//     if (button.style.backgroundColor == 'black') {
//       // изменим его на белый, а текст сделаем чёрным
//       button.style.backgroundColor = 'white';
//       button.style.color = 'black';
//     } else {
//       // иначе сделаем фон чёрным, а текст белым
//       button.style.backgroundColor = 'black';
//       button.style.color = 'white';
//     }
    
//   }

  //button visibilty
  function hide(button){
      button.style.visibility = 'hidden';
      setTimeout(function(btn){
          button.style.visibility = 'visible';
      }.bind(this, button), 1000); 
  }