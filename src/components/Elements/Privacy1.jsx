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

      <p style={{ fontSize: "16px", marginBottom: "20px" }}>
        At <strong>ANG Indesign</strong> (referred to as “we,” “us,” or “our”),
        we are deeply committed to protecting the privacy and security of our
        website visitors, clients, and partners. As a professional interior
        design firm based in Delhi, we understand the importance of data privacy
        in all our client engagements. This Privacy Policy explains how we
        collect, use, disclose, and safeguard your information when you visit
        our website at{" "}
        <b>
          {" "}
          <a href="https://angindesign.com/" target="_blank">
            https://angindesign.com
          </a>{" "}
        </b>{" "}
        (the "Site"), or when you engage with us for our interior design,
        project management, or consulting services. We have structured this
        policy to be as transparent and easy to understand as possible, adhering
        to the highest standards of data protection.
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
      <p style={{ marginBottom: "20px" }}>
        By accessing and using our Site or engaging our services, you signify
        your acceptance of this Privacy Policy. If you do not agree with the
        terms outlined herein, please do not use our Site or services.
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
        A. Information You Voluntarily Provide (Direct Data)
      </h3>
      <p>
        We collect this information when you choose to interact with us, such as
        filling out a contact form, requesting a quote, subscribing to a
        newsletter, or communicating with us via email or phone. This may
        include:
      </p>
      <ul style={{ marginLeft: "20px", marginBottom: "15px" }}>
        <li>
          Contact Data: Your name, email address, phone number, and company
          name.
        </li>
        <li>
          Project Data: Information about your interior design project
          requirements, budget, location (e.g., in Delhi), and aesthetic
          preferences.
        </li>
        <li>
          Correspondence Data: Any information you provide in emails, chat
          messages, or service tickets.
        </li>
      </ul>

      <h3 style={{ fontSize: "20px", marginTop: "20px" }}>
        B. Information Collected Automatically (Usage Data)
      </h3>
      <p>
        When you access our Site, we may automatically collect certain
        information sent by your browser or device. This data helps us
        understand how our site is used and identify areas for improvement. This
        may include:
      </p>
      <ul style={{ marginLeft: "20px", marginBottom: "15px" }}>
        <li>
          Log Data: Internet Protocol (IP) address, browser type and version,
          pages visited, the time and date of your visit, the time spent on
          those pages, and other statistics.
        </li>
        <li>
          Device Data: Information about the device you are using, such as the
          operating system, device identifiers, and mobile network information.
        </li>
        <li>
          Geographic Data: General location derived from your IP address (e.g.,
          city and country).
        </li>
      </ul>

      <h3 style={{ fontSize: "20px", marginTop: "20px" }}>
        C. Information Collected via Tracking Technologies
      </h3>
      <p>
        We use cookies, web beacons, and similar tracking technologies to track
        activity on our Site and hold certain information.
      </p>
      <ul style={{ marginLeft: "20px", marginBottom: "20px" }}>
        <li>
          <strong>Cookies:</strong> Small data files stored on your device that
          help us remember your preferences, analyze web traffic, and optimize
          performance.
        </li>
        <li>
          You can instruct your browser to refuse all cookies or to indicate
          when a cookie is being sent. However, if you do not accept cookies,
          you may not be able to use some portions of our Site.
        </li>
      </ul>

      {/* SECTION 3 */}
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
              To provide, operate, and maintain our interior design and project
              management services; to fulfill contracts and service agreements.
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "10px" }}>
              Communication
            </td>
            <td style={{ border: "1px solid #ccc", padding: "10px" }}>
              To respond to your inquiries, questions, and requests; to send you
              administrative notices, updates, or technical alerts regarding our
              services.
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "10px" }}>
              Marketing
            </td>
            <td style={{ border: "1px solid #ccc", padding: "10px" }}>
              To send you newsletters, promotional materials, and information
              about services that may be of interest to you, based on your
              preferences.
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "10px" }}>
              Analytics &amp; Improvement
            </td>
            <td style={{ border: "1px solid #ccc", padding: "10px" }}>
              To monitor and analyze usage and trends to improve the
              functionality, performance, and user experience of our Site and
              services.
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "10px" }}>
              Security &amp; Legal
            </td>
            <td style={{ border: "1px solid #ccc", padding: "10px" }}>
              To detect, prevent, and address technical issues or fraudulent
              activity; to enforce our terms and conditions; and to comply with
              legal obligations.
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
      <p style={{ marginBottom: "15px" }}>
        We do not sell, rent, or trade your personal information to third
        parties. We may disclose your information in the following
        circumstances:
      </p>
      <ul style={{ marginLeft: "20px", marginBottom: "20px" }}>
        <li>
          <strong>Service Providers:</strong> We may share your data with
          trusted third-party vendors and service providers who perform services
          on our behalf, such as site hosting, data analysis, payment
          processing, email delivery, and customer relationship management
          (CRM). These parties are only granted access to the necessary data to
          perform their functions and are contractually obligated to maintain
          confidentiality.
        </li>
        <li>
          <strong>Business Transfers:</strong> If ANG Indesign is involved in a
          merger, acquisition, or asset sale, your Personal Data may be
          transferred. We will provide notice before your Personal Data is
          transferred and becomes subject to a different Privacy Policy.
        </li>
        <li>
          <strong>Legal Requirements:</strong> We may disclose your Personal
          Data in the good faith belief that such action is necessary to: comply
          with a legal obligation (e.g., subpoenas or court orders); protect and
          defend the rights or property of ANG Indesign; prevent or investigate
          possible wrongdoing in connection with the Site or services; protect
          the personal safety of users of the Site or the public.
        </li>
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
        5. Data Privacy for Our Clients’ Projects
      </h2>
      <p style={{ marginBottom: "15px" }}>
        This section is specific to our role as an Interior Design Firm. When we
        engage with you on a Project, we may be entrusted with sensitive
        information, including:
      </p>
      <ul style={{ marginLeft: "20px", marginBottom: "15px" }}>
        <li>Floor plans, utility layouts, and photographs of your property.</li>
        <li>Financial details related to procurement and budgeting.</li>
        <li>Personal aesthetic preferences and lifestyle requirements.</li>
      </ul>
      <p style={{ marginBottom: "15px" }}>
        <strong>Our Commitment:</strong>
      </p>
      <ul style={{ marginLeft: "20px", marginBottom: "20px" }}>
        <li>
          <strong>Data Minimization:</strong> We only request access to the data
          strictly necessary to complete the contracted design work.
        </li>
        <li>
          <strong>Confidentiality:</strong> All client data and Project details
          are treated as highly confidential and are protected by strict
          internal access controls.
        </li>
        <li>
          <strong>Deletion:</strong> Upon project completion or termination of
          services, we securely delete or archive confidential Project data in
          accordance with legal retention requirements.
        </li>
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
      <p style={{ marginBottom: "20px" }}>
        The security of your data is paramount to us. We implement commercially
        acceptable and appropriate technical and organizational measures to
        protect your Personal Data from unauthorized access, disclosure,
        alteration, and destruction. However, no method of transmission over the
        Internet or method of electronic storage is 100% secure. While we strive
        to use all commercially viable means to protect your Personal Data, we
        cannot guarantee its absolute security.
      </p>

      {/* SECTION 7 */}
      <h2
        style={{
          marginTop: "40px",
          marginBottom: "20px",
          fontSize: "26px",
          color: "#000",
        }}
      >
        7. Data Retention
      </h2>
      <p style={{ marginBottom: "20px" }}>
        We will retain your Personal Data only for as long as is necessary for
        the purposes set out in this Privacy Policy, including retaining data to
        comply with our legal obligations (e.g., if we are required to retain
        your data to comply with applicable laws), resolve disputes, and enforce
        our legal agreements and policies.
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
      <p style={{ marginBottom: "15px" }}>
        You may have specific rights regarding your data based on your location.
        We aim to take reasonable steps to allow you to correct, amend, delete,
        or limit the use of your Personal Data. These rights may include:
      </p>
      <ul style={{ marginLeft: "20px", marginBottom: "20px" }}>
        <li>
          The <strong>Right to Access:</strong> the right to request copies of
          your Personal Data.
        </li>
        <li>
          The <strong>Right to Rectification:</strong> the right to request that
          we correct any information you believe is inaccurate or incomplete.
        </li>
        <li>
          The <strong>Right to Erasure (Right to Be Forgotten):</strong> the
          right to request that we erase your Personal Data, under certain
          conditions.
        </li>
      </ul>
      <p style={{ marginBottom: "20px" }}>
        To exercise any of these rights, please contact us using the contact
        details provided below.
      </p>

      {/* SECTION 9 */}
      <h2
        style={{
          marginTop: "40px",
          marginBottom: "20px",
          fontSize: "26px",
          color: "#000",
        }}
      >
        9. Children’s Privacy
      </h2>
      <p style={{ marginBottom: "20px" }}>
        Our Site and services are not intended for use by individuals under the
        age of 18 ("Children"). We do not knowingly collect personally
        identifiable information from anyone under the age of 18.
      </p>

      {/* SECTION 10 */}
      <h2
        style={{
          marginTop: "40px",
          marginBottom: "20px",
          fontSize: "26px",
          color: "#000",
        }}
      >
        10. Changes to This Privacy Policy
      </h2>
      <p style={{ marginBottom: "20px" }}>
        We may update our Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page and
        updating the "Last Updated" date at the top of this document.
      </p>

      {/* SECTION 11 */}
      <h2
        style={{
          marginTop: "40px",
          marginBottom: "20px",
          fontSize: "26px",
          color: "#000",
        }}
      >
        11. Contact Us
      </h2>
      <p style={{ marginBottom: "15px" }}>
        If you have any questions about this Privacy Policy, your data, or the
        practices of ANG Indesign, please contact us:
      </p>
      <p style={{ marginBottom: "15px" }}>
        By Email: Info@angindesign.com <br />
        By Visiting our Contact Page on the Site <br />
        By Phone: (+91) 75309 19656 <br />
      </p>

      <p style={{ marginBottom: "20px", fontWeight: "600" }}>
        Your Rights, Your Control
      </p>
      <p style={{ marginBottom: "15px" }}>
        At ANG Indesign, we believe you should always have control over your
        data. If you wish to exercise any of your data protection rights
        (including access, correction, deletion, or restriction of processing),
        or if you simply have a question about how we safeguard your
        information:
      </p>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "30px",
        }}
      >
        <tbody>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "10px" }}>
              Action
            </td>
            <td style={{ border: "1px solid #ccc", padding: "10px" }}>
              Contact Method
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "10px" }}>
              Exercise Your Rights
            </td>
            <td style={{ border: "1px solid #ccc", padding: "10px" }}>
              Email us directly at: Info@angindesign.com
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "10px" }}>
              Request Data Access
            </td>
            <td style={{ border: "1px solid #ccc", padding: "10px" }}>
              Subject Line: Data Rights Request
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "10px" }}>
              Discuss Security
            </td>
            <td style={{ border: "1px solid #ccc", padding: "10px" }}>
              Call us at: (+91) 75309 19656
            </td>
          </tr>
        </tbody>
      </table>

      <p style={{ marginBottom: "20px" }}>
        We commit to responding to all legitimate requests within 30 calendar
        days. Your privacy is not just a policy — it's a commitment to building
        a transparent and trustworthy partnership.
      </p>
    </div>
  );
};

export default Privacy1;
