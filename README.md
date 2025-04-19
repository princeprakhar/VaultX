# VaultX

**A MERN Stack Digital Payment System**

VaultX is a full-stack digital payment application developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It offers users a seamless experience for managing digital wallets, performing transactions, and tracking financial activities.

## 🔗 Live Demo

[Access VaultX Here](https://vault-x-three.vercel.app)

## 🛠️ Features

- **User Authentication**: Secure registration and login using JWT (JSON Web Tokens).
- **Digital Wallet**: Manage wallet balances with real-time updates.
- **Peer-to-Peer Transactions**: Send and receive money between users instantly.
- **Transaction History**: View detailed records of all transactions.
- **Responsive Design**: Optimized for various devices to ensure a consistent user experience.

## 🧰 Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Deployment**: Vercel (Frontend), Render (Backend)

## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB instance (local or cloud-based)

### Installation

1. **Clone the repository:**

   ```bash
     git clone https://github.com/princeprakhar/VaultX.git
     cd VaultX
   ```
2. Set up the backend:
   ```
     cd backend
     npm install
   ```
    - Create a .env file in the backend directory with the following variables:
      
      ```
      MONGO_URI=your_mongodb_connection_string
      JWT_SECRET=your_jwt_secret
      ```
    - Run the backend server:
      
      ```
        node index.js
      ```

3. Set up the frontend:
   ```
     cd ../frontend
     npm install
   ```
   - Start the frontend development server:
     
     ```
       npm run dev
     ```

***The application should now be running locally.***

### 📁 Project Structure
```sql
  VaultX/
  ├── backend/
  │   ├── controllers/
  │   ├── models/
  │   ├── routes/
  │   ├── .env
  │   └── server.js
  ├── frontend/
  │   ├── src/
  │   │   ├── components/
  │   │   ├── pages/
  │   │   └── App.js
  │   └── public/
  ├── Dockerfile
  └── README.md
```
### 📄 License
- This project is licensed under the MIT [License](https://github.com/princeprakhar/VaultX/blob/main/LICENSE). See the LICENSE file for details.

### 👤 Author
- [Prakhar Deep](https://github.com/princeprakhar)

