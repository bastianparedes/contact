import fs from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

const filePath = path.resolve('public/files/cv.pdf');
const imageBuffer = fs.readFileSync(filePath);

const Cv = (req: NextApiRequest, res: NextApiResponse): void => {
  if (req.method === 'GET') {
    res.setHeader('content-type', 'application/pdf');
    res.status(200);
    res.send(imageBuffer);
    res.end();
  }
};

export default Cv;
