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
            Contact us directly via WhatsApp or call.
          </AlertDialogDescription>
        </AlertDialogHeader>

        {/* Quick Contact Options */}
        <div className="grid grid-cols-2 gap-3">
          <Button
            variant="outline"
            className="flex gap-2 items-center"
            onClick={() => window.open("https://wa.me/917411011354", "_blank")}
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
