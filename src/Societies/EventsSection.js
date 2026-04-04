/* filepath: d:\gym-web-frontend\src\testComponents\EventsSection.js */
"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { useParams } from "next/navigation";
import { BASE_URL } from "../constants/api";
import "./EventsSection.css";
import AppImage from "../components/AppImage";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const EventsSection = () => {
  const routeParams = useParams();
  const society_slug = routeParams?.society_slug;
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [expandedEvents, setExpandedEvents] = useState({});
  const [overflowingEvents, setOverflowingEvents] = useState({});
  const descriptionRefs = useRef({});
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
  });
  const [hasMore, setHasMore] = useState(true);

  const fetchEvents = useCallback(
    async (page = 1, isLoadMore = false) => {
      if (loading) return;
      setLoading(true);

      try {
        const queryParams = new URLSearchParams({
          page: page.toString(),
          limit: pagination.limit.toString(),
        });

        const response = await fetch(
          `${BASE_URL}/societies/${encodeURIComponent(society_slug)}/events?${queryParams}`,
        );
        const data = await response.json();

        if (isLoadMore) {
          setEvents((prev) => [...prev, ...data.events]);
        } else {
          setEvents(data.events);
        }

        setPagination(data.pagination);
        setHasMore(data.pagination.page < data.pagination.totalPages);
      } catch (err) {
        console.error("Error fetching events:", err);
      } finally {
        setLoading(false);
      }
    },
    [loading, pagination.limit, society_slug],
  );

  useEffect(() => {
    fetchEvents(1, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [society_slug]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 1000 &&
        hasMore &&
        !loading
      ) {
        fetchEvents(pagination.page + 1, true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fetchEvents, hasMore, loading, pagination.page]);

  // Check for text overflow after events are loaded
  useEffect(() => {
    const checkOverflow = () => {
      const newOverflowing = {};
      events.forEach((event) => {
        const el = descriptionRefs.current[event.id];
        if (el) {
          newOverflowing[event.id] = el.scrollHeight > el.clientHeight;
        }
      });
      setOverflowingEvents(newOverflowing);
    };

    // Small delay to ensure DOM is updated
    const timeoutId = setTimeout(checkOverflow, 100);
    window.addEventListener("resize", checkOverflow);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", checkOverflow);
    };
  }, [events]);

  const toggleExpanded = (eventId) => {
    setExpandedEvents((prev) => ({
      ...prev,
      [eventId]: !prev[eventId],
    }));
  };

  const formatEventPeriod = (eventDate) => {
    const date = new Date(eventDate);
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  return (
    <div className="events-container">
      {events.length === 0 && !loading ? (
        <div
          style={{
            color: "#fbbf24",
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: "center",
            margin: "4rem 0",
          }}
        >
          No events available
        </div>
      ) : (
        <motion.div 
          className="events-list"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {events.map((event) => (
            <motion.div variants={cardVariants} key={event.id} className="event-card">
              <div className="event-image">
                <AppImage
                  src={
                    event.image_url ||
                    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJNb250c2VycmF0IiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2ZiYmYyNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkV2ZW50PC90ZXh0Pjwvc3ZnPg=="
                  }
                  alt={event.title}
                  width={300}
                  height={200}
                  onError={(e) => {
                    e.target.src =
                      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJNb250c2VycmF0IiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2ZiYmYyNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkV2ZW50PC90ZXh0Pjwvc3ZnPg==";
                  }}
                />
              </div>
              <div className="event-content">
                <h3 className="event-title">{event.title}</h3>
                <div className="event-description-wrapper">
                  <p
                    ref={(el) => (descriptionRefs.current[event.id] = el)}
                    className={`event-description ${expandedEvents[event.id] ? "expanded" : ""}`}
                  >
                    {event.description}
                  </p>
                  {(overflowingEvents[event.id] || expandedEvents[event.id]) && (
                    <button
                      className={`read-more-button ${expandedEvents[event.id] ? "expanded" : ""}`}
                      onClick={() => toggleExpanded(event.id)}
                    >
                      {expandedEvents[event.id] ? "Read Less" : "Read More"}
                      <span className="arrow">▼</span>
                    </button>
                  )}
                </div>
                <div className="event-footer">
                  <div className="event-period">
                    <span className="period-label">Event Period :</span>
                    <span className="period-value">{formatEventPeriod(event.event_date)}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {loading && events.length === 0 && (
        <div className="events-loading">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="skeleton-event-card">
              <div className="skeleton-event-image"></div>
              <div className="skeleton-event-content">
                <div className="skeleton-event-title"></div>
                <div className="skeleton-event-line"></div>
                <div className="skeleton-event-line"></div>
                <div className="skeleton-event-line short"></div>
                <div className="skeleton-event-footer">
                  <div className="skeleton-event-date"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {loading && events.length > 0 && (
        <div style={{ display: "flex", justifyContent: "center", margin: "2rem 0" }}>
          <div className="loading-spinner"></div>
        </div>
      )}
    </div>
  );
};

export default EventsSection;

