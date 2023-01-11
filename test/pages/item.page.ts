import actions from "../utils/actions"; 

class ItemPage{

    public get addToCartButton(){
        return $('#add-to-cart-sauce-labs-backpack')
    }

    public get removeButton(){
        return $('#remove-sauce-labs-backpack')
    }
}
export default new ItemPage();