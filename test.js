const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
var one
const rl = readline.createInterface({ input, output });
  console.log("This is thxgen. It was based on GitHub/Anti-Apple4life's tymaker.");
rl.question("Who are you writing to?", (answer) => {
  console.log(answer)
  rl.close()
});

  rl.question("Who are you writing to?2", (answer2) => {
    console.log(answer2)
    rl.close()
});