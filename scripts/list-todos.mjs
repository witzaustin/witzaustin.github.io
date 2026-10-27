// Lists every [TODO ...] note left in the content files. Run with: npm run todos
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

function files(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? files(path) : path.endsWith('.md') ? [path] : [];
  });
}

let count = 0;
for (const file of files('src/content')) {
  readFileSync(file, 'utf8').split('\n').forEach((line, i) => {
    for (const match of line.matchAll(/\[TODO[^\]]*\]/g)) {
      count++;
      console.log(`${file}:${i + 1}  ${match[0]}`);
    }
  });
}
console.log(count ? `\n${count} TODO note(s) left.` : 'No TODO notes left.');
