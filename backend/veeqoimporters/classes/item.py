class Item:
    def __init__(
        self,
        sellable_id,
        quantity,
        price_per_unit,
        tax_rate
    ):
        if sellable_id == "":
            raise ValueError("sellable_id: " + sellable_id)
        if price_per_unit == "":
            raise ValueError("price_per_unit: " + price_per_unit)
        if tax_rate == "":
            raise ValueError("tax_rate: " + tax_rate)
        if quantity == "":
            raise ValueError("quantity: " + quantity)

        self.sellable_id = sellable_id
        self.quantity = quantity
        self.price_per_unit = price_per_unit.replace(",", "")
        self.tax_rate = tax_rate