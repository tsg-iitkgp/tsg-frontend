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
        if (res.ok && data) {
          setPostData({ ...post, ...data });
        } else {
          setPostData(post);
        }
      } catch (err) {
        setPostData(post);
      }
    }
    if (post?.id) fetchPost();
    else if (post) setPostData(post);

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
      <div className="modal-backdrop" onClick={handleBackdropClick}>
        <div className="modal-container">
          <button className="modal-close" onClick={onClose}>
            <FaTimes />
          </button>
          <div className="modal-image">
            <div className="loading-spinner"></div>
          </div>
          {copied && <div className="modal-copied-msg">Link copied!</div>}
        </div>
      </div>
    );
  }

  const applyLink =
    postData.apply_link ||
    postData.registration_link ||
    postData.form_link ||
    postData.link ||
    post?.apply_link;

  const renderDescriptionWithLinks = (text) => {
    if (!text) return null;
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);
    return parts.map((part, i) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#fbbf24",
              wordBreak: "break-all",
              overflowWrap: "anywhere",
              textDecoration: "underline",
            }}
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-container">
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>
        <div className="modal-image">
          <AppImage
            src={postData.image_url}
            alt={postData.title}
            width={800}
            height={1000}
            onError={(e) => {
              e.target.src =
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJNb250c2VycmF0IiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2ZiYmYyNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==";
            }}
          />
        </div>
        <div className="modal-info">
          <span className="modal-title">{postData.title}</span>
          <div className="modal-header-info">
            <div>
              <AppImage
                src={postData.society_logo}
                alt={postData.title}
                className="modal-logo-img"
                width={48}
                height={48}
              />
              <span>{postData.society_name}</span>
            </div>
            <span>
              {(() => {
                const rawDate = postData.created_at || postData.event_date;
                const d = rawDate ? new Date(rawDate) : new Date();
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
          <hr className="modal-divider" />
          <div className="modal-text">{renderDescriptionWithLinks(postData.description)}</div>
          <div
            className="modal-footer"
            style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}
          >
            {applyLink ? (
              <a
                href={applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-share-bottom modal-register-button"
                style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
              >
                Apply
              </a>
            ) : postData.form_structure ? (
              <button
                className="modal-share-bottom modal-register-button"
                onClick={() => {
                  window.location.href = `/posts/${postData.id}/form`;
                }}
              >
                Register
              </button>
            ) : null}

            <button className="modal-share-bottom" onClick={handleShare} title="Share this post">
              {copied ? "Link copied!" : "Share"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
