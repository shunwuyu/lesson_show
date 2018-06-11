function constant() {
  return () => arguments[0];
}

var result = constant(1);
console.log(result());

const func = (...nums) => {
  console.log(nums[0])
}

func(1, 2, 3);