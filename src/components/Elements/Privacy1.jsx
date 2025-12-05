import React from "react";

const Privacy1 = () => {
  return (
    <div
      style={{
        padding: "40px 20px",
        maxWidth: "1000px",
        margin: "0 auto",
        lineHeight: "1.8",
      }}
    >
      {/* PAGE TITLE */}
      <h1
        style={{
          fontSize: "32px",
          fontWeight: "700",
          color: "#222",
          marginBottom: "25px",
          textAlign: "center",
        }}
      >
        Privacy Policy for ANG Indesign
      </h1>

      <p style={{ fontSize: "15px", marginBottom: "25px" }}>
        <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
      </p>

      <p style={{ fontSize: "16px" }}>
        At <strong>ANG Indesign</strong> (“we,” “us,” or “our”), we are deeply
        committed to safeguarding the privacy and security of our website
        visitors, clients, and partners. This Privacy Policy outlines how we
        collect, use, disclose, and protect your information when you visit our
        website{" "}
        <a href="https://angindesign.com" target="_blank">
          https://angindesign.com
        </a>{" "}
        (the “Site”) or engage with our interior design services.
      </p>

      {/* SECTION 1 */}
      <h2
        style={{
          marginTop: "40px",
          marginBottom: "15px",
          fontSize: "26px",
          color: "#000",
        }}
      >
        1. Acceptance of Terms
      </h2>
      <p>
        By accessing or using our Site or services, you agree to the practices
        described in this Privacy Policy. If you do not agree, please do not use
        our Site.
      </p>

      {/* SECTION 2 */}
      <h2
        style={{
          marginTop: "40px",
          marginBottom: "15px",
          fontSize: "26px",
          color: "#000",
        }}
      >
        2. Information We Collect
      </h2>

      <h3 style={{ fontSize: "20px", marginTop: "20px" }}>
        A. Information You Voluntarily Provide
      </h3>
      <p>This includes details you submit such as:</p>

      <ul style={{ marginLeft: "20px" }}>
        <li>Name, email, phone number, and company name</li>
        <li>Project details, budget, interior design preferences</li>
        <li>Messages sent through email, calls, or contact forms</li>
      </ul>

      <h3 style={{ fontSize: "20px", marginTop: "20px" }}>
        B. Information Collected Automatically
      </h3>
      <p>We automatically collect browser or device data, such as:</p>

      <ul style={{ marginLeft: "20px" }}>
        <li>IP address, browser type, pages visited</li>
        <li>Device and operating system information</li>
        <li>Approximate location (city/country)</li>
      </ul>

      <h3 style={{ fontSize: "20px", marginTop: "20px" }}>
        C. Tracking Technologies (Cookies)
      </h3>
      <p>
        Cookies help improve your browsing experience. You may disable cookies,
        but some features may not function properly.
      </p>

      {/* SECTION 3 TABLE */}
      <h2
        style={{
          marginTop: "40px",
          marginBottom: "20px",
          fontSize: "26px",
          color: "#000",
        }}
      >
        3. How We Use Your Information
      </h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "25px",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                backgroundColor: "#f8f8f8",
              }}
            >
              Purpose
            </th>
            <th
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                backgroundColor: "#f8f8f8",
              }}
            >
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "10px" }}>
              Service Provision
            </td>
            <td style={{ border: "1px solid #ccc", padding: "10px" }}>
              To deliver and manage interior design services and projects.
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "10px" }}>
              Communication
            </td>
            <td style={{ border: "1px solid #ccc", padding: "10px" }}>
              To respond to inquiries and provide updates.
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "10px" }}>
              Marketing
            </td>
            <td style={{ border: "1px solid #ccc", padding: "10px" }}>
              To send newsletters and promotional offers.
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "10px" }}>
              Analytics
            </td>
            <td style={{ border: "1px solid #ccc", padding: "10px" }}>
              To improve website performance and user experience.
            </td>
          </tr>
        </tbody>
      </table>

      {/* SECTION 4 */}
      <h2
        style={{
          marginTop: "40px",
          marginBottom: "20px",
          fontSize: "26px",
          color: "#000",
        }}
      >
        4. Disclosure of Your Information
      </h2>
      <p>We may share your data with:</p>

      <ul style={{ marginLeft: "20px" }}>
        <li>Trusted service providers</li>
        <li>Legal authorities (if required)</li>
        <li>Business partners in case of mergers or transfers</li>
      </ul>

      {/* SECTION 5 */}
      <h2
        style={{
          marginTop: "40px",
          marginBottom: "20px",
          fontSize: "26px",
          color: "#000",
        }}
      >
        5. Client Project Data Privacy
      </h2>

      <p>
        As part of interior design projects, we may access sensitive details
        such as layouts, budgets, and property photos. All client data is:
      </p>

      <ul style={{ marginLeft: "20px" }}>
        <li>Strictly confidential</li>
        <li>Used only for project purposes</li>
        <li>Deleted or archived after project completion</li>
      </ul>

      {/* SECTION 6 */}
      <h2
        style={{
          marginTop: "40px",
          marginBottom: "20px",
          fontSize: "26px",
          color: "#000",
        }}
      >
        6. Security of Data
      </h2>
      <p>
        We implement strong security measures; however, no digital system is
        100% secure. We take all reasonable precautions to protect your data.
      </p>

      {/* SECTION 8 */}
      <h2
        style={{
          marginTop: "40px",
          marginBottom: "20px",
          fontSize: "26px",
          color: "#000",
        }}
      >
        8. Your Data Protection Rights
      </h2>

      <ul style={{ marginLeft: "20px" }}>
        <li>Right to access your data</li>
        <li>Right to request corrections</li>
        <li>Right to request deletion</li>
      </ul>

      {/* CONTACT TABLE */}
      <h2
        style={{
          marginTop: "40px",
          marginBottom: "20px",
          fontSize: "26px",
          color: "#000",
        }}
      >
        Contact Us
      </h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "30px",
        }}
      >
        <tbody>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "10px" }}>Email</td>
            <td style={{ border: "1px solid #ccc", padding: "10px" }}>
              Info@angindesign.com
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "10px" }}>Phone</td>
            <td style={{ border: "1px solid #ccc", padding: "10px" }}>
              +91 99102 49463
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Privacy1;
