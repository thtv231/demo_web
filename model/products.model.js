const mongoose = require("mongoose")
const slug = require("mongoose-slug-updater")
mongoose.plugin(slug)
const productsSchema = new mongoose.Schema({
    title : String,
    products_category_id:{
        type:String,
        default:""
    },
    description: String,
    price: Number,
    discountPercentage: Number,
    stock:Number,
    thumbnail : String,
    images: [String],
    status : String,
    featured:String,
    position: Number,
    slug:{
        type:String,
        slug:"title",
        unique:true
    },
    createdBy :{
        account_id:String,
        createAt:{
            type: Date,
            default : Date.now
        }
    }
    ,
    deletedBy :{
        account_id:String,
        deletedAt: Date,
   
    }
    ,
    updatedBy :[
        {
            account_id:String,
            updatedAt: Date,
   
        }
    ],
    deleted: {
        type: Boolean,
        default: false
    }
    
},{timestamps:true})

const Product = mongoose.model("Product",productsSchema,"products")

module.exports = Product
