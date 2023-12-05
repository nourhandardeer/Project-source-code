import mongoose from 'mongoose'
const userSchema= mongoose.Schema({
    namee : {
        type: String ,
        require: true
    },
    email : {
        type: String ,
        require: true ,
        unique: true
    },
    password : {
        type: String ,
        require: true
    },
    isAdmin : {
        type: boolean ,
        require: true ,
        default: false
    }
},
{
    timestamps: true
}
)
const User = mongoose.model("User", userSchema)
export default User