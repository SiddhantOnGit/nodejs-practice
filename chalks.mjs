import chalk from 'chalk';

console.log(chalk.bgWhite("Enter Your Name:"));

process.stdin.on("data", (data) => {
  const input = data;
  console.log(chalk.bgGreenBright("Welcome,", input.toString()));
  process.exit();
});
