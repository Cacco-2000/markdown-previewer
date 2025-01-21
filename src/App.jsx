import { useState } from 'react';
import './App.css';
import { marked } from 'marked';

marked.setOptions({
  gfm: true,
  breaks: true,
});

function App() {
  const defaultMarkdown = `# Welcome to my React Markdown Previewer!
## This is a sub-heading...
[Link](https://www.google.com)
\`const greetings = "Hi!"\`

\`\`\`
// example code:
  function helloWorld() {
    console.log("Hello, world!");
  }
\`\`\`

- This is a List item
> Blockquote

![Image](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)

**Bold text**
`;

  const [markdown, setMarkdown] = useState(defaultMarkdown);

  return (
    <div className="app">
      <h1>Markdown Previewer</h1>
      <div className="editor-preview-container">
        <textarea
          id="editor"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
      </div>
    </div>
  );
}

export default App;
