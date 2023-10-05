#! /usr/bin/env node

import { rmSync } from "fs";

for (let i = 1; i < process.argv.length; i++)
  rmSync(process.argv[i])