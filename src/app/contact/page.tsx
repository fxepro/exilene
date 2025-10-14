import { Contact as ContactSection } from "@/components/sections/contact";

export const metadata = {
    title: "Contact Us - Exilene",
    description: "Get in touch with the Exilene team.",
};

export default function ContactPage() {
    return (
        <div className="py-24 sm:py-32">
            <ContactSection />
        </div>
    );
}
