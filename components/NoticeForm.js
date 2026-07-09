import { useState } from "react";
import { useRouter } from "next/router";

export default function NoticeForm({ initialData = {}, isEdit = false }) {
  const router = useRouter();

  const [form, setForm] = useState({
    title: initialData.title || "",
    body: initialData.body || "",
    category: initialData.category || "General",
    priority: initialData.priority || "Normal",
    publishDate: initialData.publishDate
      ? initialData.publishDate.slice(0, 10)
      : "",
    image: initialData.image || "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isEdit
      ? `/api/notices/${initialData.id}`
      : "/api/notices";

    const method = isEdit ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push("/");
    } else {
      const error = await res.json();
      alert(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 space-y-4"
    >
      <h1 className="text-3xl font-bold">
        {isEdit ? "Edit Notice" : "Add Notice"}
      </h1>

      <input
        className="w-full border p-2 rounded"
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
      />

      <textarea
        className="w-full border p-2 rounded"
        rows="5"
        name="body"
        placeholder="Body"
        value={form.body}
        onChange={handleChange}
      />

      <select
        className="w-full border p-2 rounded"
        name="category"
        value={form.category}
        onChange={handleChange}
      >
        <option>Exam</option>
        <option>Event</option>
        <option>General</option>
      </select>

      <select
        className="w-full border p-2 rounded"
        name="priority"
        value={form.priority}
        onChange={handleChange}
      >
        <option>Normal</option>
        <option>Urgent</option>
      </select>

      <input
        className="w-full border p-2 rounded"
        type="date"
        name="publishDate"
        value={form.publishDate}
        onChange={handleChange}
      />
      

      <input
        className="w-full border p-2 rounded"
        name="image"
        placeholder="Image URL (Optional)"
        value={form.image}
        onChange={handleChange}
      />

      <button
        className="bg-blue-600 text-white px-5 py-2 rounded"
      >
        Save Notice
      </button>
    </form>
  );
}