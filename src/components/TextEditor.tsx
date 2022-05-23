import React from 'react';
import { useEditor, EditorContent, Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import {
  FormatBold,
  FormatItalic,
  FormatStrikethrough,
  FormatQuoteOutlined,
  FormatListBulletedOutlined,
  FormatListNumberedOutlined,
} from '@mui/icons-material';

const EditorMenu = ({ editor }: { editor: Editor }) => {
  return (
    <div className="flex flex-wrap gap-4">
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`${
          editor.isActive('heading', { level: 1 }) ? 'bg-red-200' : ''
        } h-6 w-6`}
      >
        H1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`${
          editor.isActive('heading', { level: 2 }) ? 'bg-red-200' : ''
        } h-6 w-6`}
      >
        H2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`${
          editor.isActive('heading', { level: 3 }) ? 'bg-red-200' : ''
        } h-6 w-6`}
      >
        H3
      </button>
      <button
        onClick={() => editor?.chain().focus().toggleBold().run()}
        className={editor?.isActive('bold') ? 'bg-red-200' : ''}
      >
        <FormatBold />
      </button>
      <button
        onClick={() => editor?.chain().focus().toggleItalic().run()}
        className={editor?.isActive('italic') ? 'bg-red-200' : ''}
      >
        <FormatItalic />
      </button>
      <button
        onClick={() => editor?.chain().focus().toggleStrike().run()}
        className={editor?.isActive('strike') ? 'bg-red-200' : ''}
      >
        <FormatStrikethrough />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'bg-red-200' : ''}
      >
        <FormatQuoteOutlined />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'bg-red-200' : ''}
      >
        <FormatListBulletedOutlined />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'bg-red-200' : ''}
      >
        <FormatListNumberedOutlined />
      </button>
    </div>
  );
};

const TextEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '',
  });

  if (!editor) return null;

  console.log(editor.getJSON());

  return (
    <>
      <div className="border-surface-onSurface w-1/2 rounded-md border-2 p-3.5 text-base font-normal">
        <EditorMenu editor={editor} />
        <hr className="mb-5 mt-2" />
        <EditorContent editor={editor} />
      </div>
      <pre>{JSON.stringify(editor.getJSON())}</pre>
    </>
  );
};

export default TextEditor;
