import { db } from "../../db.js";
export const resolvers = {
    Query: {
        products: () => db.products,
        product: (parent, args, context) => {
            const result = db.products.find(pd => pd.id === args.id);
            return result;
        },
        categories: () => db.categories,
        category: (parent, args, context) => {
            const result = db.categories.find(ct => ct.id === args.id);
            return result;
        },
    }
};
