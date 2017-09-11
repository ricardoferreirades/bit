/** @flow */
import fs from 'fs-extra';

export default function outputJsonFile(file: string, data): void {
  try {
    fs.ensureFileSync(file);
    return fs.outputJsonSync(file, data);
  } catch (e) {
    console.error(`failed to write output to file:${e}`);
  }
  return file;
}