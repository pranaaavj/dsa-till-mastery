function gcdOfOddEvenSums(n: number): number {
  const [oddSum, evenSum] = calSum(n);
  const gcd = calGcd(oddSum, evenSum);
  return gcd
};

function calGcd(n: number, m: number): number {
  let i = 1;
  let largest = null;
  let smallest = n > m ? n : m
  let root = Math.sqrt(smallest);
  while (i <= root) {
    if (n % i == 0 && m % i == 0) {
      largest = i
    }
    i++
  }
  return largest
}

function calSum(n: number): [number, number] {
  let oddSum = 0;
  let evenSum = 0;

  for (let i = 1; i <= 2 * n; i++) {
    if (i % 2 == 0) {
      evenSum += i
    } else {
      oddSum += i
    }
  }

  return [oddSum, evenSum]
}