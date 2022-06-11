import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}
/**
 * [x] - Alterar o retorno de erro
 * [x] - Definir o tipo de retorno
 * [x] - Acessa o repositório
 * [x] - Retorna o resultado = void
 */

class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  execute({ description, name }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category already exists");
    }

    this.categoriesRepository.create({ name, description });
  }
}
export { CreateCategoryService };
