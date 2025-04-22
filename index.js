const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const bookings = {
  "AB1234": {
    lastName: "smith",
    status: "Confirmed",
    airline: "Ether Airlines",
    flightNumber: "ET203",
    date: "2025-05-02",
    origin: "BKK (Suvarnabhumi)",
    destination: "HKT (Phuket)",
    seat: "12A",
    class: "Economy"
  },
  "CD5678": {
    lastName: "tanaka",
    status: "Pending",
    airline: "Ether Airlines",
    flightNumber: "ET105",
    date: "2025-06-10",
    origin: "BKK (Suvarnabhumi)",
    destination: "CNX (Chiang Mai)",
    seat: "4A",
    class: "Business"
  }
};

app.get('/bookings/status', (req, res) => {
  const { pnr, lastName } = req.query;
  const booking = bookings[pnr];
  if (booking && booking.lastName.toLowerCase() === lastName.toLowerCase()) {
    res.json(booking);
  } else {
    res.status(404).json({ error: "Booking not found" });
  }
});

app.put('/bookings/update-seat', (req, res) => {
  const { pnr, lastName, newSeat } = req.body;
  const booking = bookings[pnr];
  if (booking && booking.lastName.toLowerCase() === lastName.toLowerCase()) {
    bookings[pnr].seat = newSeat;
    res.json({ message: `Seat updated to ${newSeat}` });
  } else {
    res.status(404).json({ error: "Booking not found" });
  }
});

app.delete('/bookings/cancel', (req, res) => {
  const { pnr, lastName } = req.query;
  const booking = bookings[pnr];
  if (booking && booking.lastName.toLowerCase() === lastName.toLowerCase()) {
    delete bookings[pnr];
    res.json({ message: "Booking successfully canceled" });
  } else {
    res.status(404).json({ error: "Booking not found" });
  }
});

app.get('/', (req, res) => {
  res.send('Ether Airlines Extended Booking API is running.');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});