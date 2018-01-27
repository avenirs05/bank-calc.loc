  
  // Разделяет группы разрядов числа во время ввода юзером цифр в поле сумма
  function toThousandsWhenInput () {
      var sumInput = document.getElementById('summag');
      
      sumInput.onkeyup = function() {   
         var amountEntered = document.getElementById('summag').value;
         var separatedThouthandsAmount = separateThousands(amountEntered);
         sumInput.value = separatedThouthandsAmount;
      }
  }


  // Обнуляет итоговую сумму если юзер сделал фокус на сумме или сроке 
  function toZeroFinalSumIfFocus() {
    // Input поля ввода суммы юзером
    var sumInput = document.getElementById('summag');

    // Input поля ввода количества дней юзером
    var termInput = document.getElementById('srokg');

    // Если фокус на сумме ввода или сроке, итог обнуляется
    sumInput.onfocus = function()  { 
      document.getElementById('final-sum').innerHTML = '0 руб.'; 
    } 
    termInput.onfocus = function() { 
      document.getElementById('final-sum').innerHTML = '0 руб.'; 
    }
  }

  // Разделяет группы разрядов числа
  function separateThousands (num) {
      num = String(num);
      num = unSeparateThousands(num); 

      if (num.length == 3) {
          return num;
      }

      switch(num.length) {
        case 4:
          num = num[0] + ' ' + num[1] + num[2] + num[3]; 
        break;  
        
        case 5:
          num = num[0] + num[1] + ' ' + num[2] + num[3] + num[4]; 
        break; 
        
        case 6:
          num = num[0] + num[1] + num[2] + ' ' + num[3] + num[4] + num[5]; 
        break; 
        
        case 7:
          num = num[0] + ' ' + 
                num[1] + num[2] + num[3] + ' ' +
                num[4] + num[5] + num[6];
        break; 
        
        case 8:
          num = num[0] + num[1] + ' ' + 
                num[2] + num[3] + num[4] + ' ' +
                num[5] + num[6] + num[7];
        break; 
        
        case 9:
          num = num[0] + num[1] + num[2] + ' ' + 
                num[3] + num[4] + num[5] + ' ' +
                num[6] + num[7] + num[8];
        break; 
        
        case 10:
          num = num[0] + ' ' + 
                num[1] + num[2] + num[3] + ' ' +
                num[4] + num[5] + num[6] + ' ' +
                num[7] + num[8] + num[9];
        break; 
        
        case 11:
          num = num[0] + num[1] + ' ' + 
                num[2] + num[3] + num[4] + ' ' +
                num[5] + num[6] + num[7] + ' ' +
                num[8] + num[9] + num[10];
        break; 
      }

      return num;
  }


  // Возвращает расчет суммы по банковской гарантии
  // percent - % годовых, amount - сумма, term - срок, daysInYear - дней в году
  function showFinalSumGuarantee (percent, amount, term, daysInYear) {
      var finalSum = Math.round( ( (percent / daysInYear) *  term) * amount / 100 );
      return separateThousands(finalSum) + ' ' + 'руб.';  	
  }


  // Убирает группы разрядов, оставляет (возвращает) строку
  function unSeparateThousands (str) {
      var res = '';
      
      for (var i = 0; i < str.length; i++) {
            if (str[i] === ' ') {
                  continue;
            }
            
            res += str[i];
      }
      
      return res;
  }


  // Убирает группы разрядов, оставляет возвращает число
  function unSeparateThousandsAndToNum (str) {
      str = str.replace(/\s+/g,'');     
      return Number(str);
  }




