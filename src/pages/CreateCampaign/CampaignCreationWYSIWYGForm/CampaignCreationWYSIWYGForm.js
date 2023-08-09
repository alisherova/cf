import "react-quill/dist/quill.snow.css";
import Toolbar, { modules, formats } from "./Toolbar";
import {
  TextEditor,
  ToolbarContainer,
  StyledReactQuill,
  SaveButton
} from "./CampaignCreationWYSIWYGForm.styled";
import { useEffect, useState } from "react";

export const Editor = () => {
  const [editorValue, setEditorValue] = useState({ value: null });
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(false);

  const handleChange = value => {
    setEditorValue({ value });
  };
  // Update the isSaveButtonDisabled state when the editor content changes
  useEffect(() => {
    const isEmpty = !editorValue.value || editorValue.value === "<p><br></p>";
    if (isEmpty !== isSaveButtonDisabled) {
      setIsSaveButtonDisabled(isEmpty);
    }
  }, [editorValue.value, isSaveButtonDisabled]);

  return (
    <>
      <TextEditor>
        <ToolbarContainer>
          <Toolbar />
        </ToolbarContainer>
        <StyledReactQuill
          theme="snow"
          value={editorValue.value}
          onChange={handleChange}
          placeholder={"Yozishni boshlang..."}
          modules={modules}
          formats={formats}
        />
        <SaveButton disabled={isSaveButtonDisabled}>Saqlash</SaveButton>
      </TextEditor>
    </>
  );
};

export default Editor;
