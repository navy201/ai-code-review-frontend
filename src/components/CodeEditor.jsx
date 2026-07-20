import Editor from "@monaco-editor/react";

function CodeEditor({ code, setCode }) {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-white mb-4">
        Code Editor
      </h2>

      <Editor
        height="500px"
        language="python"
        theme="vs-dark"
        value={code}
        onChange={(value) => setCode(value || "")}
      />
    </div>
  );
}

export default CodeEditor;