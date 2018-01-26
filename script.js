  
  // Разделяет группы разрядов числа
  function separateThousands (num) {
      if (num == 3) {
          return num;
      }
      
      num = String(num);

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


