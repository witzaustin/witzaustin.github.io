// Wraps any "[TODO ...]" text in <mark class="todo"> so unfinished spots stand out.
const TODO = /\[TODO[^\]]*\]/g;

function walk(node) {
  if (!node.children) return;
  const next = [];
  for (const child of node.children) {
    if (child.type === 'text' && TODO.test(child.value)) {
      TODO.lastIndex = 0;
      let last = 0;
      for (const match of child.value.matchAll(TODO)) {
        if (match.index > last) next.push({ type: 'text', value: child.value.slice(last, match.index) });
        next.push({
          type: 'element',
          tagName: 'mark',
          properties: { className: ['todo'] },
          children: [{ type: 'text', value: match[0] }],
        });
        last = match.index + match[0].length;
      }
      if (last < child.value.length) next.push({ type: 'text', value: child.value.slice(last) });
    } else {
      walk(child);
      next.push(child);
    }
  }
  node.children = next;
}

export default function rehypeTodo() {
  return (tree) => walk(tree);
}
