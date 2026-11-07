#!/usr/bin/env node
// Fixture CLI for free-workspace-hello.
// Its only job is to prove that `npx github:seipass/<repo>` runs a stranger's
// code in one command, with no npm publish and no prior install.
"use strict";

const args = process.argv.slice(2);

if (args.includes("--version") || args.includes("-v")) {
  console.log(require("./package.json").version);
  process.exit(0);
}

console.log("free-workspace-hello: install path verified");
console.log(`node ${process.version} on ${process.platform}/${process.arch}`);
console.log(`cwd  ${process.cwd()}`);
console.log(`argv ${JSON.stringify(args)}`);
console.log("If you can read this, the no-npm-publish distribution path works.");
