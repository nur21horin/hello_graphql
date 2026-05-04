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
    category:({categoryId},args:any,context:any)=>{
      const result=db.categories.find(ct=>ct.id===categoryId);
      return result;

    }
    ,reviews:({id},args:any,context:any)=>{
      const result=db.reviews.filter(rv=>rv.productId===id);
      return result;
    }
  },
  Category:{
    products:({id},args:any,context:any)=>{
      const result=db.products.filter(pd=>pd.categoryId===id);
      return result;
    }
  }
  
};