import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
    name : {
        type: String ,
        require: true
    },
    rating : {
        type: number ,
        require: true
    },
    comment : {
        type: string ,
        require: true
    },
    user : {
        type: mongoose.Schema.Types.Objected ,
        require: true,
        ref: "User"
    }
})

const productSchema= mongoose.Schema({
    name : {
        type: String ,
        require: true
    },
    image : {
        type: String ,
        require: true 
        
    },
    description : {
        type: String ,
        require: true
    },
    reviews: [reviewSchema],
    rating : {
        type: number ,
        require: true ,
        default: 0
    },
    numReviews : {
        type: number ,
        require: true ,
        default: 0
    },
    price : {
        type: number ,
        require: true ,
        default: 0
    },
    rating : {
        type: number ,
        require: true ,
        default: 0
    },
    countInStock : {
        type: number ,
        require: true ,
        default: 0
    }
},
{
    timestamps: true
}
)
const Product = mongoose.model("Product", productSchema)
export default Product