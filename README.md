# ✈️ EtherAirlines API

This is a simple backend API for Ether Airlines' flight booking system. It supports checking booking status, updating seat assignments, and cancelling bookings.

---

## 📦 Endpoints

### 1. GET `/bookings/status`

Check the status of a booking.

**Query Parameters:**
- `pnr` (string) – booking reference code
- `lastName` (string) – passenger's last name

**Example:**
```
GET /bookings/status?pnr=AB1234&lastName=smith
```

**Response:**
```json
{
  "status": "Confirmed",
  "flightNumber": "ET203",
  "date": "2025-05-02",
  "origin": "BKK (Suvarnabhumi)",
  "destination": "HKT (Phuket)",
  "seat": "12A",
  "class": "Economy"
}
```

---

### 2. PUT `/bookings/update-seat`

Update the seat number of an existing booking.

**Request Body:**
```json
{
  "pnr": "AB1234",
  "lastName": "smith",
  "newSeat": "14A"
}
```

**Response:**
```json
{
  "message": "Seat updated to 14A"
}
```

---

### 3. DELETE `/bookings/cancel`

Cancel a booking.

**Query Parameters:**
- `pnr` (string)
- `lastName` (string)

**Response:**
```json
{
  "message": "Booking successfully canceled"
}
```

---

## ▶️ Run Locally

```
npm install
npm start
```

---

## 📌 Deploy

This app is ready to deploy on [Render](https://render.com), [Railway](https://railway.app), or any Node.js-friendly platform.

**Start Command:** `npm start`

---

## 👨‍💻 Developed for educational and demo purposes.