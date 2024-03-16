document.addEventListener("DOMContentLoaded", function() {
    const decrementBtn = document.getElementById('decrement');
    const incrementBtn = document.getElementById('increment');
    const clearBtn = document.getElementById('clear');
    const counterValue = document.getElementById('counter-value');
    const errorMessage = document.getElementById('error-message');
    
    let count = 0;

    function updateCounterDisplay() {
      counterValue.textContent = count;
      if (count === 0) {
        clearBtn.style.display = 'none';
      } else {
        clearBtn.style.display = 'block';
      }
      if (count <= 0) {
        errorMessage.style.display = 'block';
      } else {
        errorMessage.style.display = 'none';
      }
    }

    decrementBtn.addEventListener('click', function() {
      if (count > 0) {
        count--;
        updateCounterDisplay();
      }
    });

    incrementBtn.addEventListener('click', function() {
      count++;
      updateCounterDisplay();
    });

    clearBtn.addEventListener('click', function() {
      count = 0;
      updateCounterDisplay();
    });
  });