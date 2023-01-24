# Cadastro de carros

**RF**
- Deve ser possível cadastrar um novo carro.
- Deve ser possível listar todas as categorias.

**RN**
- Não deve ser possível cadastrar um carro com uma placa já existente.
- Não deve ser possível alterar a placa de um carro já cadastrado.
- O carro deve ser cadastrado com disponibilidade por padrão.
- Apenas usuários administradores devem ter permissão para realizar o cadastro de carros.

# Listagem de carros

**RF**
- Deve ser possível listar todos os carros disponíveis.
- Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
- Deve ser possível listar todos os carros disponíveis pelo nome da marca.
- Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**RN**
- O usuário não precisa estar logado no sistema.

# Cadastro de especificação de um carro

**RF**
- Deve ser possível cadastrar uma especificação para um carro.
- Deve ser possível listar todas as especificações existentes.
- Deve ser possível listar todos os carros.

**RN**
- Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
- Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
- Apenas usuários administradores devem ter permissão para realizar o cadastro de especificações.

# Cadastro de imagens de um carro

**RF**
- Deve ser possível cadastrar a imagem de um carro.
- Deve ser possível listar todos os carros.

**RNF**
- Utilizar o multer para upload dos arquivos.

**RN**
- O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
- Apenas usuários administradores devem ter permissão para realizar o cadastro de imagens.

# Aluguel de carros

**RF**
- Deve ser possível realizar um aluguel de um carro.

**RN**
- O aluguel deve ter duração miníma de 24 horas.
- Não deve ser possível realizar o aluguel caso já exista um aberto para o mesmo usuário.
- Não deve ser possível realizar o aluguel caso já exista um aberto para o mesmo carro.