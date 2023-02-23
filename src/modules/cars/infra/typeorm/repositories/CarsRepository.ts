import { Repository } from "typeorm";

import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { getPostgresDS } from "@shared/infra/typeorm";

import { Car } from "../entities/Car";

class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = getPostgresDS().getRepository(Car);
  }

  async create({
    name,
    description,
    brand,
    daily_rate,
    license_plate,
    fine_amount,
    category_id,
    available,
    specifications,
    id,
  }: ICreateCarDTO): Promise<Car> {
    const car = this.repository.create({
      name,
      description,
      brand,
      fine_amount,
      daily_rate,
      license_plate,
      category_id,
      available: available === false ? available : true,
      specifications,
      id,
    });

    await this.repository.save(car);

    return car;
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    const car = await this.repository.findOne({
      where: {
        license_plate,
      },
    });

    return car;
  }

  async findById(id: string): Promise<Car> {
    const car = await this.repository.findOne({
      where: {
        id,
      },
    });

    return car;
  }

  async findAvailable(
    name?: string,
    brand?: string,
    category_id?: string
  ): Promise<Car[]> {
    const carsQuery = this.repository
      .createQueryBuilder("car")
      .where("available = :available", { available: true });

    if (name) {
      carsQuery.andWhere("car.name = :name", { name });
    }

    if (brand) {
      carsQuery.andWhere("car.brand = :brand", { brand });
    }

    if (category_id) {
      carsQuery.andWhere("car.category_id = :category_id", { category_id });
    }

    const cars = await carsQuery.getMany();

    return cars;
  }
}

export { CarsRepository };
