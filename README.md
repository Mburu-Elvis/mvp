# 🏛️ Public Registry Plugin for Vendure

A Vendure plugin that exposes a **Public Registry** of entities such as firms and advisors through a GraphQL API, enabling both admin and storefront access.

---

## 📌 Project Goal

To provide a pluggable and extensible registry system for publicly searchable entities (e.g., financial institutions, professionals), allowing users to query by **type**, **category**, or **keyword**.

---

## 🧩 Purpose

The plugin addresses use cases like:

- Displaying a verified list of service providers (e.g., licensed firms, advisors).
- Allowing end users to search for entities based on attributes like category or type.
- Providing transparency and discoverability within platforms dealing with financial or regulatory entities.

---

## 🚀 Features

- ✅ GraphQL queries for:
  - Listing all registry entries
  - Searching by `id`, `type`, `category`, or `keyword`
- ✅ Shared access from both **Admin API** and **Shop API**
- ✅ Fully typed GraphQL schema with NestJS + Vendure integration
- ✅ Easy to seed and extend with new entities

---

## 🛠️ Tech Stack

- [Vendure](https://www.vendure.io/)
- [NestJS](https://nestjs.com/)
- [GraphQL](https://graphql.org/)
- TypeScript

---

## 🗂️ Directory Structure

```

src/
├── index.ts                     # Server bootstrap
├── index-worker.ts             # Worker bootstrap
├── vendure-config.ts           # Vendure configuration
└── plugins/
└── public-registry/
├── public-registry.plugin.ts
├── public-registry.graphql
├── resolvers/
│   └── public-registry.resolver.ts
├── services/
│   └── public-registry.service.ts
├── entities/
│   └── registry-entity.ts
├── mock/
│   └── seed-data.ts
└── types/
└── entity.model.ts

```

---

## 📋 GraphQL API

### Queries

```graphql
query {
  publicRegistryList {
    id
    name
    type
    category
    description
  }

  registryEntityById(id: "1") {
    name
  }

  registryByType(type: "Firm") {
    name
  }

  registryByCategory(category: "Banking") {
    name
  }

  registryByKeyword(keyword: "advisor") {
    name
  }
}
```

---

## 🔧 Setup Instructions

### 1. Clone & Install

```bash
git clone <your-repo-url>
cd <your-repo>
npm install
```

### 2. Configure Environment

Create a `.env` file and define required variables:

```env
APP_ENV=dev
PORT=3000
COOKIE_SECRET=your-secret
SUPERADMIN_USERNAME=admin
SUPERADMIN_PASSWORD=admin
DB_HOST=localhost
DB_PORT=3306
DB_NAME=vendure
DB_USERNAME=root
DB_PASSWORD=yourpassword
```

### 3. Start the Dev Server

```bash
npm run dev
```

This runs both the **Vendure server** and **worker** concurrently.

---

## 🧪 Development Tips

* Modify `public-registry.service.ts` to add mock or DB-backed data.
* Extend `registry-entity.ts` with more fields as needed.
* Update the `.graphql` file accordingly and make sure it's registered via `public-registry.plugin.ts`.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, open an issue first to discuss your proposed enhancement.

---

## 🧾 License

[MIT](LICENSE)

---

## 📞 Contact

For feedback, questions, or collaboration, reach out to [Elvis Mburu](mailto:your.mburuelvis310@gmail.com).

