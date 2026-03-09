/* 
多項式の計算回数を減らす。(特に掛け算)
n(=最高次数)回の掛け算とn回の足し算
一次式(ax+b)の入れ子を作って計算する。
外側の一次式をもとめる漸化式は、
fi = (fi-1)*x + an-i
これを再帰的に繰り返せば最終的に多項式の計算結果が求まる。
*/

const horner = (coefficients:number[], x:number) => {
  let result = 0;

  for (let i = coefficients.length - 1; i >= 0; i--) {
    result = result * x +( coefficients[i]||0);
  }

  return result;
}
console.log(horner([2,3,5,7], 2));