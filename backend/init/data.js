const sampleBookings = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "1234567890", 
    idProofNumber: "1234-5678-9012",
    idProofType: "Aadhar Card",  // Corrected capitalization
    checkinDate: "2024-09-01T12:00:00.000Z",
    checkoutDate: "2024-09-05T12:00:00.000Z",
    adults: 2,
    children: 1,
    roomType: "executiveSuite",
    message: "Please arrange a baby cot in the room."
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "9876543210", 
    idProofNumber: "5678-9012-3456",
    idProofType: "PAN Card",  // Corrected capitalization
    checkinDate: "2024-10-10T14:00:00.000Z",
    checkoutDate: "2024-10-12T10:00:00.000Z",
    adults: 1,
    children: 0,
    roomType: "juniorSuite",
    message: "I'd like a room with a sea view, if possible."
  },
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phone: "4567891230", 
    idProofNumber: "2345-6789-0123",
    idProofType: "Aadhar Card",  // Corrected capitalization
    checkinDate: "2024-08-25T16:00:00.000Z",
    checkoutDate: "2024-08-30T11:00:00.000Z",
    adults: 2,
    children: 2,
    roomType: "superDeluxRoom",
    message: "We will arrive late at night, please keep our reservation."
  },
  {
    name: "Bob Brown",
    email: "bob.brown@example.com",
    phone: "3210987654", 
    idProofNumber: "9012-3456-7890",
    idProofType: "PAN Card",  // Corrected capitalization
    checkinDate: "2024-11-15T15:00:00.000Z",
    checkoutDate: "2024-11-20T11:00:00.000Z",
    adults: 3,
    children: 0,
    roomType: "superDeluxRoom",
    message: "Please provide extra pillows."
  },
  {
    name: "Clara Lee",
    email: "clara.lee@example.com",
    phone: "7654321098", 
    idProofNumber: "3456-7890-1234",
    idProofType: "Aadhar Card",  // Corrected capitalization
    checkinDate: "2024-12-01T12:00:00.000Z",
    checkoutDate: "2024-12-07T10:00:00.000Z",
    adults: 2,
    children: 1,
    roomType: "executiveSuite",
    message: "Is it possible to have a late check-out?"
  }
];

module.exports = { data: sampleBookings };
