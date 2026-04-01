import { IconType } from "react-icons";
import { PiCertificateLight } from "react-icons/pi";
import { IoIosHeartEmpty } from "react-icons/io";
import { LuClock3 } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { SlGraduation } from "react-icons/sl";
import { BsBagCheck } from "react-icons/bs";
import { IoBookOutline } from "react-icons/io5";

export const navLinks: string[] = [
  "About",
  "Service",
  "Testimonies",
  "Contact",
];

interface IHeroIcon {
  icon: IconType;
  title: string;
  subtitle: string | string[];
}
interface IAboutIcon {
  icon: IconType;
  title: string;
  subtitle: string[];
}
export const heroIcons: IHeroIcon[] = [
  { icon: GoPeople, title: "200+", subtitle: "patients served" },
  { icon: PiCertificateLight, title: "4+", subtitle: "years of experience" },
  { icon: IoIosHeartEmpty, title: "98%", subtitle: "success rate" },
  { icon: LuClock3, title: "24/7", subtitle: "emergency care" },
];

export const aboutIcons: IAboutIcon[] = [
  {
    icon: SlGraduation,
    title: "Education",
    subtitle: [
      "University of Nigeria",
      "Intern at Igbobi",
      "Unth clinical learning",
    ],
  },
  {
    icon: BsBagCheck,
    title: "Experience",
    subtitle: [
      "3 years in stroke management",
      "advanced in orthopedic",
      "post surgery physiotherapy",
    ],
  },
  {
    icon: PiCertificateLight,
    title: "Certification",
    subtitle: [
      "Nigeria certified physiotherapist",
      "Certified orthopedic physiotherapist",
      "In patients specialist",
    ],
  },
  {
    icon: IoBookOutline,
    title: "Publications",
    subtitle: [
      "10+ peer-reviewed articles",
      "10+ peer-reviewed articles",
      "10+ peer-reviewed articles",
    ],
  },
];

export const aboutDownDiv: { title: string; subtitle: string }[] = [
  {
    title: "Compassionate care",
    subtitle:
      "Every patient deserves empathy, respect and personalized attention throughout their healthcare journey",
  },
  {
    title: "Evidence-Based Medicine",
    subtitle:
      "Staying current with the latest research to provide the most effective, scientifically-proven treatments",
  },
  {
    title: "Holistic Approach",
    subtitle:
      "Addressing not just symptoms but the whole person mind, body and lifestyle factors that impact health",
  },
  {
    title: "Patient Education",
    subtitle:
      "Empowering patients with knowledge and understanding to make informed decisions about their health",
  },
];
