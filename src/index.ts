#!/usr/bin/env node

import { rmSync } from "fs";

for (let i = 2; i < process.argv.length; i++)
  rmSync(process.argv[i], { recursive: true, force: true })