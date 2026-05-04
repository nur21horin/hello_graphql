import { db } from "../../db.js";

export const resolvers = {
  Query: {
    products: () => db.products,
    product: (parent:any,args: { id:String },context:any) =>{
      const result=db.products.find(pd=>pd.id===args.id);
      return result;
    },
  
    categories: () => db.categories,
    category: (parent:any,args: { id:String },context:any) =>{
      const result=db.categories.find(ct=>ct.id===args.id);
      return result;

  }
},
  Product:{
    category:(parent,args,context)=>{
      const result=db.categories.find(ct=>ct.id===parent.categoryId);
      return result;

    }
    ,reviews:(parent,args,context)=>{
      const result=db.reviews.filter(rv=>rv.productId===parent.id);
      return result;
    }
  },
  Category:{
    products:(parent,args,context)=>{
      const result=db.products.filter(pd=>pd.categoryId===parent.id);
      return result;
    }
  }
  
};