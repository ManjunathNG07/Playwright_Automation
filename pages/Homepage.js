exports.HomePage= class HomePage{

    constructor(page){
        this.page=page;
        this.productList='//div[@id="tbodyid"]/div/div/div/h4/a';
        this.addToCartBtn="//a[.='Add to cart']";
        this.cart='#cartur';
    }

    async addProdunctToCart(productName)
{
    const productList=await this.page.$$(this.productList);
    for(const product of productList){
        if(productName===await product.textContent()){
            await product.click();
            break; 
        }
    }

    await this.page.locator(this.addToCartBtn).click(); 
    await this.page.on('dailog',async dialog=>{
        if(dialog.message().includes('added')){
            await dialog.accept();
        }
    })

    
}

  async gotoCart(){
    await this.page.locator(this.cart).click();
  }      
}