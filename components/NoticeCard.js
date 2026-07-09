import Link from "next/link";

export default function NoticeCard({ notice, onDelete }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5 border">

      {notice.image && (
        <img
          src={notice.image}
          alt={notice.title}
          className="w-full h-48 object-cover rounded mb-4"
        />
      )}

      <div className="flex justify-between items-start mb-3">

        <h2 className="text-xl font-semibold">
          {notice.title}
        </h2>

        {notice.priority === "Urgent" && (
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
            Urgent
          </span>
        )}

      </div>

      <p className="text-gray-700 mb-4">
        {notice.body}
      </p>

      <p className="text-sm text-gray-500">
        Category: {notice.category}
      </p>

      <p className="text-sm text-gray-500 mb-4">
        {new Date(notice.publishDate).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </p>

      <div className="flex gap-3">

        <Link
          href={`/notice/${notice.id}`}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
        >
          Edit
        </Link>

        <button
          onClick={() => onDelete(notice.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
        >
          Delete
        </button>

      </div>

    </div>
  );
}