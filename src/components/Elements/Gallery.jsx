import React, { useEffect, useState } from "react";
import axios from "axios";
import "./gallery.css";

const bgimg1 = require("./../../images/background/cross-line.png");


const Gallery1 = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Pagination states
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setLoading(true);

        const res = await axios.get(`${API_URL}/gallery?page=${page}&limit=12`);

        const fetchedItems = [];

        res.data.data.forEach((item) => {
          // IMAGES array
          item.images.forEach((file) => {
            const isVideo = file.endsWith(".mp4") || file.includes("/video/");

            fetchedItems.push({
              type: isVideo ? "video" : "image",
              src: file,
            });
          });

          // VIDEOS array
          item.videos.forEach((v) => {
            fetchedItems.push({
              type: "video",
              src: v,
            });
          });
        });

        setGalleryItems(fetchedItems);
        setTotalPages(res.data.pagination.totalPages);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching gallery:", error);
        setLoading(false);
      }
    };

    fetchGallery();
  }, [page]);

  if (loading)
    return (
      <div className="text-center py-5">
        <h4>Loading gallery...</h4>
      </div>
    );

  return (
    <section className="gallery-section py-5">
      <div className="container">
        <div className="masonry">
          {galleryItems.length > 0 ? (
            galleryItems.map((item, index) => (
              <div key={index} className="masonry-item">
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={`gallery-${index}`}
                    className="img-fluid rounded shadow-sm"
                  />
                ) : (
                  <video
                    src={item.src}
                    controls
                    className="img-fluid rounded shadow-sm"
                  />
                )}
              </div>
            ))
          ) : (
            <p className="text-center">No gallery items available.</p>
          )}
        </div>

        {/* Pagination */}
        <div className="text-center p-t30">
          <div
            className="pagination-wrapper"
            style={{ backgroundImage: `url(${bgimg1})` }}
          >
            <button
              className="site-button-secondry btn-half m-r10"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              <span>Previous</span>
            </button>

            <span className="font-weight-bold mx-3">
              Page {page} of {totalPages}
            </span>

            <button
              className="site-button-secondry btn-half m-l10"
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
            >
              <span>Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery1;
