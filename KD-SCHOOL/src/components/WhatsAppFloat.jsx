import { schoolInfo } from "../data/schoolData";
import WhatsAppIcon from "./icons/WhatsAppIcon";

export default function WhatsAppFloat() {
  const message = encodeURIComponent(
    "Hello, I would like to inquire about admission at K.D.Public School, Fazilnagar."
  );

  return (
    <a
      href={`https://wa.me/${schoolInfo.contact.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-0"
    >
      <span className="mr-0 max-w-0 overflow-hidden whitespace-nowrap rounded-full bg-white px-0 py-2 text-sm font-semibold text-green-700 shadow-lg transition-all duration-300 group-hover:mr-3 group-hover:max-w-xs group-hover:px-4">
        Chat with us
      </span>

      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition duration-300 hover:scale-110 hover:shadow-xl">
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-90" />
        <WhatsAppIcon className="relative h-7 w-7" />
      </span>
    </a>
  );
}
