import { createSelector } from "@reduxjs/toolkit";
import jsf from "json-schema-faker";
import $RefParser from "json-schema-ref-parser";
import cloneDeep from "lodash-es/cloneDeep";
import * as monacoEditor from "monaco-editor/esm/vs/editor/editor.api";
import React, { useEffect, useState } from "react";
import MonacoEditor from "react-monaco-editor";
import { useSelector } from "react-redux";
import { getObjectByRef } from "../../shared/utils";
import { getDocument } from "../document/document-slice";
import { getCurrentRef } from "./editor-slice";
import { monacoDefaultOptions } from "./monaco-options";

const getCurrentSchemaValue = createSelector(
  [getDocument, getCurrentRef],
  (document, currentRef) => {
    if (document && currentRef) {
      return JSON.stringify(getObjectByRef(currentRef, document));
    }
  }
);

export const GeneratedEditor: React.FC = () => {
  const document = useSelector(getDocument);
  const currentSchemaValue = useSelector(getCurrentSchemaValue);

  const [value, setValue] = useState("");

  useEffect(() => {
    if (document && currentSchemaValue) {
      const schema = JSON.parse(currentSchemaValue);
      const schemas = document.components?.schemas;

      const schemaObj = {
        ...schema,
        components: {
          schemas: cloneDeep(schemas)
        }
      };

      $RefParser
        .dereference(schemaObj)
        .then(parsedSchema => {
          jsf.option("alwaysFakeOptionals", true);
          try {
            const generated = jsf.generate(parsedSchema);
            setValue(JSON.stringify(generated));
          } catch {}
        })
        .catch(err => {
          console.error(err);
        });
    }
  }, [document, currentSchemaValue]);

  const options: monacoEditor.editor.IEditorConstructionOptions = {
    ...monacoDefaultOptions,
    ariaLabel: "generated model",
    readOnly: true
  };

  return (
    <MonacoEditor
      height={300}
      language="json"
      value={value}
      options={options}
    ></MonacoEditor>
  );
};
