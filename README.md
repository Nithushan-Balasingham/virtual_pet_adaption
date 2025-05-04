
# Virtual Pet Adoption

## Installation Instructions for BE


Follow these steps to set up the project:

```sh
# 1. Clone the repository 
git clone  https://github.com/Nithushan-Balasingham/virtual_pet_adaption
cd BE

# 2. Install dependencies
npm i
Install the MongoDB Extension in VSCode
First, install the MongoDB extension in Visual Studio Code.

# 3. Create a Cluster and Database in MongoDB
After installing the extension, create a cluster and a database in MongoDB.

Get the Connection URL
Once the cluster and database are set up, you can use the connection URL to connect to the database. The URL will look like this:
mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority
Make sure to replace <username> and <password> with your actual MongoDB credentials.

Update the .env File
In your .env file, add the following MongoDB connection URL with your database name:
mongodb+srv://<username>:<password>@cluster0.mongodb.net/<databaseName>?retryWrites=true&w=majority
Replace <username>, <password>, and <databaseName> with the appropriate values.
MONGODB_URI= "MONGO_DB_CONNECTION SRING"




# 5. Start the development server
npm run dev
```

## Environment Variables
Ensure you have a `.env` file with the required variables:

```ini
MONGODB_URI="mongodb+srv://<username>:<password>@cluster0.mongodb.net/<databaseName>?retryWrites=true&w=majority"



```
## Installation Instructions for FE

Follow these steps to set up the project:

```sh
# 1. Clone the repository 
git https://github.com/Nithushan-Balasingham/virtual_pet_adaption
cd FE

# 2. Install dependencies
npm i

# 3. Start the development server
npm run dev
```

## Environment Variables
Ensure you have a `.env` file with the required variables:

```ini
VITE_API_URL="http://localhost:5000/pets"




```
## Recorded Loom Link
**https://www.loom.com/share/bf3fd726a8634c9d8d89fd96a5e03e03?sid=b1912476-9ccd-45e4-b298-35825bccb9da**

``
