"use client";

import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Layout from "../../components/Layouts/Layout";
import { Share2, X as CloseIcon } from "lucide-react";
import "./GaiaEvent2025.css";
import AppImage from "../../components/AppImage";

export default function GaiaEvent2025() {
  const pageTitle = "Gaia Event 2025 - IIT Kharagpur Cambridge Collaboration | TSG";
  const ogTitle = "IIT Kharagpur - University of Cambridge Collaboration for Gaia Platform";
  const pageDescription = "Historic collaboration between IIT Kharagpur and University of Cambridge for the Gaia Platform. Inaugural event of the 2nd phase of the International Software Derby organized by 1 Earth Holdings Inc.";
  const ogDescription = "IIT Kharagpur partners with University of Cambridge for the Gaia Platform. Historic collaboration marks the inaugural event of the 2nd phase of the International Software Derby organized by 1 Earth Holdings Inc.";
  
  // Use current host for meta tags (works with ngrok and production)
  const getBaseUrl = () => {
    if (typeof window !== "undefined") {
      return window.location.origin;
    }
    return "https://gymkhana.iitkgp.ac.in";
  };
  
  const baseUrl = getBaseUrl();
  // Use optimized thumbnail for WhatsApp (under 300KB requirement)
  const pageImage = `${baseUrl}/data/media/images/events/Gaia_Platform_KGP-Cambridge_Collab_thumb.JPEG`;
  const pageUrl = typeof window !== "undefined" ? window.location.href : `${baseUrl}/events/iit-kharagpur-university-cambridge-gaia-platform-collaboration-2025`;
  
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const shareMenuRef = useRef(null);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(pageUrl).then(() => {
      setLinkCopied(true);
      setTimeout(() => {
        setLinkCopied(false);
        setShowShareMenu(false);
      }, 2000);
    }).catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = pageUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setLinkCopied(true);
      setTimeout(() => {
        setLinkCopied(false);
        setShowShareMenu(false);
      }, 2000);
    });
  };

  const handleShare = (platform) => {
    const encodedUrl = encodeURIComponent(pageUrl);
    const encodedTitle = encodeURIComponent(pageTitle);
    const encodedDescription = encodeURIComponent(pageDescription);

    let shareUrl = "";

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
        break;
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${encodedUrl}`;
        break;
      default:
        return;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400");
      setShowShareMenu(false);
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (shareMenuRef.current && !shareMenuRef.current.contains(event.target)) {
        setShowShareMenu(false);
      }
    };

    if (showShareMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showShareMenu]);

  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        
        {/* Open Graph / Facebook / WhatsApp */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:image:secure_url" content={pageImage} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="675" />
        <meta property="og:image:alt" content="IIT Kharagpur - University of Cambridge Collaboration for Gaia Platform" />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:site_name" content="Technology Students' Gymkhana - IIT Kharagpur" />
        <meta property="og:locale" content="en_US" />
        
        {/* WhatsApp specific optimizations */}
        <meta property="og:image:url" content={pageImage} />
        <link rel="image_src" href={pageImage} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:description" content={ogDescription} />
        <meta name="twitter:image" content={pageImage} />
        <meta name="twitter:image:alt" content="IIT Kharagpur - University of Cambridge Collaboration for Gaia Platform" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={pageUrl} />
      </Head>
      
      <div className="gaia-event-container">
        <div className="gaia-event-header">
          <h1 className="gaia-event-title gaia-event-breaking-news">
            GLOBAL BREAKING NEWS!
          </h1>
          <h1 className="gaia-event-title">
            IIT Kharagpur - University of Cambridge, UK Collaboration for Defense of Nature
          </h1>
          <h2 className="gaia-event-subtitle">
            Inaugural Event of the 2nd Phase of the International Software Derby
          </h2>
          <h3 className="gaia-event-subtitle">
            SAVE: Software for Awakening Voice for Nature
          </h3>
          <div className="gaia-event-meta">
            <strong>Date:</strong> 17 November 2025
            <br />
            <strong>Location:</strong> Indian Institute of Technology Kharagpur (IIT Kharagpur)
          </div>
        </div>

        <div className="gaia-event-image-container">
          <AppImage
            src="/data/media/images/events/Gaia_Platform_KGP-Cambridge_Collab.JPEG"
            className="gaia-event-image"
            alt="Gaia Event 2025 - IIT Kharagpur Cambridge Collaboration"
          />
          <div className="gaia-event-image-caption-wrapper">
            <p className="gaia-event-image-caption">
              Fortress of talent : 1 Earth Holdings Inc.&apos;s Tiger Team of solution architects and information alchemists at the inaugural event
            </p>
            <div className="gaia-event-share-wrapper" ref={shareMenuRef}>
              <button
                type="button"
                className="gaia-event-share-button"
                onClick={() => setShowShareMenu(!showShareMenu)}
                aria-label="Share"
              >
                <Share2 size={20} />
              </button>
            {showShareMenu && (
              <div className="gaia-event-share-menu">
                <button
                  type="button"
                  className={`gaia-event-share-item ${linkCopied ? 'gaia-event-share-item-copied' : ''}`}
                  onClick={handleCopyLink}
                  title={linkCopied ? "Link Copied!" : "Copy Link"}
                >
                  {linkCopied ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  )}
                </button>
                <button
                  type="button"
                  className="gaia-event-share-item"
                  onClick={() => handleShare("facebook")}
                  title="Share on Facebook"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className="gaia-event-share-item"
                  onClick={() => handleShare("twitter")}
                  title="Share on X (Twitter)"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className="gaia-event-share-item"
                  onClick={() => handleShare("whatsapp")}
                  title="Share on WhatsApp"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className="gaia-event-share-close"
                  onClick={() => setShowShareMenu(false)}
                  aria-label="Close"
                >
                  <CloseIcon size={18} />
                </button>
              </div>
            )}
            </div>
          </div>
        </div>

        <div className="gaia-event-section">
          <p className="gaia-event-paragraph">
            The Indian Institute of Technology Kharagpur hosted the inaugural
            event of the 2nd phase of the International Software Derby,
            organized by <strong>1 Earth Holdings Inc.</strong>, a Canadian
            biosphere-focused climate startup. The keynote address was delivered
            by
            <strong> Ms. Nandani Jangid</strong>, Gen Z representative,
            Information Alchemist, and proud IIT Kharagpur graduate.
          </p>
        </div>

        <div className="gaia-event-section">
          <h2 className="gaia-event-section-title">Keynote Address</h2>
          <p className="gaia-event-speaker">
            Speech Delivered by Ms. Nandani Jangid
          </p>

          <p className="gaia-event-paragraph">
            1 Earth Holdings Inc. is the first climate startup in the world with
            its own flag - a flag that took our founder two years to design. It
            symbolizes our mission and represents patient Earth more powerfully
            and purposefully than any flag before it.
          </p>

          <p className="gaia-event-paragraph">
            Our initiatives, <strong>The Earth Cup</strong> and{" "}
            <strong>The Gaia Platform</strong>, form a planetary movement for
            climate action and world peace. The Gaia Platform is envisioned as a
            Digital Galápagos, inspired by the evolutionary heritage of the
            Galápagos Islands.
          </p>
        </div>

        <div className="gaia-event-section">
          <h2 className="gaia-event-section-title">
            Historic Collaboration Announcement
          </h2>
          <p className="gaia-event-paragraph">
            On behalf of Gen Z, our Founder, and all current and future
            stakeholders - including IIT Kharagpur - I am proud to announce our
            commitment to establishing a historic collaboration with the{" "}
            <strong>University of Cambridge, UK</strong>, to accelerate the
            launch of the Gaia Platform. A working prototype has already been
            developed under our <span className="gaia-event-highlight">SAVE initiative - Software for Awakening Voice
            for Earth</span>.
          </p>

          <p className="gaia-event-paragraph">
            We hold deep respect for{" "}
            <strong>His Majesty King Charles III</strong>, whom we honor as the
            Redeemer-in-Chief of the Biosphere. We call upon{" "}
            <strong>Prime Minister Narendra Modi</strong>, the
            Catalyzer-in-Chief of the Biosphere, to join hands with the Climate
            King - because we are truly racing against time.
          </p>
        </div>

        <div className="gaia-event-section">
          <h2 className="gaia-event-section-title">
            IIT Kharagpur&apos;s Contribution
          </h2>
          <p className="gaia-event-paragraph">
            I am thrilled to have joined this future-ready startup alongside{" "}
            <strong>21 fellow IIT Kharagpur graduates and students</strong> who
            have pledged themselves fully to the Earth Cup mission. Many more
            are ready to join. We seek the support of everyone who believes they
            can make a difference.
          </p>

          <p className="gaia-event-paragraph">
            Our startup has introduced a pioneering sustainable business model
            integrating the four bottom lines, going beyond People, Planet, and
            Profit. We believe a global biosphere consciousness revolution will
            spark the world&apos;s largest sustainable industry in our
            lifetime—powered by eco-cosmopolitan citizens and consumers.
          </p>
        </div>

        <div className="gaia-event-section">
          <h2 className="gaia-event-section-title">The Gaia Platform Vision</h2>
          <p className="gaia-event-paragraph">
            In Greek mythology, Gaia is the primordial Mother Earth. The Gaia
            Platform will bring this spirit alive by empowering and organizing
            the voice of mothers in defense of nature. A call to action has
            already been released by our Gen Z sister, Raisa Ameen, as part of A
            Sneak Peek of the Earth Cup Documentary.
          </p>

          <p className="gaia-event-paragraph">
            On the Gaia Platform, there will be no &quot;users&quot; or &quot;followers.&quot; We
            are all crew on this spaceship Earth. Everyone will be a{" "}
            <strong>planetarian</strong> - a responsible participant in a global
            purpose economy.
          </p>
        </div>

        <div className="gaia-event-section">
          <h2 className="gaia-event-section-title">Ambitious Goals</h2>
          <p className="gaia-event-paragraph">
            We have a top-secret strategy whereby the Gaia Platform shall be
            able to generate 1 billion or more downloads on a single day. Our
            target is <strong>5 billion planetarians</strong> and
            <strong> 6 billion planet-friendly shoppers</strong> with a
            collective buying power of
            <strong> $25.3 trillion</strong> as of today. God is in the details.
          </p>

          <p className="gaia-event-paragraph">
            We are building a new language of the future - integrating machine
            language, ecolinguistics, and the universal language of soccer,
            loved by 6 billion people.
          </p>

          <p className="gaia-event-quote gaia-event-highlight">
            &quot;Mankind invented the atomic bomb, but no mouse would ever construct
            a mousetrap. Let us hope it is not too late to restore wisdom and
            sanity.&quot; - Albert Einstein
          </p>
        </div>

        <div className="gaia-event-section">
          <h2 className="gaia-event-section-title">Acknowledgments</h2>
          <p className="gaia-event-paragraph">
            We also express our gratitude to{" "}
            <strong>Smt. Mamata Banerjee</strong>, Hon&apos;ble Chief Minister of
            West Bengal, in anticipation of her support for our climate, soccer,
            and media initiatives being launched from this state.
          </p>
        </div>

        <div className="gaia-event-section">
          <p className="gaia-event-paragraph gaia-event-yellow-text">
            During a private meeting with stakeholders, the soft-spoken founder of 1 Earth Holdings Inc. Sammy remarked that Nandani Jangid and her Gen Z sister Raisa Ameen from Canada shall be the Greta Thunberg duo from the Global South. Nandani and Raisa, together as the face of the Earth Cup and the Gaia Platform, will generate astronomical network effects & a positive feedback loop within the global soccer and sports fans congregation towards achieving the goal of 6 billion planet friendly shoppers. The SAVE project is building the Great Attractor.
          </p>
        </div>

        <div className="gaia-event-section">
          <h2 className="gaia-event-section-title">Documentary</h2>
          <p className="gaia-event-paragraph">
            <strong>Link to IIT Kharagpur Inaugural Events Documentary:</strong>
            <br />
            <a
              href="https://www.dropbox.com/scl/fi/3v06ihn00j2cysv22gt65/IIT-Kharagpur-Inaugural-Events-Part-1-to-Part-4-Einstein-Tagore-Spotlight.mp4?rlkey=txs8aqjpj34yeq5z3qlo36u8v&st=2cgnqlsu&dl=0"
              target="_blank"
              rel="noopener noreferrer"
              className="gaia-event-link"
            >
              View Documentary
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
