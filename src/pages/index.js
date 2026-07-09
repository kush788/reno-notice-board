import { useEffect, useState } from "react";
import Link from "next/link";
import NoticeCard from "../../components/NoticeCard";

export default function Home() {
  const [notices, setNotices] = useState([]);

  async function fetchNotices() {
    const res = await fetch("/api/notices");
    const data = await res.json();
    setNotices(data);
  }

  useEffect(() => {
    fetchNotices();
  }, []);

  async function handleDelete(id) {
  const confirmed = window.confirm(
    "Are you sure you want to delete this notice?"
  );

  if (!confirmed) return;

  const res = await fetch(`/api/notices/${id}`, {
    method: "DELETE",
  });

  if (res.ok) {
    fetchNotices(); // Refresh notices after deletion
  } else {
    const error = await res.json();
    alert(error.message || "Failed to delete notice.");
  }
}

  return (
    <div className="max-w-6xl mx-auto p-6">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold">
          Notice Board
        </h1>

        <Link
          href="/notice/new"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Notice
        </Link>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {notices.length === 0 ? (
  <div className="col-span-full text-center text-gray-500 py-10">
    No notices available.
  </div>
) : (
  notices.map((notice) => (
    <NoticeCard
      key={notice.id}
      notice={notice}
      onDelete={handleDelete}
    />
  ))
)}

      </div>

    </div>
  );
}