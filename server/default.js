import {products} from './constants/product.js';
import Product from './model/productschema.js';

const defaultData = async () => {
    try{
        await Product.deleteMany({});
        await Product.insertMany(products);
        console.log('data imported succesfully')
    }catch(error) {
        console.log('Error: ',error.message);
    }
}
export default defaultData;