import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useState } from "react";

export function RegisterDialog() {
  const [username, setUsername] = useState("");
  const [profilePicture, setProfilePicture] = useState("");

  const createUser = async () => {
    try {
      const response = await axios.post("http://localhost:4000/users", {
        username: username,
        profilePicture: profilePicture,
      });

      if (response) {
        setUsername("");
        setProfilePicture("");
      }

      console.log(response.data, "response");
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"sm"}>Register</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Your Account (Refgister)</DialogTitle>
          <DialogDescription>Please fill in the form below to register your account.</DialogDescription>
        </DialogHeader>

        <form onSubmit={createUser} className="grid gap-4 py-4">
          <div>
            <Label>Username</Label>
            <Input
              type="text"
              required={true}
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <Label>Profile Picture</Label>
            <Input
              type="text"
              required={true}
              placeholder="Your Profile Picture URL"
              value={profilePicture}
              onChange={(e) => setProfilePicture(e.target.value)}
            />
          </div>


          <DialogFooter>
          <Button
            
            size={"sm"}
            type="submit"
           >
            Create an Acccount
          </Button>
        </DialogFooter>
        </form>

      
      </DialogContent>
    </Dialog>
  );
}
