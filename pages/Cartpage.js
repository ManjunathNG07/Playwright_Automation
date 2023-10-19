exports.CartPage= class CartPage{


    constructor(page){
        this.page=page;
        this.noOfproduct='//tbody[@id="tbodyid"]/tr/td[2]';

    }

    async checkProductInCart(productName){
        const ProductsInCart=await this.page.$$(this.noOfproduct);
        for(const product of ProductsInCart){
            if(productName=== await product.textContent()){
                return true;
                break;
            }

        }

    }


}