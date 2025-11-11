import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../../api/api";
import slugify from "../../../utils/slugify";

// 🪶 Tiptap imports
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function BlogEditor() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState({
    title: "",
    excerpt: "",
    contentHtml: "",
    tags: "",
    sendAsNewsletter: true,
    publishAt: "",
  });

  const editor = useEditor({
    extensions: [StarterKit],
    content: post.contentHtml || "<p>Start writing your post...</p>",
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setPost((prev) => ({ ...prev, contentHtml: html }));
    },
  });

  useEffect(() => {
    if (id) load();
  }, [id]);

  async function load() {
    try {
      const res = await api.get(`/blog/post/${id}`);
      const p = res.data;
      setPost({
        ...p,
        tags: p.tags.join(", "),
      });
      editor?.commands.setContent(p.contentHtml);
    } catch (err) {
      console.error(err);
      alert("Failed to load post");
    }
  }

  async function save(asDraft = true) {
    try {
      const payload = {
        title: post.title,
        excerpt: post.excerpt,
        contentHtml: post.contentHtml,
        tags: post.tags.split(",").map((t) => t.trim()),
        sendAsNewsletter: post.sendAsNewsletter,
        publishAt: post.publishAt || undefined,
        status: asDraft
          ? "draft"
          : post.publishAt
          ? "scheduled"
          : "published",
      };

      if (!id) {
        const res = await api.post("/blog", payload);
        navigate(`/admin/blog/edit/${res.data._id}`);
      } else {
        await api.put(`/blog/${id}`, payload);
        alert("Saved");
      }
    } catch (err) {
      console.error(err);
      alert("Save failed");
    }
  }

  async function publishNow() {
    try {
      if (!id) await save(false);
      await api.post(`/blog/${id}/publish`);
      alert("Published and newsletter sent (if enabled)");
      navigate("/admin/blog");
    } catch (err) {
      console.error(err);
      alert("Publish failed");
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <input
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        placeholder="Post title"
        className="w-full p-3 border mb-3"
      />

      <input
        value={post.excerpt}
        onChange={(e) => setPost({ ...post, excerpt: e.target.value })}
        placeholder="Short excerpt"
        className="w-full p-3 border mb-3"
      />

      <div className="border rounded-lg p-3 min-h-[300px]">
        <EditorContent editor={editor} />
      </div>

      <div className="mt-3 flex gap-2">
        <button onClick={() => save(true)} className="btn border">
          Save Draft
        </button>
        <button
          onClick={() => save(false)}
          className="btn bg-green-600 text-white"
        >
          Save & Publish
        </button>
        <button
          onClick={publishNow}
          className="btn bg-amber-500 text-white"
        >
          Publish Now & Send Newsletter
        </button>
      </div>
    </div>
  );
}
