import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Profile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    profileImage: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle profile update logic here
    console.log("Updated Profile:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-96 p-6 shadow-lg bg-white rounded-2xl">
        <CardContent className="flex flex-col items-center">
          <img
            src={formData.profileImage || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-32 h-32 rounded-full mb-4"
          />
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div>
              <Label>First Name</Label>
              <Input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </div>
            <div>
              <Label>Last Name</Label>
              <Input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>
            <div>
              <Label>Email</Label>
              <Input type="email" name="email" value={formData.email} onChange={handleChange} required disabled />
            </div>
            <div>
              <Label>Change Password</Label>
              <Input type="password" name="password" value={formData.password} onChange={handleChange} />
            </div>
            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">Update Profile</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
