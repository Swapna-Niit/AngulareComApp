import { Product } from "./models/product";

export class MockData {

    public static Products : Product [] = [
        {
            id:123,
            title:"Maggie",
            type:"Noodles",
            weight:100,
            productType:"Ready To Cook",
            brand:"Maggie",
            price:20
        },
        {
            id:124,
            title:"Everest Garam Masala",
            type:"Spices",
            weight:100,
            productType:"Spices",
            brand:"Everest",
            price:67
        }

    ];

    
}