# Car Rental System 🚗

A comprehensive full-stack application designed to streamline vehicle rentals. This project handles everything from user registration to real-time booking management.

---

## 🛠 Tech Stack
- **Frontend:** Angular 16 (Signals, RxJS, Angular Material)
- **Backend:** Spring Boot (Java, REST APIs, Spring Security)
- **Database:** MySQL
- **Tools:** Git/GitHub, Maven, Postman

## ✨ Key Features
- **Secure Authentication:** User login and logout functionality with role-based access.
- **Vehicle Catalog:** Browse available vehicles with real-time status updates.
- **Booking System:** Seamless reservation process with input validation.
- **Admin Dashboard:** Tools for managing inventory and viewing booking history.

## 📸 Screenshots

Login Page
<img width="763" height="505" alt="Login Page" src="https://github.com/user-attachments/assets/1eafe907-09ad-48b5-9c3d-d07dc5e2f2d9" />


Available Cars
<img width="1032" height="634" alt="Available cars page" src="https://github.com/user-attachments/assets/e7ad1335-c028-4c4f-9c8b-6591e81354dd" />

Booking a Car
<img width="1361" height="533" alt="Booking a car" src="https://github.com/user-attachments/assets/d78fb421-6809-4d1a-9a69-1f9f75e68748" />

Car Dashboard 
<img width="1065" height="486" alt="Dashboard Page" src="https://github.com/user-attachments/assets/ccaf95ff-a1ea-43e1-97b1-13ff4eea70bf" />



## ⚙️ Installation & Setup

### 1. Database Setup
1. Create a MySQL database named `vehicle_rental_db`.
2. Update `src/main/resources/application.properties` with your MySQL username and password.

### 2. Backend (Spring Boot)
```bash
cd backend
mvn clean install
mvn spring-boot:run
```

### 3. Frontend (Angular)
```
cd frontend
npm install
ng serve
```
Once the server is running, open your browser and navigate to:

http://localhost:4200

