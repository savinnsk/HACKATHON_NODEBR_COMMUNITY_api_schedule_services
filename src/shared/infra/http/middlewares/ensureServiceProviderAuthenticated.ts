import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import { ServiceProvidersRepository } from "@modules/service_providers/infra/repositories/ServiceProvidersRepository";
import { UsersRepository } from "@modules/users/infra/repositories/UsersRepository";
import { AppError } from "@shared/errors/AppError";

import auth from "../../../../config/auth.js";

interface IPayload {
  sub: string;
}

export async function ensureServiceProviderAuthenticated(
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
    const { sub: user_id } = verify(
      token,
      // secret key
      auth.service_provider_secret_token
    ) as IPayload;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new Error("Usuário não existe");
    }

    if (!user.service_provider)
      throw new Error("Usuário não é prestador de serviço");

    request.service_provider = {
      id: user_id,
    };

    next();
  } catch (err) {
    throw new AppError("Token inválido");
  }
}
