import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NoticeForm from "../../../components/NoticeForm";

export default function EditNotice() {
  const router = useRouter();
  const { id } = router.query;

  const [notice, setNotice] = useState(null);

  useEffect(() => {
    if (!id) return;

    async function fetchNotice() {
      const res = await fetch(`/api/notices/${id}`);
      const data = await res.json();
      setNotice(data);
    }

    fetchNotice();
  }, [id]);

  if (!notice) {
    return (
      <div className="p-6">
        Loading...
      </div>
    );
  }

  return (
    <NoticeForm
      initialData={notice}
      isEdit={true}
    />
  );
}