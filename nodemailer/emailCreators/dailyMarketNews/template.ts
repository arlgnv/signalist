const TEMPLATE = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="x-apple-disable-message-reformatting" />
    <title>Market news summary today</title>
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
                  alt="Signalist logo"
                  width="150"
                  style="max-width: 100%; height: auto"
                />
              </td>
            </tr>
            <tr>
              <td style="padding: 40px">
                <h1
                  style="
                    margin: 0 0 20px 0;
                    font-size: 24px;
                    font-weight: 600;
                    color: #fafafa;
                    line-height: 1.2;
                  "
                >
                  Market news summary today
                </h1>
                <p
                  style="
                    margin: 0 0 30px 0;
                    font-size: 14px;
                    line-height: 1.4;
                    color: #a1a1a1;
                  "
                >
                  {{date}}
                </p>
                <ul
                  style="
                    margin: 0 0 30px 0;
                    padding-left: 20px;
                    font-size: 14px;
                    line-height: 1.6;
                    color: #fafafa;
                  "
                >
                  {{news}}
                </ul>
                <div style="text-align: center">
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
                      Visit Signalist
                    </a
                  >
                </div>
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
