import mongoose from 'mongoose'
const TodoSchema=new mongoose.Schema({
 title:String,
 priority:{type:String,enum:['low','medium','high'],default:'medium'},
 completed:{type:Boolean,default:false}
},{timestamps:true})
export default mongoose.models.Todo||mongoose.model('Todo',TodoSchema)