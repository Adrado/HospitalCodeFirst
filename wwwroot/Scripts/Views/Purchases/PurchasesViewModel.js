class PurchasesViewModel
{
    constructor($http)
    {
        this.Http = $http;
        this.SelectedClient = null;
        this.SelectedProduct = null;

        this.Clients = [];
        this.Products = [];
        this.Purchases = [];
        
        this.GetAllClients();
        this.GetAllProducts();
        this.GetAllPurchases();

        this.InitializeTable();
    }

    GetAllClients()
    {
        this.Http.get('api/clients')
            .then((response) =>
            {
                this.OnGetDataClient(response);
            });
    }

    OnGetDataClient(response)
    {
        this.Clients.length = 0; 

        for (let i in response.data) 
        {
            let client = new Client(response.data[i]);
            this.Clients.push(client);
        }
    }

    GetAllProducts()
    {
        this.Http.get('api/products')
            .then((response) =>
            {
                this.OnGetDataProduct(response);
            });
    }

    OnGetDataProduct(response)
    {
        this.Products.length = 0; 

        for (let i in response.data)  
        {
            let product = new Product(response.data[i]);
            this.Products.push(product);
        }
    }

    InitializeTable()
    {
        this.GridOptions =
            {
                enableFiltering: false,
                data: 'vm.Purchases',
                appScopeProvider: this,
                columnDefs: [
                    { name: 'ClientId', field: 'ClientId' },
                    { name: 'ProductId', field: 'ProductId' },
                    { name: 'Amount', field: 'Amount' }
                ]
            };
    }


    GetAllPurchases()
    {
        this.Http.get("api/purchases")
            .then((response) =>
            {
                this.OnGetDataPurchase(response);
            });
    }

    OnGetDataPurchase(response)
    {
        this.Purchases.length = 0;
        for (let i in response.data)
        {
            let purchase = new Client(response.data[i]);
            this.Purchases.push(purchase);
        }
    }

    CheckFormAdd(complete)
    {
        if (complete)
        {
            this.AddNewPurchase()
        }
    }

    AddNewPurchase()
    {
        let purchase = new Purchase();
        purchase.ClientId = this.SelectedClient.Id;
        purchase.ProductId = this.SelectedProduct.Id;
        purchase.Amount = this.Amount;
        this.SetData(purchase);
    }

    SetData(purchase)
    {
        this.Http.post("api/purchases", purchase)
            .then((response) =>
            {
                this.OnSuccesPost(response);
            },
                response => console.log(response)
            );
    }

    OnSuccesPost(response)
    {
        let purchase = new Purchase(response.data)
        this.Purchases.push(purchase);
        //this.Clean();
    }

}

app.component('purchases',
    {
        templateUrl: './Scripts/Views/Purchases/PurchasesView.html',
        controller: PurchasesViewModel,
        controllerAs: "vm"
    });

