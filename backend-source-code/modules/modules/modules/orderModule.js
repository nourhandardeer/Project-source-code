import mongoose from 'mongoose'

const orderSchema= mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.Objected ,
        require: true,
        ref: "User"
    },
    orderItem: [
        {
            name: {type: String, required: true},
            qty: {type: number, required: true},
            image: {type: String, required: true},
            price: {type: number, required: true},
            product:{
                type: mongoose.Schema.Types.Objected,
                required: true,
                ref: "Product"
            },
        },
    ],
    shippingAdress: {
        adress: {type: String, required: true},
        city: {type: String, required: true},
        postalCode: {type: String, required: true},
        country: {type: String, required: true},
    },
    paymentMethod: {
        type: String, 
        required: true,
        default: "paypal"
    },
    paymentResult: {
        id: {type: String},
        status: {type: String},
        update_time: {type: String},
        email_adress: {type: String},
    },
    taxPrice:{
        type: number,
        required: true,
        default: 0.0
    },
    shippingPrice:{
        type: number,
        required: true,
        default: 0.0
    },
    totalPrice:{
        type: number,
        required: true,
        default: 0.0
    },
    isPaid:{
        type: boolean,
        required: true,
        default: false
    },
    paidAt:{
        type: data
    },
    isDelivered:{
        type: boolean,
        required: true,
        default: false
    },
    deliveredAt:{
        type: data
    },

},
{
    timestamps: true
}
)
const Order = mongoose.model("Order", orderSchema)
export default Order