import type { NextApiRequest, NextApiResponse } from 'next';

// This handler function will set the preview data and redirect to the homepage
export default  function preview(req: NextApiRequest, res: NextApiResponse) {
    // Set preview data. The parameter here can be an object to pass additional information if needed.
    res.setPreviewData({});

    // Redirect to the homepage
    res.writeHead(307, { location: '/' });
    res.end();
}
