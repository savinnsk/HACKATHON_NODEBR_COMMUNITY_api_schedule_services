import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "@shared/errors/AppError";

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;
  // from header request endpoint
  if (!authHeader) {
    throw new AppError("Token missing");
  }

  // [0] = bearer
  // [1] = jwt
  const [, token] = authHeader.split(" ");

  // verify token is valid

  try {
    const decoded = verify(
      token,
      // secret key
      "9eb71ab7420eb452a22787ca4fab501b"
    );

    console.log(decoded);
  } catch (err) {
    throw new AppError("invalid token");
  }
}
