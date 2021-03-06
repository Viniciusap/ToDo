

const Products = '_Products'

export function ErrorValidation(errors){
    this.errors = errors
}

export default class ProductService{
    validation = (product) => {
        const errors = []

        if(!product.name){
            errors.push('O campo Nome é obrigatório')
        }
        if(!product.sku){
            errors.push('O campo SKU é obrigatório')
        }
        if(!product.price || product.price <= 0 ){
            errors.push('O campo Preço deve ter um valor maior que zero(0)')
        }
        if(!product.supplier){
            errors.push('O campo fornecedor é obrigatório')
        }


        if(errors.length > 0){
            throw new ErrorValidation(errors)
        }
    }

    getProducts = () => {
        const products = localStorage.getItem(Products)
        if(!products){
            return [];
        }
        return JSON.parse(products)
    }

    getIndex = (sku) => {
        let index = null;
        this.getProducts().forEach( (product, i) => {
            if(product.sku === sku){
                index = i;
            }
        })
        return index;
    }

    delete = (sku) => {
        const index = this.getIndex(sku);
        if(index !== null){
            const products = this.getProducts()
            products.splice(index, 1)
            localStorage.setItem(Products, JSON.stringify(products))
            return products
        }        
    }

    save = (product) => {

        this.validation(product)

        let products = localStorage.getItem(Products)

        if(!products){
            products = []
        }
        else{
            products = JSON.parse(products)
        }
        const index = this.getIndex(product.sku)
        if(index===null){
            products.push(product);
        } 
        else{
            products[index]= product;
        }
        localStorage.setItem(Products, JSON.stringify(products))
    }
}