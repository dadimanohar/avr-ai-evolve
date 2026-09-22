import { Phone, MessageCircle } from "lucide-react";
import { business } from "@/content/site";

export function FloatingContact() {
  const whatsappUrl = `${business.whatsapp}?text=${encodeURIComponent(
    "Hello AVR Web Consulting, I would like to discuss your services."
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 md:bottom-8 md:right-8">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      >
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
      </a>
      <a
        href={business.phoneHref}
        aria-label="Call us"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
      </a>
    </div>
  );
}
