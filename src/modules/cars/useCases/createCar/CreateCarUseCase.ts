import { inject, injectable } from "tsyringe";

import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";

@injectable()
class CreateCarUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) {}

  async execute({
    name,
    description,
    brand,
    daily_rate,
    license_plate,
    fine_amount,
    category_id,
  }: ICreateCarDTO): Promise<void> {
    this.carsRepository.create({
      name,
      description,
      brand,
      daily_rate,
      license_plate,
      fine_amount,
      category_id,
    });
  }
}

export { CreateCarUseCase };
