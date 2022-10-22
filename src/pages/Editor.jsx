import React from "react";

import {
  HtmlEditor,
  RichTextEditorComponent,
  Toolbar,
  QuickToolbar,
  Inject,
  Image,
  Link,
} from "@syncfusion/ej2-react-richtexteditor";

{
}

import { EditorData } from "../data/dummy";
import { Header } from "../components";

const Editor = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Editor" category="App" />
      <RichTextEditorComponent>
        {/* <EditorData /> */}
        <Inject services={[HtmlEditor, Link, Toolbar, QuickToolbar, Image]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
