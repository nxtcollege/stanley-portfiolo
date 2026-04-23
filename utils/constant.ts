import { IconType } from "react-icons";
import { PiCertificateLight } from "react-icons/pi";
import { IoIosHeartEmpty } from "react-icons/io";
import { LuClock3 } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { SlGraduation } from "react-icons/sl";
import { BsBagCheck } from "react-icons/bs";
import { IoBookOutline } from "react-icons/io5";
import {
  LuActivity,
  LuHeartPulse,
  LuDumbbell,
  LuAlignCenter,
  LuBrain,
  LuUser,
  LuBaby,
  LuMonitor,
} from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { SlSocialInstagram } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { RiFacebookBoxLine } from "react-icons/ri";

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
  { icon: PiCertificateLight, title: "4+", subtitle: "Exposure" },
  { icon: IoIosHeartEmpty, title: "98%", subtitle: "success rate" },
  { icon: LuClock3, title: "24/7", subtitle: "emergency care" },
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

interface IPhysioServices {
  title: string;
  description: string;
  icon: IconType;
  items: Array<string>;
}
export const physiotherapyServices: IPhysioServices[] = [
  {
    title: "Home & Tele-Rehabilitation",
    description:
      "Convenient physiotherapy sessions delivered at home or remotely.",
    icon: LuMonitor,
    items: [
      "Virtual Consultations",
      "Home Visits",
      "Exercise Programs",
      "Progress Monitoring",
    ],
  },
  {
    title: "Injury Rehabilitation",
    description:
      "Comprehensive care for recovering from injuries, restoring strength, mobility, and function safely.",
    icon: LuActivity,
    items: [
      "Sports Injury Rehab",
      "Post-Surgical Recovery",
      "Muscle & Ligament Injuries",
      "Personalized Recovery Plans",
    ],
  },
  {
    title: "Pain Management",
    description:
      "Targeted treatments to reduce acute and chronic pain, improving comfort and daily function.",
    icon: LuHeartPulse,
    items: [
      "Back & Neck Pain",
      "Joint Pain Treatment",
      "Chronic Pain Therapy",
      "Manual Therapy",
    ],
  },
  {
    title: "Sports Physiotherapy",
    description:
      "Helping athletes recover, prevent injuries, and enhance performance effectively.",
    icon: LuDumbbell,
    items: [
      "Injury Prevention",
      "Performance Optimization",
      "Rehabilitation Programs",
      "Return-to-Sport Training",
    ],
  },
  {
    title: "Postural Correction",
    description:
      "Improving posture and alignment to reduce strain and enhance movement efficiency.",
    icon: LuAlignCenter,
    items: [
      "Posture Assessment",
      "Ergonomic Advice",
      "Spinal Alignment Therapy",
      "Corrective Exercises",
    ],
  },
  {
    title: "Neurological Rehabilitation",
    description:
      "Support for neurological conditions to regain movement, balance, and independence.",
    icon: LuBrain,
    items: [
      "Stroke Rehabilitation",
      "Balance Training",
      "Mobility Improvement",
      "Functional Exercises",
    ],
  },
  {
    title: "Geriatric Physiotherapy",
    description:
      "Care for older adults to maintain mobility, strength, and independence.",
    icon: LuUser,
    items: [
      "Fall Prevention",
      "Strength Training",
      "Joint Mobility",
      "Pain Relief Therapy",
    ],
  },
  {
    title: "Pediatric Physiotherapy",
    description:
      "Helping children improve movement, coordination, and physical development.",
    icon: LuBaby,
    items: [
      "Developmental Support",
      "Coordination Training",
      "Injury Recovery",
      "Movement Therapy",
    ],
  },
];

interface ISteps {
  phase: string;
  name: string;
  desc: string;
}

export const steps: ISteps[] = [
  {
    phase: "01",
    name: "Schedule",
    desc: "Book your appointment online or by phone at your convenience",
  },
  {
    phase: "02",
    name: "Consultation",
    desc: "Comprehensice evaluation and discussion of your health concerns",
  },
  {
    phase: "03",
    name: "Treatment plan",
    desc: "Personalized care plan tailored to your specific needs and goals",
  },
  {
    phase: "04",
    name: "Follow-up",
    desc: "Ongoing support and monitoring to ensure optimal health outcomes",
  },
];

