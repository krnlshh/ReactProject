export interface Product{
    id:number;
    title:string;
    description:string;
    price:number;
    image:string;
    category:string;    
    rating:{
        rate:number;
        count:number;
    } 
}

export interface ProductsResponse {
    products: Product[];
    total:number;
    page:number;
    limit:number;
    sortBy:string;
    sortOrder:String;
}

