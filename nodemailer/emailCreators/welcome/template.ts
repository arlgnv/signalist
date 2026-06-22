const TEMPLATE = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="x-apple-disable-message-reformatting" />
    <title>Welcome to Signalist</title>
    <!--[if mso]>
      <noscript>
        <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG />
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
    <![endif]-->
  </head>
  <body
    style="
      margin: 0;
      padding: 0;
      background-color: #0a0a0a;
      font-family:
        -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto,
        sans-serif;
    "
  >
    <table
      role="presentation"
      cellspacing="0"
      cellpadding="0"
      border="0"
      width="100%"
      style="background-color: #0a0a0a"
    >
      <tr>
        <td
          align="center"
          style="padding: 40px 20px"
        >
          <table
            role="presentation"
            cellspacing="0"
            cellpadding="0"
            border="0"
            width="100%"
            style="
              max-width: 600px;
              background-color: #171717;
              border-radius: 8px;
            "
          >
            <tr>
              <td
                align="left"
                style="padding: 40px 40px 20px 40px"
              >
                <img
                  src="https://ik.imagekit.io/a6fkjou7d/logo.png?updatedAt=1756378431634"
                  alt="Signalist Logo"
                  width="150"
                  style="max-width: 100%; height: auto; border-radius: 12px;"
                />
              </td>
            </tr>
            <tr>
              <td
                align="center"
                style="padding: 40px 40px 0px 40px"
              >
                <img
                  src="https://ik.imagekit.io/a6fkjou7d/dashboard-preview.png?updatedAt=1756378548102"
                  alt="Signalist Dashboard Preview"
                  width="100%"
                  style="
                    max-width: 520px;
                    width: 100%;
                    height: auto;
                  "
                />
              </td>
            </tr>
            <tr>
              <td style="padding: 40px 40px 40px 40px">
                <h1
                  style="
                    margin: 0 0 30px 0;
                    font-size: 24px;
                    font-weight: 600;
                    color: #fafafa;
                    line-height: 1.2;
                  "
                >
                  Welcome aboard {{name}}
                </h1>
                {{intro}}
                <p
                  style="
                    margin: 0 0 15px 0;
                    font-size: 16px;
                    line-height: 1.6;
                    color: #fafafa;
                    font-weight: 600;
                  "
                >
                  Here's what you can do right now:
                </p>
                <ul
                  style="
                    margin: 0 0 30px 0;
                    padding-left: 20px;
                    font-size: 16px;
                    line-height: 1.6;
                    color: #fafafa;
                  "
                >
                  <li style="margin-bottom: 12px">
                    Explore the dashboard for trends
                  </li>
                  <li style="margin-bottom: 12px">Read latest market news</li>
                  <li>Track real-time individual stock prices</li>
                </ul>
                <p
                  style="
                    margin: 0 0 40px 0;
                    font-size: 16px;
                    line-height: 1.6;
                    color: #fafafa;
                  "
                >
                  We'll keep you informed with timely updates, insights, and
                  alerts — so you can focus on making the right calls.
                </p>
                <table
                  role="presentation"
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                  style="margin: 0 0 40px 0; width: 100%"
                >
                  <tr>
                    <td align="center">
                      <a
                        href="https://signalist-topaz.vercel.app"
                        style="
                          color: #fafafa;
                          text-decoration: none;
                          font-size: 16px;
                          font-weight: 500;
                          line-height: 1;
                        "
                      >
                        Go to Dashboard
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;

export default TEMPLATE;
