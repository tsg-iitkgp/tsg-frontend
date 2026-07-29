"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Styles from "./events.module.css";
import eventsData from "./eventsData";
import EventCard from "../../components/EventCard/EventCard";
import Layout from "../../components/Layouts/Layout";
import Popup from "../../components/Popup";
import ResultsPreview from "../../components/Admin/DataUpdate/ResultsPreview";
import SkeletonElement from "../../components/Skeleton/SkeletonElement";
import AppImage from "../../components/AppImage";
import PostModal from "../../Societies/PostModal";
import { BASE_URL } from "../../constants/api";
import { FaSearch } from "react-icons/fa";

export default function Events() {
  const [show, setShow] = useState(false);
  const [showRes, setShowRes] = useState(false);
  const [content, setContent] = useState(null);
  const [title, setTitle] = useState(null);
  const [eventResults, setEventResults] = useState(null);
  const [image, setImage] = useState(null);
  const [index, setIndex] = useState(null);
  const [events, setEvents] = useState(eventsData);
  const [loading, setLoading] = useState(false);

  // Categories from backend API
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Society Events & Posts state from backend API
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 12,
    total: 0,
    totalPages: 1,
  });

  const CATEGORY_ORDER = [
    "Technology",
    "Social & Cultural",
    "Students' Welfare",
    "Sports & Games",
    "Department",
    "Indepedent",
    "Cell",
    "Regional",
  ];

  // Fetch categories directly from backend API and sort by desired order
  useEffect(() => {
    fetch(`${BASE_URL}/categories`)
      .then((res) => res.json())
      .then((data) => {
        const rawCats = data.categories || [];
        const sortedCats = [...rawCats].sort((a, b) => {
          const idxA = CATEGORY_ORDER.indexOf(a.name);
          const idxB = CATEGORY_ORDER.indexOf(b.name);
          const posA = idxA !== -1 ? idxA : 999;
          const posB = idxB !== -1 ? idxB : 999;
          return posA - posB;
        });
        setCategories(sortedCats);
      })
      .catch(() => setCategories([]));
  }, []);

  // Fetch compiled posts from backend API with backend category filtering, search & pagination
  const fetchPostsFromApi = useCallback(async (category = "", search = "", pageNum = 1, append = false) => {
    setLoadingPosts(true);
    try {
      const queryParams = new URLSearchParams({
        page: pageNum.toString(),
        limit: "12",
      });
      if (category) {
        queryParams.append("category", category);
      }
      if (search) {
        queryParams.append("search", search);
      }

      const res = await fetch(`${BASE_URL}/posts?${queryParams}`);
      const data = await res.json();
      const loadedPosts = data.posts || [];

      if (append) {
        setPosts((prev) => [...prev, ...loadedPosts]);
      } else {
        setPosts(loadedPosts);
      }

      if (data.pagination) {
        setPagination(data.pagination);
      }
    } catch (err) {
      console.error("Failed to fetch posts from backend API:", err);
      setPosts([]);
    } finally {
      setLoadingPosts(false);
    }
  }, []);

  // Fetch when category or search changes (resets to page 1)
  useEffect(() => {
    fetchPostsFromApi(selectedCategory, searchQuery, 1, false);
  }, [selectedCategory, searchQuery, fetchPostsFromApi]);

  // Load more pages via backend API pagination
  const handleLoadMore = () => {
    if (pagination.page < pagination.totalPages && !loadingPosts) {
      const nextPage = pagination.page + 1;
      fetchPostsFromApi(selectedCategory, searchQuery, nextPage, true);
    }
  };

  const handlePostCardClick = (post) => {
    setSelectedPost(post);
    setIsPostModalOpen(true);
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  if (typeof window !== "undefined") document.title = "Events | TSG";

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return "";
    const day = d.getDate();
    const month = d.toLocaleString("default", { month: "short" });
    const year = d.getFullYear();
    const suffix =
      [, "st", "nd", "rd"][day % 10] && ![11, 12, 13].includes(day % 100)
        ? [, "st", "nd", "rd"][day % 10]
        : "th";
    return `${day}${suffix} ${month}, ${year}`;
  };

  return (
    <Layout>
      <Popup
        show={show}
        content={content}
        disable={() => {
          setShow(false);
        }}
        imgSrc={image}
      />
      <ResultsPreview
        eventTitle={title}
        eventResults={eventResults}
        showRes={showRes}
        index={index}
        disable={() => {
          setShowRes(false);
        }}
      />

      <div className={Styles.bgContainer}>
        {/* Section Header */}
        <div className={Styles.headerRegion}>
          <div className={Styles.yellowSubtitle}>THE SPIRIT OF KGP</div>
          <h2 className={Styles.mainTitle}>Events</h2>
        </div>

        {/* SECTION 1: Compiled Society Events Feed (Loaded via backend API) */}
        <div className={Styles.postsSection}>
          {/* Category Filter Pills (backend categories API) & Search */}
          <div className={Styles.filterBarContainer}>
            <div className={Styles.categoryFilterPills}>
              <button
                className={`${Styles.filterPill} ${selectedCategory === "" ? Styles.activePill : ""}`}
                onClick={() => setSelectedCategory("")}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`${Styles.filterPill} ${selectedCategory === cat.name ? Styles.activePill : ""}`}
                  onClick={() => setSelectedCategory(cat.name)}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <div className={Styles.searchBox}>
              <FaSearch className={Styles.searchIcon} />
              <input
                type="text"
                placeholder="Search events or societies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={Styles.searchInput}
              />
            </div>
          </div>

          {/* Events Feed Grid */}
          {loadingPosts && posts.length === 0 ? (
            <div className={Styles.skeletonRow}>
              {[...Array(6)].map((_, i) => (
                <div key={i} className={Styles.skeletonPostCard}></div>
              ))}
            </div>
          ) : posts.length === 0 ? (
            <div className={Styles.noDataMsg}>
              No events found {selectedCategory ? `for category "${selectedCategory}"` : searchQuery ? `matching "${searchQuery}"` : ""}.
            </div>
          ) : (
            <>
              <motion.div 
                className={Styles.postsGrid}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {posts.map((post) => (
                  <motion.div
                    key={post.id}
                    variants={itemVariants}
                    className={Styles.postCard}
                    onClick={() => handlePostCardClick(post)}
                  >
                    {/* Top Header with Society Logo & Name */}
                    <div className={Styles.postCardHeader}>
                      <div className={Styles.postSocietyInfo}>
                        <AppImage
                          src={post.society_logo}
                          alt={post.society_name || "Society"}
                          width={36}
                          height={36}
                          className={Styles.postSocietyLogo}
                          onError={(e) => {
                            e.target.src =
                              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzMzMyIvPjwvc3ZnPg==";
                          }}
                        />
                        <div className={Styles.postSocietyMeta}>
                          <span className={Styles.postSocietyName}>{post.society_name || "Society"}</span>
                          {post.category_name && (
                            <span className={Styles.postCategoryTag}>{post.category_name}</span>
                          )}
                        </div>
                      </div>
                      <span className={Styles.postDate}>{formatDate(post.created_at || post.event_date)}</span>
                    </div>

                    {/* Image preview */}
                    <div className={Styles.postImageWrapper}>
                      <AppImage
                        src={post.image_url}
                        alt={post.title}
                        width={400}
                        height={260}
                        className={Styles.postImg}
                        onError={(e) => {
                          e.target.src =
                            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjIyIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJNb250c2VycmF0IiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIxNiIgZmlsbD0iI2ZiYmYyNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPmV2ZW50IFBvc3Q8L3RleHQ+PC9zdmc+";
                        }}
                      />
                    </div>

                    {/* Card Content */}
                    <div className={Styles.postCardBody}>
                      <h4 className={Styles.postTitle}>{post.title}</h4>
                      {post.description && (
                        <p className={Styles.postDescriptionSnippet}>
                          {post.description.length > 120
                            ? post.description.slice(0, 120) + "..."
                            : post.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {pagination.page < pagination.totalPages && (
                <div className={Styles.loadMoreContainer}>
                  <button
                    className={Styles.loadMoreBtn}
                    onClick={handleLoadMore}
                    disabled={loadingPosts}
                  >
                    {loadingPosts ? "Loading..." : "Load More Events"}
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        {/* SECTION 2: Major Events Section (Renamed from All Events) */}
        <div className={Styles.cardsSection}>
          <div className={Styles.sectionHeaderWrapper}>
            <motion.h3 
              className={Styles.sectionHeading}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Major Events
            </motion.h3>
            <p className={Styles.sectionSubheading}>
              Flagship inter-hall competitions, festivals, and campus-wide events organized by TSG
            </p>
          </div>
          
          <motion.div 
            className={Styles.cardsGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {loading ? (
              <div className={Styles.skeletonRow}>
                <SkeletonElement type="thumbnail" />
                <SkeletonElement type="thumbnail" />
                <SkeletonElement type="thumbnail" />
              </div>
            ) : (
              events.map((event, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <EventCard
                    index={idx}
                    title={event.title}
                    date={event.date}
                    description={event.description || ''}
                    imgSrc={event.poster}
                    resultExists={event.resultExists}
                    displayTrue={() => {
                      const firstLink = event.links && event.links[0]?.href;
                      if (firstLink) {
                        window.open(firstLink, "_blank");
                      }
                    }}
                    displayResults={() => {
                      setTitle(event.title);
                      setIndex(idx);
                      setShowRes(true);
                    }}
                    setEventResults={setEventResults}
                  />
                </motion.div>
              ))
            )}
          </motion.div>
        </div>

        {/* Post Modal popup when an event/post card is clicked */}
        {isPostModalOpen && selectedPost && (
          <PostModal
            post={selectedPost}
            onClose={() => {
              setIsPostModalOpen(false);
              setSelectedPost(null);
            }}
          />
        )}
      </div>
    </Layout>
  );
}



