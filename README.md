# Vehicle Rental System 🚗

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

