# Hello GraphQL - Product API (Apollo Server + TypeScript)

A simple GraphQL API built with **Apollo Server**, **TypeScript**, **Node.js**, and **Yarn**.  
Manages **Products**, **Categories**, and **Reviews** with relationships.

## 📌 Features

- Query all products or by ID
- Query all categories or by ID
- Relationships: Product → Category, Product → Reviews, Category → Products
- Modular schema and resolvers
- TypeScript type safety
- In-memory database
- ESM support

## 🛠 Tech Stack

- Node.js
- TypeScript
- Apollo Server 5
- GraphQL
- Yarn (package manager)
- Nodemon (dev server)
- TSC (compiler)

## 📁 Project Structure

```
d:/hello_graphql/
├── package.json
├── tsconfig.json
├── yarn.lock
├── src/
│   ├── db.ts          # In-memory data
│   ├── index.ts       # Apollo Server setup
│   └── gql/
│       ├── schema/
│       │   └── index.ts
│       └── resolvers/
│           └── index.ts
├── dist/              # Compiled JS (gitignored)
└── README.md
```

## ⚙️ Quick Start

1. **Install dependencies**:

   ```bash
   yarn install
   ```

2. **Compile TypeScript** (in one terminal, watch mode):

   ```bash
   yarn compile
   ```

3. **Start server** (in new terminal):

   ```bash
   yarn start
   ```

4. **Access GraphQL Playground**:
   ```
   http://localhost:4000/
   ```

Server ready: `🚀 Server ready at: http://localhost:4000/`

## 🌐 Example Queries

**All Products**:

```graphql
query {
  products {
    id
    name
    categoryId
    category {
      id
      name
    }
    reviews {
      id
      comment
    }
  }
}
```

**Product by ID**:

```graphql
query {
  product(id: \"1\") {
    id
    name
    reviews {
      comment
    }
  }
}
```

**All Categories**:

```graphql
query {
  categories {
    id
    name
    products {
      id
      name
    }
  }
}
```

## 🚀 Development

- Edit `src/` files → auto-compile with `yarn compile` (watch).
- Restart server if needed: `yarn start`.
- Explore data in `src/db.ts`.

## 🏗 Build for Production

```bash
# One-time compile
npx tsc
# Run
node dist/index.js
```

## ⚡ Resolver Highlights

- **Queries**: `products`, `product(id)`, `categories`, `category(id)`.
- **Fields**: `Product.category`, `Product.reviews`, `Category.products`.

## 👤 Author

Nur Mohammod  
[GitHub](https://github.com/nur21horin) | [LinkedIn](https://www.linkedin.com/in/nur-mohammodd/)

⭐ **Star/Fork/Share** if helpful!
