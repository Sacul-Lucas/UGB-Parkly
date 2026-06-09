# 🚗 UGB Parkly

Sistema de gerenciamento de estacionamento desenvolvido como atividade avaliativa da disciplina **Ferramentas de Desenvolvimento Web**.

O projeto consiste no desenvolvimento do **frontend administrativo web** de um sistema de estacionamento inteligente, consumindo uma API previamente disponibilizada. O sistema permite o gerenciamento de usuários, veículos, vagas e movimentações do estacionamento através de uma interface intuitiva e responsiva.

---

## 📋 Sobre o Projeto

O **UGB Parkly** foi criado com o objetivo de facilitar o controle e monitoramento do estacionamento institucional da UGB.

A aplicação oferece funcionalidades para:

* Gerenciar colaboradores e administradores;
* Cadastrar e consultar veículos;
* Registrar entradas e saídas de veículos;
* Visualizar a ocupação atual do estacionamento;
* Monitorar o fluxo de movimentação;
* Gerar relatórios e indicadores operacionais.

---

## 🎯 Objetivos

* Desenvolver uma interface web administrativa moderna e responsiva;
* Consumir dados de uma API REST já existente;
* Aplicar conceitos de HTML, CSS e JavaScript;
* Exibir informações em tempo real sobre o estacionamento;
* Fornecer relatórios e dashboards para apoio à gestão.

---

## 🛠️ Tecnologias Utilizadas

### Frontend

* HTML5
* CSS3
* JavaScript (ES6+)

### Integração

* Consumo de API REST utilizando Fetch API

### Ferramentas

* Git
* GitHub
* Visual Studio Code

---

## 📂 Estrutura do Sistema

### Dashboard

Tela principal do sistema contendo indicadores operacionais do estacionamento.

#### Funcionalidades

* Visualização de vagas disponíveis;
* Visualização de vagas ocupadas;
* Total de entradas do dia;
* Total de saídas do dia;
* Situação atual do estacionamento;
* Movimentações recentes.

---

### Cadastro de Usuários

Responsável pelo gerenciamento dos usuários do sistema.

#### Tipos de Usuário

##### Administrador

Possui acesso total ao sistema.

Permissões:

* Cadastrar colaboradores;
* Cadastrar administradores;
* Gerenciar veículos;
* Registrar entradas e saídas;
* Visualizar relatórios;
* Gerenciar vagas.

##### Colaborador

Possui acesso às funcionalidades permitidas pela administração.

#### Dados Cadastrados

* Nome completo;
* Matrícula;
* E-mail;
* Tipo de usuário;
* Senha;
* Status (ativo ou inativo).

---

### Cadastro de Veículos

Responsável pelo gerenciamento dos veículos vinculados aos colaboradores.

#### Dados Cadastrados

* Placa;
* Marca;
* Modelo;
* Cor;
* Proprietário do veículo.

#### Funcionalidades

* Cadastro;
* Consulta;
* Edição;
* Exclusão.

---

### Controle de Estacionamento

Módulo responsável pelo gerenciamento da ocupação das vagas.

#### Funcionalidades

* Registrar entrada de veículos;
* Registrar saída de veículos;
* Associar veículo a uma vaga;
* Liberar vagas;
* Atualizar situação do estacionamento.

#### Informações Monitoradas

* Data e hora de entrada;
* Data e hora de saída;
* Tempo de permanência;
* Vaga ocupada.

---

### Relatórios

Módulo destinado à análise das movimentações do estacionamento.

#### Indicadores

* Permanência média dos veículos;
* Fluxo de entrada e saída;
* Histórico de movimentações;
* Taxa de ocupação das vagas.

---

## 📊 Regras de Negócio

### Usuários

* Apenas administradores podem cadastrar novos usuários.
* Administradores não necessitam possuir veículo cadastrado.
* Colaboradores devem possuir um veículo associado ao cadastro.

### Veículos

* Cada veículo deve possuir uma placa única.
* Um veículo deve estar associado a um colaborador.

### Estacionamento

* Uma vaga só pode ser ocupada por um veículo por vez.
* O tempo de permanência será calculado automaticamente pelo sistema utilizando JavaScript.
* Ao registrar uma saída, a vaga é automaticamente liberada.

---

## 🎨 Interface

O sistema possui uma interface dividida em módulos:

* Login
* Dashboard
* Cadastro de Usuários
* Cadastro de Veículos
* Controle de Estacionamento
* Relatórios

A aplicação foi desenvolvida utilizando princípios de responsividade para melhor adaptação em diferentes resoluções de tela.

---

## 🔌 Integração com API

O frontend realiza comunicação com uma API REST já existente para:

* Buscar usuários;
* Buscar veículos;
* Consultar vagas;
* Registrar movimentações;
* Atualizar informações do estacionamento;
* Gerar relatórios.

Exemplo de requisição:

```javascript
fetch('/api/usuarios')
    .then(response => response.json())
    .then(data => console.log(data));
```

---

## 🚀 Como Executar o Projeto

### Clone o repositório

```bash
git clone https://github.com/seu-usuario/ugb-parkly.git
```

### Acesse a pasta

```bash
cd ugb-parkly
```

### Execute o projeto

Abra o arquivo `index.html` em seu navegador ou utilize uma extensão como **Live Server** no Visual Studio Code.

---

## 📌 Funcionalidades Previstas

* [x] Tela de Login
* [x] Cadastro de Usuários
* [x] Cadastro de Veículos
* [ ] Dashboard Administrativo
* [ ] Controle de Vagas
* [ ] Relatórios
* [ ] Integração completa com API
* [ ] Controle visual das vagas
* [ ] Gráficos estatísticos

---

## 👨‍💻 Equipe

Projeto desenvolvido para fins acadêmicos na disciplina de **Ferramentas de Desenvolvimento Web**.

---

## 📄 Licença

Este projeto possui finalidade exclusivamente acadêmica e educacional.
