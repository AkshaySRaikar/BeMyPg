const pgModel = require("../models/AddPGdetails");

const BookPg = async (req, res) => {
    // try {
    //     const { name, phone, visitDate, pgId } = req.body;

    //     // Logging the request body for debugging
    //     console.log("Request body:", req.body);
    //     console.log("Received request for scheduling a visit");

    //     // Input Validation
    //     if (!name || !phone || !visitDate || !pgId) {
    //         return res.status(400).json({ message: "All fields are required" });
    //     }

    //     // Find the PG by its ID
    //     const pg = await pgModel.findById(pgId);
    //     if (!pg) {
    //         return res.status(404).json({ message: "PG not found" });
    //     }
    //     console.log("PG found:", pg);

    //     // Convert visitDate to a Date object
    //     const parsedVisitDate = new Date(visitDate);
    //     if (isNaN(parsedVisitDate.getTime())) {
    //         return res.status(400).json({ message: "Invalid visit date format" });
    //     }

    //     // Create the scheduled visit object
    //     const scheduledVisit = {
    //         name,
    //         phone,
    //         visitDate: parsedVisitDate,
    //         status: "pending", // Default status
    //     };
    //     console.log("Scheduled visit object:", scheduledVisit);

    //     console.log("sccccc",pg.scheduledVisits)
    //     // Add the scheduled visit to the PG's scheduledVisits array
    //     pg.scheduledVisits.push(scheduledVisit);

    //     // Save the updated PG document
    //     await pg.save();

    //     // Return a success response
    //     return res.status(200).json({
    //         message: "Visit scheduled successfully",
    //         scheduledVisit,
    //     });
    // } catch (error) {
    //     console.error("Error scheduling visit:", error);
    //     return res.status(500).json({ message: "Server error", error: error.message });
    // }

    try {
        const {user,email, bookingDate, roomBooked, bookingStatus,pg_id } = req.body;
        console.log("herehere",req.body)
        if (!user || !email || !bookingDate || !roomBooked) {
            return res.status(400).json({ error: "All fields are required." });
        }

        // Find the PG and add the booking
        const pg = await pgModel.findOne({ _id: pg_id}); // Add query to find the relevant PG
        if (!pg) return res.status(404).json({ error: "PG not found." });

        pg.pgBookings.push({
            user,
            email,
            bookingDate,
            roomBooked,
            bookingStatus,
        });

        await pg.save();
        res.status(201).json({ message: "Booking successful", pg });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { BookPg };