export const contacts: IAboutIcon[] = [
  {
    icon: IoCallOutline,
    title: "Phone",
    subtitle: ["Line1: 08107005473", "Line2: 09019460491"],
  },
  {
    icon: TfiEmail,
    title: "Email",
    subtitle: ["Savealife.physiotherapyclinic@gmail.com"],
  },
  {
    icon: CiLocationOn,
    title: "Location",
    subtitle: ["Lagos State, Nigeria", "Ogun State, Nigeria "],
  },
  {
    icon: CiClock2,
    title: "Hours",
    subtitle: ["Mon-Fri: 8am-5pm", "Sat: 9am-2pm"],
  },
];

export const slides = [
  {
    imagebg: "/herobg1.jpg",
    heroimg: "/subhero2.webp",
    title: "Save a Life Physiotherapy",
    subtitle:
      "  We provide expert physiotherapy care focused on restoring movement, reducing pain, and improving your quality of life. Through personalized treatment and support, we help you recover faster and move confidently every day.",
  },
  {
    imagebg: "/herobg2.jpeg",
    heroimg: "/subhero3.jpg",
    title: "Your Recovery Starts Here",
    subtitle:
      "We deliver dedicated care aimed at restoring function, reducing pain, and improving your overall well-being. Through personalized therapy and expert guidance, we support your journey to full recovery and lasting strength.",
  },
  {
    imagebg: "/hero3.jpg",
    heroimg: "/subhero1.png",
    title: "Relieve Pain. Restore Life",
    subtitle:
      "We provide targeted care to reduce pain, restore movement, and improve your quality of life. With personalized therapy and consistent support, we help you recover faster and return to your daily routine.",
  },
];

export const companyAbout = [
  {
    heading: "Expert Care for Your Recovery and Well-Being",
    text: "At Save a Life Physiotherapy, we are committed to helping individuals recover from injuries, reduce pain, and restore movement through expert, personalized care. Our approach focuses on improving your quality of life by addressing the root cause of your condition, not just the symptoms.",
    image: "/abimage1.avif",
  },
  {
    heading: "Modern Techniques. Tailored for You.",
    text: "We combine modern physiotherapy techniques with a patient-centered approach, ensuring that every treatment plan is tailored to your unique needs and recovery goals. Whether you are dealing with a recent injury or a long-term condition, we are here to support your journey to better health.",
    image: "/abimage2.jpg",
  },
  {
    heading: "Specialized Care, Trusted Professionals",
    text: "Our team of licensed and experienced physiotherapists specializes in a wide range of rehabilitation services, including musculoskeletal, neurological, and sports injury recovery. We are dedicated to providing safe, effective, and compassionate care at every stage of your treatment.",
    image: "/abimage3.png",
  },
  {
    heading: "Your Recovery Is Our Priority",
    text: "At Save a Life Physiotherapy, your recovery is our priority. We work closely with you to help you regain strength, restore mobility, and return to your daily activities with confidence.",
    image: "/abimage4.jpg",
  },
];

interface ISocials {
  link: string;
  icon: IconType;
  color: string;
}

export const socialFooter: ISocials[] = [
  {
    link: "https://www.instagram.com/sal_physiotherapy_clinic/profilecard/?igsh=MWt3azFxc2o2MWExMQ==",
    icon: SlSocialInstagram,
    color: "red-500",
  },
  {
    link: "https://x.com/SaveALifePhysio?t=waR2kms5NXmyOzia0nW-zQ&s=09",
    icon: FaXTwitter,
    color: "black",
  },
  {
    link: "https://www.facebook.com/share/1AzgHndvsr/",
    icon: RiFacebookBoxLine,
    color: "blue-500",
  },
];

export const appointmentLists: string[] = [
  "Low back pain",
  "Stroke",
  "Parkinsons disease",
  "Bell's palsy",
  "Neck pain",
  "Online consultation",
  "Post-Op Rehabilitation ",
  "Pre-Op Rehabilitation",
  "Joint pain",
  "Others",
];
