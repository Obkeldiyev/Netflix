import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token: any = req.headers?.token;

    if (!token) {
      return res
        .status(401)
        .send({ message: 'Access token is missing or invalid' });
    }

    const user: any = jwt.verify(token, process.env.SECRET_KEY);

    if (!user) {
      return res
        .status(404)
        .send({ message: `Invalid token, please check your data again` });
    }

    req['user'] = user;

    next();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return res.status(403).send({ message: 'Invalid or expired token' });
  }
};
