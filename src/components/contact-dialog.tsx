"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { FaWhatsapp } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Phone } from "lucide-react";

interface ContactDialogProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export const ContactDialog = ({ open, setOpen }: ContactDialogProps) => {
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle>Contact Us</AlertDialogTitle>
          <AlertDialogDescription>
            Fill out the form or reach us directly via WhatsApp or call.
          </AlertDialogDescription>
        </AlertDialogHeader>

        {/* Contact Form */}
        <form className="space-y-4 pt-2">
          <Input placeholder="Your Name" />
          <Input type="email" placeholder="Email Address" />
          <Textarea placeholder="Your Message" rows={3} />
          <Button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-600 cursor-pointer"
          >
            Send Message
          </Button>
        </form>

        {/* OR Divider */}
        <div className="relative my-4 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t" />
          </div>
          <span className="relative bg-white px-2 text-sm text-gray-500">
            or
          </span>
        </div>

        {/* Quick Contact Options */}
        <div className="grid grid-cols-2 gap-3">
          <Button
            variant="outline"
            className="flex gap-2 items-center"
            onClick={() => window.open("https://wa.me/919999999999", "_blank")}
          >
            <FaWhatsapp className="size-4 text-green-500" />
            WhatsApp
          </Button>
          <Button
            variant="outline"
            className="flex gap-2 items-center"
            onClick={() => (window.location.href = "tel:+9108971576866")}
          >
            <Phone className="h-4 w-4" />
            Call Now
          </Button>
        </div>

        <AlertDialogFooter className="pt-4">
          <AlertDialogCancel className="w-full text-rose-500 hover:text-rose-500">
            Close
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
