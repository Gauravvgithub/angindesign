import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const servicesApi = createApi({
  reducerPath: "servicesApi",

  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),

  endpoints: (builder) => ({
    // ---------------- SERVICES (Same as Projects) ---------------
    getServices: builder.query({
      query: ({ page, limit }) => `/service?page=${page}&limit=${limit}`,
    }),

    // ---------------- PROJECTS (Uses Same Endpoint) ---------------
    getProjects: builder.query({
      query: ({ page, limit }) => `/service?page=${page}&limit=${limit}`,
    }),

    // ---------------- BLOGS -----------------
    getRecentBlogs: builder.query({
      query: () => `/blogs?page=1&limit=3`,
      transformResponse: (response) => {
        const blogs = response.blogs || response;

        return blogs
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 3);
      },
    }),

    // ---------------- GALLERY -----------------
    getGallery: builder.query({
      query: ({ page, limit }) => `/gallery?page=${page}&limit=${limit}`,

      transformResponse: (response) => {
        const items = [];

        response.data.forEach((item) => {
          // IMAGES
          item.images.forEach((file) => {
            const isVideo = file.endsWith(".mp4") || file.includes("/video/");
            items.push({
              type: isVideo ? "video" : "image",
              src: file,
            });
          });

          // VIDEOS
          item.videos.forEach((v) => {
            items.push({
              type: "video",
              src: v,
            });
          });
        });

        return {
          items,
          totalPages: response.pagination.totalPages,
        };
      },
    }),

    // -------------------- Blogs -----------------------

    getBlogs: builder.query({
      query: ({ page, limit }) => `/blogs?page=${page}&limit=${limit}`,
      transformResponse: (response) => {
        // Handle both possible response shapes
        const blogs = Array.isArray(response)
          ? response
          : Array.isArray(response.blogs)
          ? response.blogs
          : [];

        const totalPages =
          response.totalPages || response.pagination?.totalPages || 1;

        return { blogs, totalPages };
      },
    }),

    // ------------------- Blogs by Id --------------------

    getBlogById: builder.query({
      query: (slug) => `/blogs/getBlogById/${slug}`,
    }),
  }),
});

export const {
  useGetServicesQuery,
  useGetProjectsQuery,
  useGetRecentBlogsQuery,
  useGetGalleryQuery,
  useGetBlogsQuery,
  useGetBlogByIdQuery,
} = servicesApi;
