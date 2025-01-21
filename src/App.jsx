import { useState } from 'react'
import './App.css'
import { marked } from 'marked';

function App() 
{
  const defaultMarkdown = `
  ![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)

  # Welcome!

  ## This is a **Markdown Previewer**

  ### This is a Link: [Google](https://www.google.com)

  ### This is an *unordered list*:

  - First element
  - Second element
    - Fist under element
  - Third element

  ### and this is an *ordered list*:

  1. Fist element
  2. Second element
  3. Third element

  > This is a Quote!

  Heres some code, \`\`\`<div></div>\`\`\`, between 2 backticks in *javascript*.

  \`\`\`
  // example code:
  function helloWorld() {
    console.log("Hello, world!");
  }
  \`\`\`

  ### Just to be clear, i'm ~~American~~ _Italian_.

  ### This is a table:

  there can be | more | headers
  ------------ | ------------- | -------------
  I'gonna | use this | to train myself
  about my writing skills | in english. | Because
  you know | i'm not a |  grammar expert.
  `;

  const [markdown, setMarkdown] = useState(defaultMarkdown);
  return (
    <div className="app">
      <h1>Markdown Previewer</h1>
      <h2>Write and Preview Markdown Instantly</h2>
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

export default App
