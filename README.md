This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### Project Overview

## Folder Structure

The project is structured with a focus on modularity and clarity:

```
|-- components
|   |-- Header.jsx
|   |-- Layout.jsx
|   |-- ProductDetail.jsx
|   |-- ProductList.jsx
|-- hooks
|   |-- useProducts.js
|   |-- useProductCategories.js
|   |-- useProductDetails.js
|   |-- useProductIds.js
|-- pages
|   |-- index.js
|   |-- products
|       |-- [productId].js
|-- styles
|   |-- tailwind.css
|-- .gitignore
|-- next.config.js
|-- package.json
|-- README.md
```

This React project utilizes the TanStack React Query library to efficiently manage API calls and states within the application. The primary objective is to fetch and display product data from a dummy JSON API, organized by categories. The project adheres to best practices, including modularity, loading states, dynamic rendering, and separate hooks for categories and products.

### Professional Techniques Employed

# Structured Project Architecture
The project is structured with a modular approach. The hooks folder encapsulates API-related logic, containing separate hooks for fetching products (useProducts) and categories (useProductCategories). This design ensures clear separation of concerns.

# Custom Hooks for Data Fetching
- useProducts Hook
A custom hook named useProducts is created to encapsulate the logic related to fetching products. This hook includes functionalities such as handling loading states, error handling, and limiting the number of displayed products.

- useProductCategories Hook
Another custom hook, useProductCategories, is developed to handle the fetching of product categories. This hook ensures a clean separation of concerns, providing a dedicated mechanism for managing category-related data.

- useProductDetails Hook

# Loading States and Error Handling
Both hooks incorporate loading states and error handling to deliver a seamless user experience. These features ensure users receive meaningful feedback during data retrieval, displaying loading spinners or error messages as necessary.

# Limiting the Number of Products Displayed
The useProducts hook includes functionality to limit the number of displayed products. This technique optimizes performance and improves the user experience, especially when dealing with a substantial dataset.

# Dynamic Rendering Based on Categories
The application dynamically renders products based on selected categories. The useProductCategories hook provides an array of available categories, enabling users to filter products by selecting a specific category.

# Dynamic Routing for Product Details
Dynamic routing is implemented for individual product details using Next.js's Link component. Users can navigate to detailed views by clicking on corresponding buttons, providing an intuitive and user-friendly interface. This feature isn't completely implemented yet it has a bug which needs to be fixed in v2.0

# Server-Side Rendering (SSR) for Initial Data Fetching
The application uses Next.js's getStaticProps to perform server-side rendering (SSR) during the initial load. This ensures that essential data, including both products and categories, is pre-fetched before rendering the page on the server side. And used "dehydrate" prop for the next ssr prefetching.

# Clear and Concise Documentation
The project includes a comprehensive README file documenting the implementation details, project structure, and instructions for integration. This documentation serves as a valuable resource for developers, facilitating collaboration and future maintenance.

Conclusion
By implementing these professional techniques, the project achieves a harmonious balance between functionality, performance, and maintainability. The use of custom hooks, structured architecture, and thoughtful UI design contribute to a robust and user-friendly application. This approach enhances the scalability of the project and facilitates future enhancements and collaborative development.
