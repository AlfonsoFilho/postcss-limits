export function makeCSS(totalRules: number = 0): Object {
  let selectorsList: Array = [];
  let i: number = 0;

  while (++i <= totalRules) {
    selectorsList.push(i);
  }

  return {
    walk: (fn) => fn({
      selectors: selectorsList
    })
  };
}
