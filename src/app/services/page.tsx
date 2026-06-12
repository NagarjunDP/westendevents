import { Metadata } from "next";
import { ServicesClient } from "./ServicesClient";

export const metadata: Metadata = {
  title: "Premium Event Services | Westend Events Lonavla",
  description: "Explore our in-house luxury event services: Wedding Decor, Sound & SFX, Artists & Anchors, and Full Event Management across Maharashtra and India.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
