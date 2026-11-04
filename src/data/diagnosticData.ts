import { DiagnosticService, Doctor } from '../types';

export const CENTRE_INFO = {
  name: "Dr. Solanki’s Diagnostic Centre",
  shortName: "Dr. Solanki's Diagnostics",
  subtitle: "Radiology and Pathology Centre",
  address: "G-56, Pocket G, Sarita Vihar, New Delhi, Delhi 110076, India",
  locality: "Sarita Vihar, New Delhi",
  phone: "+91 9654002800",
  rawPhone: "919654002800",
  phoneDisplay: "+91 9654002800",
  phoneTel: "tel:+919654002800",
  whatsappUrl: "https://wa.me/919654002800",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=G-56%2C+Pocket+G%2C+Sarita+Vihar%2C+New+Delhi%2C+Delhi+110076",
  mapsEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.579482813521!2d77.29177577579698!3d28.522285175725206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce6ae2d19e917%3A0x7d6b38965f3bc7a1!2sPocket%20G%2C%20Sarita%20Vihar%2C%20New%20Delhi%2C%20Delhi%20110076!5e0!3m2!1sen!2sin!4v1709400000000!5m2!1sen!2sin",
  timingsNote: "Please call us to confirm current timings and appointment availability.",
  headline: "Clarity in Diagnosis. Confidence in Care.",
  supportingText: "Comprehensive diagnostic services with a patient-first approach. From advanced ultrasound imaging to pathology investigations, we’re here to support your healthcare journey.",
  aboutText: "Dr. Solanki’s Diagnostic Centre is a Radiology and Pathology Centre located in Sarita Vihar, New Delhi. Our centre offers a range of diagnostic investigations with a focus on professional expertise, patient comfort, and supporting informed clinical decisions."
};

export const DOCTORS: Doctor[] = [
  {
    id: "dr-priyanka-rana",
    name: "Dr. Priyanka Rana",
    degrees: "MBBS, MD (Radiodiagnosis)",
    role: "Senior Consultant Radiologist",
    department: "Radiology & Imaging",
    summary: "Senior Consultant Radiologist providing clinical diagnostic imaging, specialized whole-body sonography, obstetrics and gynaecology scans, and advanced vascular Doppler evaluations.",
    focusAreas: [
      "Whole Body & Abdominal Ultrasound",
      "Obstetrics & Gynaecology (OBGY) Imaging",
      "3D, 4D & 5D Volumetric Scans",
      "Color Doppler & Vascular Imaging"
    ],
    gender: "female"
  },
  {
    id: "dr-vikrant-solanki",
    name: "Dr. Vikrant Solanki",
    degrees: "MBBS, MD (Pathology)",
    role: "Senior Consultant Pathologist",
    department: "Pathology & Laboratory Medicine",
    summary: "Senior Consultant Pathologist overseeing comprehensive laboratory diagnostics, clinical haematology, biochemistry, cytopathology, and accurate routine and specialized diagnostic investigations.",
    focusAreas: [
      "Clinical Haematology & Blood Work",
      "Biochemistry & Metabolic Panels",
      "Cytology & Histopathological Review",
      "Routine & Preventive Health Investigations"
    ],
    gender: "male"
  }
];

