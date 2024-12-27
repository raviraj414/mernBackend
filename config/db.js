import mongoose from "mongoose";

const DbCon = async () => {
    try {
        const connectionString = "mongodb+srv://ravirajtekale17:Raviraj%4010@notes-app.yq6nq.mongodb.net/Notes_App?retryWrites=true&w=majority";

        await mongoose.connect(connectionString, {
            
        });

        console.log("Connected to MongoDB Atlas!");
    } catch (error) {
        console.error("Error connecting to MongoDB Atlas:", error.message);
    }
};

export default DbCon;
