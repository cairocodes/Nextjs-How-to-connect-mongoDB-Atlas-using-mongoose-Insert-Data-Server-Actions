import mongoose from "mongoose"; //npm install mongoose https://www.npmjs.com/package/mongoose
 
const connectMongoDB = async () => { //mongodb+srv://<username>:<password>@firstcluster.4rc4s.mongodb.net/<dbname>?retryWrites=true&w=majority
    try {
        await mongoose
        .connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log('Connected to the Database.');
        })
        .catch(err => console.error(err));
        //console.log("Connected to MongoDB.");
    } catch (error) {
        console.log(error);
    }
};
 
export default connectMongoDB;