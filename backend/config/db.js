import {connect} from 'mongoose'
const ConnectDB = async()=>{
  try{
    await connect(process.env.MONGO_URI)
    console.log("connected to db")

  }catch(error){
    console.log("cany connect to db")
    process.exit(1)
  }
  
}
export default ConnectDB