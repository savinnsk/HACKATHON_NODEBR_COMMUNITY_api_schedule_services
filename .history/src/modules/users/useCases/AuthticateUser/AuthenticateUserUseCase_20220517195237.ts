interface IRequest {
  email: string;
  senha: string;
}

class AuthenticateUserUseCase {
  async execute({ email, senha }: IRequest);
}

export { AuthenticateUserUseCase };
