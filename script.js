var breakfast = document.getElementById('breakfast-item');
    var lunch = document.getElementById('lunch-item');
    var dinner = document.getElementById('dinner-item');
    var weekBreakfast = document.getElementById('week-breakfast');
    var weekLunch = document.getElementById('week-lunch');
    var weekDinner = document.getElementById('week-dinner');
    function switchOver1() {
      if (breakfast.style.display = 'none') {
        // breakfast.style.display = 'none';
        breakfast.style.display = 'block';
        weekBreakfast.style.backgroundColor = '#b9bab8';
        weekDinner.style.backgroundColor = 'rgba(255, 0, 0, 0)';
        weekLunch.style.backgroundColor = 'rgba(255, 0, 0, 0)';
        lunch.style.display = 'none';
        dinner.style.display = 'none';
      }
    }
    function switchOver2() {
      if (lunch.style.display = 'none') {
        lunch.style.display = 'block';
        weekLunch.style.backgroundColor = '#b9bab8';
        weekBreakfast.style.backgroundColor = 'rgba(255, 0, 0, 0)';
        weekDinner.style.backgroundColor = 'rgba(255, 0, 0, 0)';
        breakfast.style.display = 'none';
        dinner.style.display = 'none';
        // lunch.style.display = 'none';
      }
    }
    function switchOver3() {
      if (dinner.style.display = 'none') {
        dinner.style.display = 'block';
        weekDinner.style.backgroundColor = '#b9bab8';
        weekBreakfast.style.backgroundColor = 'rgba(255, 0, 0, 0)';
        weekLunch.style.backgroundColor = 'rgba(255, 0, 0, 0)';
        lunch.style.display = 'none';
        breakfast.style.display = 'none';
        // dinner.style.display = 'none';
      }
    }
    // if(breakfast.style.display='block'){
    //   lunch.style.display = 'none';
    //   dinner.style.display = 'none';
    // }
    //   else if(lunch.style.display='block'){
    //   breakfast.style.display = 'none';
    //   dinner.style.display = 'none';
    // }
    //   else if(dinner.style.display='block'){
    //   breakfast.style.display = 'none';
    //   lunch.style.display = 'none';
    // }

