# Proposta de aplicação

Aplicação para controle de cardápio e comandas de um restaurante, possibilitando que o cliente tenha acesso a um cardápio digital e possa fazer seu pedido através de uma aplicação web, enquanto o restaurante tem acesso a uma dashboard com os pedidos pendentes e suas respectivas mesas/clientes.

Ao fim do pedido, mediante pagamento do cliente, o garçom finaliza o pedido e é gerado um "nota fiscal" simplificada.

<br />

# Funcionalidades

## Restaurante

- Cadastrar usuários (garçoms / admin)
- Autenticação
- Exibição dos pedidos em andamento
- Finalização do pedido / emissão de invoice

<br />

## Cliente

- Exibição do cardápio
- Fazer pedido
- Pagar pedido
- Dar gorjeta


<br />

# Entidades da aplicação

## Authentication

<br />

### User

```
id: integer (auto generated);

name: string;

email: string;

password: string;

admin: boolean (0/1);
```

<br/>

## Restaurant workflow

<br />

### Category

```
id: integer (auto generated);

name: string;

description: string;
```

### Dish

```
id: integer (auto generated);

name: string;

description: string;

price: number;

categoryId: integer (Category entity relation);
```

### Seat

```
id: integer (auto generated);

number: integer;
```

### Order

```
id: integer (auto generated);

seatId: integer (Seat entity relation);
```

### OrderItems

```
orderId: integer (Order entity relation);

dishId: integer (Dish entity relation);

note: string;

```

### Invoice

```
orderId: integer (Order entity relation);

value: number;

client: string (cpf);

userId: integer (User entity relation);
```

<br/>

<h1>Integrantes do grupo</h1>

<ul>
  <li>
    Rafael Papastamatiou Maia Rodrigues
  </li>
  <li>
    Mateus do Paço Alvarenga Catão
  </li>
  <li>
    Guilherme Augusto Reis de Campos
  </li>
  <li>
    Bernardo Vaz Oliveira
  </li>
</ul>

