import React, { Component } from "react"
import { FormControl, FormGroup , FormLabel} from "react-bootstrap"

let marked  = require('marked')
export default class App extends Component {
  state = {
    markdown: `
  This is a paragraph

  **This is bolded text**

  > Block Quotes!

  # Heading
  ## Heading 2

  - list item 1
  - list item 2
  - list item 3


  [Visit my website](https://codepen.io/brahimjarallah)
  This is a inline \`<div></div>\`
  This is a block of code:

  \`\`\`
    let x = 1;
    let y = 2;
    let z = x + y;
  \`\`\`  

  ![React](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K)
`,
  }

  updateMarkdown(markdown) {
    this.setState({ markdown })
  }
  render() {
    let { markdown } = this.state
    // console.log(markdown);
    return (
      <div className="App container">
        <div>
          <FormGroup controlId="formControlsTextArea">
            <FormLabel>Markdown Input</FormLabel>
            <textarea
              id="editor"
              componentClass="textarea"
              placeholder="Enter your Markdown"
              value={markdown}
              onChange={(e) => {
                this.updateMarkdown(e.target.value)
              }}
            >
              {/* {markdown} */}
            </textarea>
          </FormGroup>
        </div>
        <div>
          <h2>Markdown output</h2>
          {/* <div>{marked(markdown)}</div> */}
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: marked(markdown, { breaks: true }) }}
          ></div>
        </div>
      </div>
    )
  }
}

