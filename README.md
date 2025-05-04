
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
**https://www.loom.com/share/74f2e320fb8942dc9e3e811e439c83f8?sid=627413d7-00eb-4e2d-99be-8b3aa2000d0a**

``
### For Device
https://www.loom.com/share/d6289164851d4c04aed5f087cff353d2?sid=65e4dc4d-1df5-4ae0-9c16-d45d76ba3bc4
