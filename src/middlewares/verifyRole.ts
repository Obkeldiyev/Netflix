import { Request, Response, NextFunction } from 'express';

export const verifyRole =
  (role) => (req: Request | any, res: Response, next: NextFunction) => {
    try {
      const user = req.user;

      if (!user) {
        return res.status(401).send({ message: 'Unauthorized' });
      }
      if (!role.includes(user.role)) {
        return res.status(403).send({ message: 'Insufficient permissions' });
      }

      next();
    } catch (error) {
      return res.status(error.status || 500).send({ message: error.message });
    }
  };
