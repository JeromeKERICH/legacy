import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { 
  FaBold, 
  FaItalic, 
  FaListUl, 
  FaListOl, 
  FaLink,
  FaUnderline,
  FaHeading,
  FaQuoteRight,
  FaUndo,
  FaRedo
} from "react-icons/fa";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import Heading from "@tiptap/extension-heading";

export default function RichTextEditor({ value, onChange, placeholder = "Describe the property..." }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({ placeholder }),
      Underline,
      Link.configure({ 
        openOnClick: false,
        HTMLAttributes: {
          class: "text-amber-600 underline hover:text-amber-700",
        },
      }),
      Heading.configure({ 
        levels: [2, 3],
        HTMLAttributes: {
          class: "font-cambria font-bold",
        },
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  const setLink = () => {
    const url = window.prompt('Enter URL:');
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  if (!editor) {
    return (
      <div className="border-2 border-gray-200 rounded-lg p-4 min-h-[120px] bg-gray-50 animate-pulse">
        <div className="flex gap-2 mb-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-8 h-8 bg-gray-300 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  const ToolbarButton = ({ onClick, active, icon, title }) => (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className={`p-2 rounded-lg transition-all duration-200 ${
        active 
          ? "bg-amber-100 text-amber-700 border border-amber-300" 
          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-transparent"
      }`}
    >
      {icon}
    </button>
  );

  return (
    <div className="border-2 border-gray-200 rounded-lg focus-within:border-amber-500 focus-within:ring-2 focus-within:ring-amber-200 transition-all duration-200 bg-white">
      {/* Enhanced Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-3 border-b border-gray-200 bg-gray-50 rounded-t-lg">
        {/* Text Formatting */}
        <div className="flex items-center gap-1 mr-2">
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBold().run()}
            active={editor.isActive("bold")}
            icon={<FaBold className="text-sm" />}
            title="Bold"
          />
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleItalic().run()}
            active={editor.isActive("italic")}
            icon={<FaItalic className="text-sm" />}
            title="Italic"
          />
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            active={editor.isActive("underline")}
            icon={<FaUnderline className="text-sm" />}
            title="Underline"
          />
        </div>

        {/* Headings */}
        <div className="flex items-center gap-1 mr-2">
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            active={editor.isActive("heading", { level: 2 })}
            icon={<FaHeading className="text-sm" />}
            title="Heading 2"
          />
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            active={editor.isActive("heading", { level: 3 })}
            icon={<FaHeading className="text-xs" />}
            title="Heading 3"
          />
        </div>

        {/* Lists */}
        <div className="flex items-center gap-1 mr-2">
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            active={editor.isActive("bulletList")}
            icon={<FaListUl className="text-sm" />}
            title="Bullet List"
          />
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            active={editor.isActive("orderedList")}
            icon={<FaListOl className="text-sm" />}
            title="Numbered List"
          />
        </div>

        {/* Links & Quotes */}
        <div className="flex items-center gap-1 mr-2">
          <ToolbarButton
            onClick={setLink}
            active={editor.isActive("link")}
            icon={<FaLink className="text-sm" />}
            title="Add Link"
          />
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            active={editor.isActive("blockquote")}
            icon={<FaQuoteRight className="text-sm" />}
            title="Quote"
          />
        </div>

        {/* Undo/Redo */}
        <div className="flex items-center gap-1 ml-auto">
          <ToolbarButton
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
            icon={<FaUndo className={`text-sm ${!editor.can().undo() ? 'text-gray-400' : 'text-gray-600'}`} />}
            title="Undo"
          />
          <ToolbarButton
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
            icon={<FaRedo className={`text-sm ${!editor.can().redo() ? 'text-gray-400' : 'text-gray-600'}`} />}
            title="Redo"
          />
        </div>
      </div>

      {/* Editor Content */}
      <EditorContent
        editor={editor}
        className="min-h-[150px] p-4 prose prose-sm max-w-none focus:outline-none font-cambria"
      />

      {/* Character Count & Help Text */}
      <div className="flex justify-between items-center px-4 py-2 bg-gray-50 border-t border-gray-200 rounded-b-lg text-xs text-gray-500">
        <div>
          {editor.getText().length > 0 && (
            <span>
              {editor.getText().length} characters • {editor.getText().split(/\s+/).filter(Boolean).length} words
            </span>
          )}
        </div>
        <div className="flex gap-4">
          <span>⏎ Enter for new line</span>
          <span>Shift + ⏎ for soft break</span>
        </div>
      </div>
    </div>
  );
}