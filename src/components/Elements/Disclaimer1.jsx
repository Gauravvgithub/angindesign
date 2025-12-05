import React from "react";

const Disclaimer1 = () => {
  return (
    <div style={{ padding: "40px 0" }}>
      <div className="container">
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "700",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Disclaimer for ANG Indesign
        </h1>

        <p style={{ fontSize: "16px", lineHeight: "1.7" }}>
          <strong>Last Updated:</strong> 05/12/2025
        </p>

        <p style={{ fontSize: "16px", lineHeight: "1.7", marginTop: "20px" }}>
          The information provided by <strong>ANG Indesign</strong> ("we," "us,"
          or "our") on <strong>https://angindesign.com/</strong> (the "Site") is
          for general informational and educational purposes only. All
          information on the Site is provided in good faith; however, we make no
          representation or warranty of any kind, express or implied, regarding
          the accuracy, adequacy, validity, reliability, availability, or
          completeness of any information on the Site.
        </p>

        <p style={{ fontSize: "16px", lineHeight: "1.7" }}>
          Under no circumstance shall we have any liability to you for any loss
          or damage of any kind incurred as a result of the use of the Site or
          reliance on any information provided on the Site. Your use of the Site
          and reliance on any information is solely at your own risk.
        </p>

        {/* Section 1 */}
        <h2 style={{ fontSize: "26px", fontWeight: "700", marginTop: "40px" }}>
          1. Professional Interior Design Disclaimer
        </h2>

        <p style={{ fontSize: "16px", lineHeight: "1.7" }}>
          The content published on the ANG Indesign Site, including blog
          articles, design guides, style recommendations, estimated pricing, and
          portfolio descriptions, represents the opinions and experience of our
          design professionals.
        </p>

        <h3 style={{ fontSize: "22px", fontWeight: "600", marginTop: "20px" }}>
          Not Professional Advice
        </h3>

        <p style={{ fontSize: "16px", lineHeight: "1.7" }}>
          The information is for general inspiration and education only and does
          not constitute professional design, architectural, financial, or legal
          advice. You should consult licensed professionals before making
          decisions based on the content on our Site.
        </p>

        <h3 style={{ fontSize: "22px", fontWeight: "600", marginTop: "20px" }}>
          Aesthetic Subjectivity
        </h3>

        <p style={{ fontSize: "16px", lineHeight: "1.7" }}>
          Interior design is subjective. ANG Indesign is not responsible for any
          dissatisfaction arising from personal aesthetic preferences based on
          general advice found on this Site.
        </p>

        <h3 style={{ fontSize: "22px", fontWeight: "600", marginTop: "20px" }}>
          Estimates Are Non-Binding
        </h3>

        <p style={{ fontSize: "16px", lineHeight: "1.7" }}>
          Any pricing estimates or timelines on this Site may vary based on
          actual site conditions, vendor costs, material availability, and
          project scope as defined in official agreements.
        </p>

        {/* Section 2 */}
        <h2 style={{ fontSize: "26px", fontWeight: "700", marginTop: "40px" }}>
          2. External Links Disclaimer (Third-Party Content)
        </h2>

        <p style={{ fontSize: "16px", lineHeight: "1.7" }}>
          The Site may contain links to external websites or third-party
          content. Such links are not monitored or verified by us for accuracy,
          reliability, or completeness.
        </p>

        <ul style={{ marginTop: "15px", fontSize: "16px", lineHeight: "1.7" }}>
          <li>
            <strong>No Endorsement:</strong> We do not endorse or guarantee any
            third-party information.
          </li>
          <li>
            <strong>Not Responsible for Third Parties:</strong> We are not
            liable for any actions of external vendors, suppliers, or
            advertisers.
          </li>
          <li>
            <strong>Supplier Reliance:</strong> Material warranties and
            workmanship issues fall under the responsibility of respective
            third-party providers.
          </li>
        </ul>

        {/* Section 3 */}
        <h2 style={{ fontSize: "26px", fontWeight: "700", marginTop: "40px" }}>
          3. Errors and Omissions Disclaimer
        </h2>

        <p style={{ fontSize: "16px", lineHeight: "1.7" }}>
          While we make every effort to ensure the accuracy of the information
          on our Site, ANG Indesign is not responsible for any errors or
          omissions. Project results may vary due to site conditions, budget
          adjustments, and material availability.
        </p>

        {/* Section 4 */}
        <h2 style={{ fontSize: "26px", fontWeight: "700", marginTop: "40px" }}>
          4. Fair Use Disclaimer
        </h2>

        <p style={{ fontSize: "16px", lineHeight: "1.7" }}>
          Our Site may use copyrighted material under “fair use” as permitted by
          Section 52 of the Indian Copyright Act, 1957. If you wish to use
          copyrighted material beyond fair use, you must obtain permission from
          the copyright owner.
        </p>

        {/* Section 5 */}
        <h2 style={{ fontSize: "26px", fontWeight: "700", marginTop: "40px" }}>
          5. Contact Information
        </h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
            fontSize: "16px",
          }}
        >
          <tbody>
            <tr>
              <td
                style={{
                  padding: "12px",
                  border: "1px solid #ddd",
                  fontWeight: "600",
                }}
              >
                Email
              </td>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>
                Info@angindesign.com
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "12px",
                  border: "1px solid #ddd",
                  fontWeight: "600",
                }}
              >
                Phone
              </td>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>
                +91 99102 49463
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "12px",
                  border: "1px solid #ddd",
                  fontWeight: "600",
                }}
              >
                Address
              </td>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>
                Dwarka Delhi, India - 110075
              </td>
            </tr>
          </tbody>
        </table>

        <p style={{ fontSize: "16px", lineHeight: "1.7", marginTop: "20px" }}>
          If you require more information or have questions about our
          Disclaimer, please contact us using the details above.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer1;
