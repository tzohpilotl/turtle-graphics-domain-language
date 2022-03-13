const fs = require("fs");
const readline = require("readline");
const events = require("events");

parse().then((commands) => console.log(commands));

async function parse() {
  const commands = [];
  const filename = getFilename();
  try {
    const rl = readline.createInterface({
      input: fs.createReadStream(filename),
      crlfDelay: Infinity,
    });
    rl.on("line", getCommand(commands));
    await events.once(rl, "close");
    return commands;
  } catch (e) {
    console.error(e);
    return [];
  }
}

function getCommand(commands) {
  return (line) => commands.push([line[0], line[2]]);
}

function getFilename() {
  return process.argv[2];
}
