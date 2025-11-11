import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { FaBold, FaItalic, FaListUl, FaListOl } from "react-icons/fa";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import Heading from "@tiptap/extension-heading";

export default function RichTextEditor({ value, onChange }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Describe the property...",
      }),
      Underline,
    Link.configure({ openOnClick: false }),
    Heading.configure({ levels: [2, 3, 4] }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  if (!editor) return null;

  return (
    <div className="border border-gray-200 rounded-lg focus-within:border-black transition-colors">
      {/* Toolbar */}
      <div className="flex items-center gap-1 p-2 border-b border-gray-200">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded ${editor.isActive("bold") ? "bg-gray-100" : "hover:bg-gray-50"}`}
        >
          <FaBold className="text-sm" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded ${editor.isActive("italic") ? "bg-gray-100" : "hover:bg-gray-50"}`}
        >
          <FaItalic className="text-sm" />
        </button>

        <div className="w-px h-4 bg-gray-300 mx-1"></div>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded ${editor.isActive("bulletList") ? "bg-gray-100" : "hover:bg-gray-50"}`}
        >
          <FaListUl className="text-sm" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-2 rounded ${editor.isActive("orderedList") ? "bg-gray-100" : "hover:bg-gray-50"}`}
        >
          <FaListOl className="text-sm" />
        </button>
      </div>

      {/* Editor */}
      <EditorContent
        editor={editor}
        className="min-h-[120px] p-4 prose prose-sm max-w-none focus:outline-none"
      />
    </div>
  );
}