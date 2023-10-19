exports.APIUtils=class APIUtils{

    constructor(apiContext,loginPayLoad)
    {
        this.apiContext=apiContext;
        this.loginPayLoad=loginPayLoad;


    }

    async getToken()
    {
        const loginresponse= await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",{data: this.loginPayLoad});

       // expect( await loginresponse.ok()).toBeTruthy();
        const loginresponsejson= await loginresponse.json();
        const token=loginresponsejson.token;
        console.log(token);
        return token;
    }

    async createOrder(OrderPayLoad)
    {
        let responce={};
        responce.token= await this.getToken();
        const orderResponce = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
        {data:OrderPayLoad,
            headers:{
            'Authorization' :responce.token,
            'Content-Type'  :'application/json'
        },
        })
        
         const orderResponcejson=await orderResponce.json();
         console.log(orderResponcejson);
          const orderId=orderResponcejson.orders[0];
         responce.orderId=orderId;

         return responce;

    }



}