import React from "react";
import ReactQuill, { Quill } from "react-quill";
import ImageResize from "quill-image-resize-module";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.core.css";

Quill.register("modules/ImageResize", ImageResize);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  modules = {
    ImageResize: {},
    toolbar: [
      ["formula"],
      [{ header: [1, 2, false] }],
      [{ align: ["", "center", "right", "justify"] }],
      ["blockquote", "code-block"],
      ["bold", "italic", "underline", "strike"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" }
      ],
      ["link", "image", "video"]
    ]
  };

  formats = [
    "formula",
    "header",
    "align",
    "blockquote",
    "code-block",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video"
  ];

  render() {
    return (
      <div className="container">
        <div className="text-editor">
          <ReactQuill
            className="editor"
            theme="snow"
            modules={this.modules}
            formats={this.formats}
          />
        </div>
        <style jsx>{`
          .container {
            width: 100%;
            padding: 20px;
          }

          .text-editor {
            width: 40%;
            display: block;
            margin: auto;
          }

          .editor {
            min-height: 500px;
          }
        `}</style>
      </div>
    );
  }
}

export default App;
