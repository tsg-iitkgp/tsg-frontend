import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Share2 } from "lucide-react"; // <-- Add this import
import { BASE_URL } from "../constants/api";
import "./PostModal.css";
import AppImage from "../components/AppImage";

const PostModal = ({ post, onClose }) => {
  const [postData, setPostData] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    // Fetch post details
    async function fetchPost() {
      try {
        const res = await fetch(`${BASE_URL}/posts/${post.id}`);
        const data = await res.json();
        setPostData(data);
      } catch (err) {
        setPostData(null);
      }
    }
    if (post?.id) fetchPost();

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [onClose, post]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  // Share handler
  const handleShare = async () => {
    const url = `${window.location.origin}${window.location.pathname}?postid=${post.id}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  if (!postData) {
    return (
      <div className='modal-backdrop' onClick={handleBackdropClick}>
        <div className='modal-container'>
          <button className='modal-close' onClick={onClose}>
            <FaTimes />
          </button>
          <div className='modal-image'>
            <div className='loading-spinner'></div>
          </div>
          {copied && <div className='modal-copied-msg'>Link copied!</div>}
        </div>
      </div>
    );
  }

  return (
    <div className='modal-backdrop' onClick={handleBackdropClick}>
      <div className='modal-container'>
        <button className='modal-close' onClick={onClose}>
          <FaTimes />
        </button>
        <div className='modal-image'>
          <AppImage
            src={postData.image_url}
            alt={postData.title}
            onError={(e) => {
              e.target.src =
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2ZiYmYyNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==";
            }}
          />
        </div>
        <div className='modal-info'>
          <span className='modal-title'>{postData.title}</span>
          <div className='modal-header-info'>
            <div>
              <AppImage src={postData.society_logo} alt={postData.title} className='modal-logo-img' />
              <span>{postData.society_name}</span>
            </div>
            <span>
              {(() => {
                const d = new Date(postData.created_at);
                const day = d.getDate();
                const month = d.toLocaleString("default", { month: "short" });
                const year = d.getFullYear();
                const suffix =
                  [, "st", "nd", "rd"][day % 10] && ![11, 12, 13].includes(day % 100)
                    ? [, "st", "nd", "rd"][day % 10]
                    : "th";
                return `${day}${suffix} ${month}, ${year}`;
              })()}
            </span>
          </div>
          <hr className='modal-divider' />
          <div className='modal-text'>{postData.description}</div>
          <div className='modal-footer' style={{ display: "flex", justifyContent: "space-between" }}>
            {postData.form_structure && (
              <button
                className='modal-share-bottom modal-register-button'
                onClick={() => {
                  // Navigate to the form page for this post
                  window.location.href = `/posts/${postData.id}/form`;
                }}>
                Register
              </button>
            )}
            <>
              <button className='modal-share-bottom' onClick={handleShare} title='Share this post'>
                {/* <Share2 size={28} style={{ color: "red" }} /> */}
                {copied ? "Link copied!" : "Share"}
              </button>
            </>
          </div>
        </div>
        {/* Share button at the bottom */}
      </div>
    </div>
  );
};

export default PostModal;
