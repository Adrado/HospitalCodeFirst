class Purchase extends Entity
{
    constructor(json)
    {
        super(json);
        if (json)
        {
            this.ClientId = json.clientId;
            this.ProductId = json.productId;
            this.Amount = json.amount;
        }
        else
        {
            this.ClientId = "00000000-0000-0000-0000-000000000000";
            this.ProductId = "00000000-0000-0000-0000-000000000000";
            this.Amount = 0;
        }
    }
}
