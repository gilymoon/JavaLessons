function isPrime(n) {
    let isPrime = true;
    for (let j = 2; j < n; j++) {
      // console.log('small j = ', j, ' i = ', i);
      if (n % j === 0) {
        isPrime = false;
      }
    }
    return isPrime;
  }
  function primeNumbners(n) {
      for (let i = 2; i <= n; i++) {
          // console.log('big i = ', i);
          if (isPrime(i)) {
            console.log(i);
          }
      }
  }