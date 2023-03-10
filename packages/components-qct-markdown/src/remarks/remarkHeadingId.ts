import { visit } from 'unist-util-visit';

export function remarkHeadingId() {
  return function remarkHeadingIdMap(rootNode: any) {
    visit(rootNode, 'heading', (node) => {
      let lastChild = node.children[node.children.length - 1];
      if (lastChild && lastChild.type === 'text') {
        let string = lastChild.value.replace(/ +$/, '');
        let matched = string.match(/ {#([^]+?)}$/);

        if (matched) {
          let id = matched[1];
          if (!!id.length) {
            if (!node.data) {
              node.data = {};
            }
            if (!node.data.hProperties) {
              node.data.hProperties = {};
            }
            node.data.id = node.data.hProperties.id = id;

            string = string.substring(0, matched.index);
            lastChild.value = string;
          }
        }
      }
    });
  };
}
