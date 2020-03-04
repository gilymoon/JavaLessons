function isPrime(n) {
    let isPrime = true;
    for (let j = 2; j < n; j++) {
      if (n % j === 0) {
        isPrime = false;
      }
    }
    return isPrime;
  }
  function primeNumbners(n) {
      for (let i = 2; i <= n; i++) {
          if (isPrime(i)) {
            console.log(i);
          }
      }
  }