export const SERVICES: DiagnosticService[] = [
  {
    id: "whole-body-ultrasound",
    name: "Whole Body Ultrasound",
    category: "Radiology",
    shortDescription: "Ultrasound imaging for assessment of organs and structures as advised by your doctor.",
    detailedOverview: "Non-invasive, radiation-free high-frequency sound wave imaging to assess abdominal organs, pelvic structures, kidneys, liver, gallbladder, thyroid, and soft tissues with diagnostic clarity.",
    preparationNotes: [
      "For Abdomen/Pelvis: 4-6 hours of fasting is recommended prior to the examination.",
      "For Pelvic/KUB ultrasound: Maintain a comfortably full bladder by drinking water 45-60 minutes prior.",
      "Wear comfortable, loose two-piece clothing.",
      "Bring doctor's prescription and prior ultrasound reports."
    ],
    fastingRequired: true,
    typicalDuration: "15 - 25 minutes",
    iconName: "Scan",
    imageUrl: "/src/assets/images/service_whole_body_ultrasound_1793706187888.jpg"
  },
  {
    id: "obgy-ultrasound",
    name: "OBGY Ultrasound",
    category: "Radiology",
    shortDescription: "Obstetric and gynaecological ultrasound examinations for women’s health.",
    detailedOverview: "Dedicated clinical ultrasound imaging covering follicular monitoring, early pregnancy assessment, anomaly screenings, pelvic health, and maternal-foetal well-being under experienced supervision.",
    preparationNotes: [
      "Follow doctor's advice on full bladder requirement depending on gestational stage.",
      "Carry your antenatal records and previous scan reports.",
      "Dress in comfortable attire for effortless examination."
    ],
    fastingRequired: false,
    typicalDuration: "20 - 30 minutes",
    iconName: "Baby",
    imageUrl: "/src/assets/images/service_obgy_ultrasound_1793706188092.jpg"
  },
  {
    id: "3d-4d-5d-scans",
    name: "3D, 4D and 5D Scans",
    category: "Radiology",
    shortDescription: "Advanced volumetric ultrasound imaging, subject to clinical indication.",
    detailedOverview: "High-resolution real-time volumetric rendering allowing enhanced clinical evaluation of foetal anatomy, surface details, and structural nuances as advised by your obstetrician.",
    preparationNotes: [
      "Performed strictly in compliance with applicable clinical norms and medical indications.",
      "Hydration with water prior to the scan helps optimize acoustic window.",
      "Prior appointment booking recommended."
    ],
    fastingRequired: false,
    typicalDuration: "25 - 35 minutes",
    iconName: "Layers",
    imageUrl: "/src/assets/images/service_3d_4d_5d_scans_1793706207039.jpg"
  },
  {
    id: "color-doppler",
    name: "Color Doppler",
    category: "Radiology",
    shortDescription: "Diagnostic imaging to evaluate blood flow in vessels and selected organs.",
    detailedOverview: "Specialized vascular ultrasound technique assessing the speed and direction of blood flow through arteries, veins, carotid channels, peripheral limbs, and renal vasculature.",
    preparationNotes: [
      "Renal Doppler: Overnight fasting recommended.",
      "Limb/Carotid Doppler: No special fasting required.",
      "Please carry all prescription slips and vascular medical records."
    ],
    fastingRequired: false,
    typicalDuration: "20 - 40 minutes",
    iconName: "Activity",
    imageUrl: "/src/assets/images/service_color_doppler_1793706188517.jpg"
  },
  {
    id: "digital-x-ray",
    name: "Digital X-Ray",
    category: "Radiology",
    shortDescription: "Digital radiography for diagnostic evaluation.",
    detailedOverview: "Low-dose modern digital X-ray system providing instantaneous, high-resolution radiographic imaging for bones, joints, spine, chest, and structural evaluations.",
    preparationNotes: [
      "No fasting required for standard skeletal or chest X-rays.",
      "Remove metallic items, jewellery, belts, and zippers from the examination area.",
      "Female patients must inform the staff if there is any possibility of pregnancy."
    ],
    fastingRequired: false,
    typicalDuration: "10 - 15 minutes",
    iconName: "FileText",
    imageUrl: "/src/assets/images/digital_radiology_suite_1793704560355.jpg"
  },
  {
    id: "ecg",
    name: "ECG",
    category: "Cardiology",
    shortDescription: "Electrocardiogram recording to assess the electrical activity of the heart.",
    detailedOverview: "Quick and painless 12-lead recording that captures the electrical rhythm of the heart to identify arrhythmias, conduction abnormalities, and cardiac status.",
    preparationNotes: [
      "No fasting required. Avoid heavy exercise just before the test.",
      "Wear comfortable clothing that allows easy placement of chest leads.",
      "Avoid applying greasy body lotions or moisturizers on the chest on test day."
    ],
    fastingRequired: false,
    typicalDuration: "10 minutes",
    iconName: "HeartPulse",
    imageUrl: "/src/assets/images/service_ecg_cardiac_1793706189195.jpg"
  },
  {
    id: "2d-echo",
    name: "2D Echo",
    category: "Cardiology",
    shortDescription: "Echocardiography to evaluate heart structure and function.",
    detailedOverview: "Non-invasive cardiac ultrasound that produces detailed live moving images of heart chambers, valves, ejection fraction, and cardiac muscle mobility.",
    preparationNotes: [
      "No special fasting needed for standard transthoracic echocardiogram.",
      "Bring recent ECG records, prescription, and cardiology consultation notes.",
      "Wear two-piece loose clothing."
    ],
    fastingRequired: false,
    typicalDuration: "20 - 30 minutes",
    iconName: "Heart",
    imageUrl: "/src/assets/images/service_echo_echocardiography_1793706188639.jpg"
  },
  {
    id: "all-pathology-services",
    name: "All Pathology Services",
    category: "Pathology",
    shortDescription: "Laboratory testing and pathology investigations as prescribed by your clinician.",
    detailedOverview: "Comprehensive clinical diagnostic pathology including complete blood counts (CBC), lipid profile, liver function (LFT), kidney function (KFT), HbA1c, thyroid profiles, urine routine, and microbiological investigations.",
    preparationNotes: [
      "Fasting lipid profile, blood sugar, and thyroid tests often require 8-10 hours overnight fasting (water is allowed).",
      "Do not skip prescribed medications unless advised by your treating physician.",
      "Morning sample collection is recommended for optimal accuracy."
    ],
    fastingRequired: true,
    typicalDuration: "10 minutes for sample collection",
    iconName: "Microscope",
    imageUrl: "/src/assets/images/pathology_lab_microscope_1793704561599.jpg"
  }
];

export const TRUST_STRIP_ITEMS = [
  {
    title: "Radiology Services",
    description: "Ultrasound, Color Doppler & Digital X-Ray",
    icon: "Scan"
  },
  {
    title: "Pathology Investigations",
    description: "Comprehensive clinical lab testing",
    icon: "FlaskConical"
  },
  {
    title: "Experienced Consultants",
    description: "MD Radiologist & MD Pathologist led",
    icon: "Stethoscope"
  },
  {
    title: "Convenient Location",
    description: "Pocket G, Sarita Vihar, New Delhi",
    icon: "MapPin"
  }
];
