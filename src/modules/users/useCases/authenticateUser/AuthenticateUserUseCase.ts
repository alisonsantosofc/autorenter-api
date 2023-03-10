import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    // verify user email
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Email or password incorrect.");
    }

    // verify user password
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Email or password incorrect.");
    }

    // create user token
    const token = sign({}, "c8cc9e8fae5cb615187526089f12b9b9", {
      subject: user.id,
      expiresIn: "1d",
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
