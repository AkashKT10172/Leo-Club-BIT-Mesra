import React, { useState } from "react";
import { db } from "../../firebase-config"; // Ensure correct path
import { collection, addDoc } from "firebase/firestore";
import { useLocation } from "react-router-dom";

const RegistrationForm = () => {
  const location = useLocation();
  const eventName = new URLSearchParams(location.search).get("event"); // Get event from URL

  // Ensure the correct collection name
  const eventCollection =
    eventName === "takeshi" ? "takeshi" : eventName === "mismatched" ? "mismatched" : null;

  // Properly format event name for display
  const formattedEventName =
    eventName === "mismatched"
      ? "Mismatched"
      : eventName === "takeshi"
      ? "Takeshi's Castle"
      : eventName
      ? eventName.charAt(0).toUpperCase() + eventName.slice(1)
      : "Unknown Event";

  const [formData, setFormData] = useState({
    teamName: "",
    teamID: "",
    leaderName: "",
    leaderPhone: "",
    leaderEmail: "",
    leaderBranch: "",
    member2Name: "",
    member2Email: "",
    member2Phone: "",
    member3Name: "",
    member4Name: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!eventCollection) {
      setMessage("❌ Invalid event name. Cannot submit.");
      return;
    }

    try {
      await addDoc(collection(db, eventCollection), formData);
      setMessage("✅ Registration Successful!");
      setFormData({
        teamName: "",
        teamID: "",
        leaderName: "",
        leaderPhone: "",
        leaderEmail: "",
        leaderBranch: "",
        member2Name: "",
        member2Email: "",
        member2Phone: "",
        member3Name: "",
        member4Name: "",
      }); // Reset form
    } catch (error) {
      console.error("Error adding document: ", error);
      setMessage("❌ Registration Failed. Try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-center mb-4">Register for {formattedEventName}</h2>

      {message && (
        <p
          className={`text-center p-2 rounded ${
            message.startsWith("❌") ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
          }`}
        >
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Team Information */}
        <div>
          <label className="block font-semibold">Team Name:</label>
          <input
            type="text"
            name="teamName"
            value={formData.teamName}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Team ID:</label>
          <input
            type="text"
            name="teamID"
            value={formData.teamID}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Leader Information */}
        <div>
          <label className="block font-semibold">Leader's Name:</label>
          <input
            type="text"
            name="leaderName"
            value={formData.leaderName}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Leader's Phone:</label>
          <input
            type="tel"
            name="leaderPhone"
            value={formData.leaderPhone}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Leader's Email:</label>
          <input
            type="email"
            name="leaderEmail"
            value={formData.leaderEmail}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Leader's Branch:</label>
          <input
            type="text"
            name="leaderBranch"
            value={formData.leaderBranch}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Member 2 Information */}
        <div>
          <label className="block font-semibold">Member 2 Name:</label>
          <input
            type="text"
            name="member2Name"
            value={formData.member2Name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Member 2 Email:</label>
          <input
            type="email"
            name="member2Email"
            value={formData.member2Email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Member 2 Phone:</label>
          <input
            type="tel"
            name="member2Phone"
            value={formData.member2Phone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Member 3 Information */}
        <div>
          <label className="block font-semibold">Member 3 Name:</label>
          <input
            type="text"
            name="member3Name"
            value={formData.member3Name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Member 4 Information */}
        <div>
          <label className="block font-semibold">Member 4 Name:</label>
          <input
            type="text"
            name="member4Name"
            value={formData.member4Name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
