import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../../../../generated/prisma'; // Adjust path as needed

@Injectable()
export class PublicRegistryService {
  private prisma = new PrismaClient();

  private applyOptions(options?: { pagination?: any; sort?: any }) {
    const query: any = {};
    if (options?.pagination) {
      query.skip = options.pagination.skip ?? undefined;
      query.take = options.pagination.take ?? undefined;
    }

    if (options?.sort) {
      query.orderBy = {
        [options.sort.field]: options.sort.order,
      };
    }

    return query;
  }

  async getAll(pagination?: any, sort?: any) {
    return this.prisma.registryEntity.findMany(
      this.applyOptions({ pagination, sort }),
    );
  }

  async getById(id: string) {
    return this.prisma.registryEntity.findUnique({
      where: { id: id.toString() },
    });
  }

  async getByType(type: string, pagination?: any, sort?: any) {
    return this.prisma.registryEntity.findMany({
      where: { type },
      ...this.applyOptions({ pagination, sort }),
    });
  }

  async getByCategory(category: string, pagination?: any, sort?: any) {
    return this.prisma.registryEntity.findMany({
      where: { category },
      ...this.applyOptions({ pagination, sort }),
    });
  }

  async getByKeyword(keyword: string, pagination?: any, sort?: any) {
    return this.prisma.registryEntity.findMany({
      where: {
        keyword: {
          contains: keyword,
        },
      },
      ...this.applyOptions({ pagination, sort }),
    });
  }

}
