function hello() {
    // // uint public unlockTime = 0;
    // // string unlock = "hello"
    // // uint[] da = [1, 2, 3];
    // const unlockTime = 0;
    // let unlock = "hello"
    // const dad = 1.1; // impossible
    // const da = [1, 2, 3];
    const h = 1;
    const j = 1;
    const jem = h + j; // 2, "11"
    console.log(jem);
  }
  
  const result = add(1111111111,2); // 3
  
  function add(first, second) {
    return first + second;
  }

  function spreadTheWord(word) {
    for(let i = 0; i < 100; i++) {
      console.log(word, i);
    }
  }
  
  hello();

  console.log("the result of adding two numbers: ", result);

  spreadTheWord("Shrek died for our sins!")
  