// medicalSchemes.js
const medicalSchemes = [
  // 1
  {
    title: "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY)",
    description:
      "Flagship national health insurance providing cashless hospitalisation cover (up to ₹5 lakh per family per year) for secondary & tertiary care.",
    benefitAmount: 500000,
    eligibility: "Families identified by SECC / state-specific beneficiary lists",
    location: "Pan India",
    country: "India",
    category: "General Health Insurance",
    infoLink: "https://pmjay.gov.in/",
  },

  // 2
  {
    title: "Employees' State Insurance Scheme (ESIS / ESIC)",
    description:
      "Comprehensive social security and medical care for workers in covered establishments and their dependents.",
    benefitAmount: "Full medical care + statutory cash benefits",
    eligibility: "Employees and dependents in ESI-covered factories/establishments (income limits apply)",
    location: "Pan India (ESI-covered areas)",
    country: "India",
    category: "General Health Insurance / Social Security",
    infoLink: "https://www.esic.gov.in/",
  },

  // 3
  {
    title: "Pradhan Mantri Suraksha Bima Yojana (PMSBY)",
    description:
      "Accident insurance scheme providing coverage for accidental death and disability.",
    benefitAmount: 200000,
    eligibility: "Indian residents aged 18–70 with a savings bank account",
    location: "Pan India",
    country: "India",
    category: "Accident Insurance",
    infoLink: "https://jansuraksha.gov.in/Forms-PMSBY.aspx",
  },

  // 4
  {
    title: "Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)",
    description:
      "Affordable life insurance scheme offering nominal-term life cover.",
    benefitAmount: 200000,
    eligibility: "Indian residents aged 18–50 with a savings bank account",
    location: "Pan India",
    country: "India",
    category: "Life Insurance",
    infoLink: "https://jansuraksha.gov.in/Forms-PMJJBY.aspx",
  },

  // 5
  {
    title: "Rashtriya Swasthya Bima Yojana (RSBY) / Successor State Schemes",
    description:
      "Earlier national-level health insurance for BPL & unorganised sector workers; many states now run successor schemes or integrate benefits with PM-JAY.",
    benefitAmount: "Varies by scheme/state",
    eligibility: "BPL families / targeted vulnerable groups",
    location: "Pan India / state-specific",
    country: "India",
    category: "General Health Insurance",
    infoLink: "https://labour.gov.in/rsby",
  },

  // 6
  {
    title: "National Programme for Prevention & Control of Non-Communicable Diseases (NP-NCD / NPCDCS)",
    description:
      "National programme for prevention, screening and management of NCDs (cancer, diabetes, CVDs, stroke), plus related initiatives like PMNDP.",
    benefitAmount: "Screening & subsidised treatment; programme benefits vary",
    eligibility: "General population with emphasis on high-risk groups",
    location: "Pan India",
    country: "India",
    category: "Disease-Specific (NCDs)",
    infoLink: "https://main.mohfw.gov.in/Major-Programmes/non-communicable-diseases-injury-trauma/npcdcs",
  },

  // 7
  {
    title: "Pradhan Mantri National Dialysis Programme (PMNDP)",
    description:
      "Provides dialysis services and support at district hospitals and identified centres to reduce out-of-pocket costs for CKD patients.",
    benefitAmount: "Free/subsidised dialysis sessions (state-run facilities vary)",
    eligibility: "Patients with end-stage kidney disease; state criteria apply",
    location: "Pan India (district hospital rollouts)",
    country: "India",
    category: "Disease-Specific (Kidney)",
    infoLink: "https://pmjay.gov.in/pmn-dialysis",
  },

  // 8
  {
    title: "National TB Elimination Programme (NTEP)",
    description:
      "Free diagnosis, treatment and nutritional support for TB patients under national elimination efforts.",
    benefitAmount: "Free medicines; nutritional support schemes (monetary/in-kind) vary",
    eligibility: "All TB patients registered under NTEP",
    location: "Pan India",
    country: "India",
    category: "Disease-Specific (TB)",
    infoLink: "https://tbcindia.gov.in/",
  },

  // 9
  {
    title: "National Programme for Control of Blindness & Visual Impairment (NPCBVI)",
    description:
      "Initiatives including subsidised/free cataract surgery, provision of spectacles and community eye care.",
    benefitAmount: "Free/low-cost eye care services",
    eligibility: "All, with focus on vulnerable & rural populations",
    location: "Pan India",
    country: "India",
    category: "Disease-Specific (Eye Care)",
    infoLink: "https://npcbvi.gov.in/",
  },

  // 10
  {
    title: "Rashtriya Bal Swasthya Karyakram (RBSK)",
    description:
      "Child health screening programme providing early detection and treatment (4 Ds: Defects, Diseases, Deficiencies, Developmental delays).",
    benefitAmount: "Free screening & treatment for children",
    eligibility: "Children 0–18 years",
    location: "Pan India",
    country: "India",
    category: "Disease-Specific (Child Health)",
    infoLink: "https://rbsk.gov.in/",
  },

  // 11
  {
    title: "Aarogyasri / YSR Aarogyasri (AP/Telangana)",
    description:
      "State-run financial protection for catastrophic illnesses offering cashless tertiary care for eligible families.",
    benefitAmount: "Varies by state (often lakhs per family)",
    eligibility: "State-defined low-income families / ration card holders",
    location: "Andhra Pradesh, Telangana (state-specific variants exist)",
    country: "India",
    category: "State Health Insurance",
    infoLink: "https://aarogyasri.telangana.gov.in/",
  },

  // 12
  {
    title: "Mahatma Jyotiba Phule Jan Arogya Yojana (Jeevandayee) – Maharashtra",
    description:
      "Maharashtra scheme providing financial protection for tertiary treatment to eligible families.",
    benefitAmount: "Varies (state slab-based)",
    eligibility: "State’s eligible families (ration card holders / other criteria)",
    location: "Maharashtra",
    country: "India",
    category: "State Health Insurance",
    infoLink: "https://www.jeevandayee.gov.in/",
  },

  // 13
  {
    title: "Mukhyamantri Amrutum (MA) – Gujarat",
    description:
      "Gujarat’s tertiary care coverage for families below poverty line with cashless treatment up to state-defined limits.",
    benefitAmount: 300000,
    eligibility: "BPL / state-eligible families",
    location: "Gujarat",
    country: "India",
    category: "State Health Insurance",
    infoLink: "https://www.magujarat.com/",
  },

  // 14
  {
    title: "Karunya Arogya Suraksha Padhathi (KASP) / Karunya Benevolent Fund – Kerala",
    description:
      "Kerala initiatives offering cashless hospitalisation and special financial assistance for critical illness.",
    benefitAmount: "Varies (Karunya fund grants up to specific caps)",
    eligibility: "Kerala low-income families / patients meeting criteria",
    location: "Kerala",
    country: "India",
    category: "State Health Insurance / Benevolent Fund",
    infoLink: "https://karunya.kerala.gov.in/",
  },

  // 15
  {
    title: "Biju Swasthya Kalyan Yojana (BSKY) – Odisha",
    description:
      "State scheme offering health insurance up to ₹5 lakh per family (with higher limits for women) for eligible families.",
    benefitAmount: 500000,
    eligibility: "Low-income families in Odisha",
    location: "Odisha",
    country: "India",
    category: "State Health Insurance",
    infoLink: "https://bsky.odisha.gov.in/",
  },

  // 16
  {
    title: "Swasthya Sathi – West Bengal",
    description:
      "West Bengal’s universal family floater health insurance programme providing cashless hospitalisation cover per family.",
    benefitAmount: 500000,
    eligibility: "Resident families of West Bengal (smart card holders)",
    location: "West Bengal",
    country: "India",
    category: "State Health Insurance",
    infoLink: "https://swasthyasathi.gov.in/",
  },

  // 17
  {
    title: "Yeshasvini Cooperative Farmers Health Care Scheme – Karnataka",
    description:
      "Low-cost, cooperative-based insurance for farmers covering specified procedures and hospitalisation.",
    benefitAmount: 200000,
    eligibility: "Member farmers in eligible cooperatives",
    location: "Karnataka",
    country: "India",
    category: "Cooperative / Community Health Insurance",
    infoLink: "https://yeshasvini.kar.nic.in/",
  },

  // 18
  {
    title: "Mukhyamantri Chiranjeevi Swasthya Bima Yojana – Rajasthan",
    description:
      "Rajasthan’s scheme providing high-value cover for families for secondary & tertiary care.",
    benefitAmount: 1000000,
    eligibility: "State residents (scheme registration required)",
    location: "Rajasthan",
    country: "India",
    category: "State Health Insurance",
    infoLink: "https://chiranjeevi.rajasthan.gov.in/",
  },

  // 19
  {
    title: "Ayushman Bharat Digital Mission (ABDM)",
    description:
      "Digital health infrastructure initiative enabling unique health IDs, interoperability, and digital records to improve access to services.",
    benefitAmount: "Digital health benefits (enables delivery, not cash benefit)",
    eligibility: "All Indian residents (voluntary enrolment for Health ID)",
    location: "Pan India",
    country: "India",
    category: "Digital Health Infrastructure",
    infoLink: "https://abdm.gov.in/",
  },

  // 20
  {
    title: "Chief Minister’s Comprehensive Health Insurance Scheme (CMCHIS) – Tamil Nadu",
    description:
      "Tamil Nadu government scheme offering cashless treatment for secondary and tertiary care with state-specific benefit slabs.",
    benefitAmount: 500000,
    eligibility: "Eligible low-income families of Tamil Nadu",
    location: "Tamil Nadu",
    country: "India",
    category: "State Health Insurance",
    infoLink: "https://www.cmchistn.com/",
  },

  // 21
  {
    title: "Dr. YSR Aarogyasri Health Scheme – Andhra Pradesh",
    description:
      "State programme offering cashless coverage for tertiary illnesses to eligible BPL families.",
    benefitAmount: 500000,
    eligibility: "Eligible AP families (state-defined)",
    location: "Andhra Pradesh",
    country: "India",
    category: "State Health Insurance",
    infoLink: "https://ysraarogyasri.ap.gov.in/",
  },

  // 22
  {
    title: "Chief Minister’s Health Insurance Scheme (Ayushman Assam)",
    description:
      "Assam’s implementation of central/state combination cover for eligible beneficiaries.",
    benefitAmount: 500000,
    eligibility: "Eligible Assam families",
    location: "Assam",
    country: "India",
    category: "State Health Insurance",
    infoLink: "https://ayushmanassam.in/",
  },

  // 23
  {
    title: "Mukhya Mantri Swasthya Bima Yojana (MMSBY) – Jharkhand",
    description:
      "Jharkhand’s state-level insurance providing cashless hospitalisation for vulnerable families.",
    benefitAmount: 500000,
    eligibility: "Low-income families in Jharkhand",
    location: "Jharkhand",
    country: "India",
    category: "State Health Insurance",
    infoLink: "https://mukhymantriswasthybima.jharkhand.gov.in/",
  },

  // 24
  {
    title: "Mukhyamantri Yojana – (State Cancer / Cancer Aid Funds)",
    description:
      "Many states run dedicated cancer aid funds or schemes to support diagnostics, chemo & surgery for cancer patients.",
    benefitAmount: "Varies by state",
    eligibility: "Cancer patients meeting state-specific criteria",
    location: "State-specific (check local health dept.)",
    country: "India",
    category: "Disease-Specific (Cancer)",
    infoLink: "https://main.mohfw.gov.in/ (search state cancer schemes)",
  },

  // 25
  {
    title: "National Programme for Prevention & Control of Deafness (NPPCD)",
    description:
      "Program for prevention, early detection and treatment of hearing impairment including hearing aids & surgeries where indicated.",
    benefitAmount: "Free/assisted hearing care & aids (program-level)",
    eligibility: "Children and adults with hearing impairment",
    location: "Pan India",
    country: "India",
    category: "Disease-Specific (Hearing)",
    infoLink: "https://main.mohfw.gov.in/Major-Programmes/non-communicable-diseases-injury-trauma/nppcd",
  },

  // 26
  {
    title: "National Mental Health Programme (NMHP)",
    description:
      "Policy & service provision to expand mental health care delivery at primary, district and specialist levels.",
    benefitAmount: "Free/subsidised mental health services in govt. facilities",
    eligibility: "All residents requiring services",
    location: "Pan India",
    country: "India",
    category: "Disease-Specific (Mental Health)",
    infoLink: "https://main.mohfw.gov.in/ (NMHP pages / state nodal links)",
  },

  // 27
  {
    title: "National Oral Health Programme (NOHP)",
    description:
      "Oral health promotion, school dental screening and subsidised dental care at public facilities.",
    benefitAmount: "Free/low-cost dental services depending on facility",
    eligibility: "General public, school children",
    location: "Pan India",
    country: "India",
    category: "Disease-Specific (Oral Health)",
    infoLink: "https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=332&lid=613",
  },

  // 28
  {
    title: "National Programme for Health Care of the Elderly (NPHCE)",
    description:
      "Specialised geriatric services and support for older adults in government health facilities.",
    benefitAmount: "Free/subsidised geriatric consultations & follow-ups",
    eligibility: "Senior citizens",
    location: "Pan India",
    country: "India",
    category: "Special Population (Elderly)",
    infoLink: "https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=324&lid=612",
  },

  // 29
  {
    title: "Janani Suraksha Yojana (JSY) / Maternal Health Schemes",
    description:
      "Cash incentive & service support for institutional deliveries to reduce maternal & neonatal mortality.",
    benefitAmount: "Cash incentives + maternal care services (varies by state)",
    eligibility: "Pregnant women meeting state criteria",
    location: "Pan India (state-implemented)",
    country: "India",
    category: "Maternal & Child Health",
    infoLink: "https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=1209&lid=137",
  },

  // 30
  {
    title: "National Programme for Prevention & Control of Fluids / Liver (includes NAFLD integration) - NP-NCD extension",
    description:
      "Part of NCD action including early diagnosis and management of liver-related NCDs; operational guidelines updated centrally.",
    benefitAmount: "Screening & management support (facility-dependent)",
    eligibility: "At-risk adults identified through screening",
    location: "Pan India",
    country: "India",
    category: "Disease-Specific (Liver / NAFLD)",
    infoLink: "https://main.mohfw.gov.in/",
  },

  // 31
  {
    title: "State Kidney Support Schemes (examples: Gujarat / Maharashtra / Karnataka initiatives)",
    description:
      "Many states run top-up/assistance programmes for kidney failure beyond PMNDP — dialysis subsidies, transplant grants, drug support.",
    benefitAmount: "Varies by state",
    eligibility: "CKD patients meeting state criteria",
    location: "State-specific",
    country: "India",
    category: "Disease-Specific (Kidney)",
    infoLink: "https://pmjay.gov.in/pmn-dialysis",
  },

  // 32
  {
    title: "Chief Minister’s Cancer Relief Fund / State Cancer Assistance",
    description:
      "State-level finance & grants to help patients needing cancer surgeries, radiotherapy, chemo where other cover is insufficient.",
    benefitAmount: "Grants vary per case & state",
    eligibility: "Cancer patients meeting means-test or doctor recommendation",
    location: "State-specific",
    country: "India",
    category: "Disease-Specific (Cancer)",
    infoLink: "https://main.mohfw.gov.in/ (check state health dept pages)",
  },

  // 33
  {
    title: "National Adolescent Health Programme (Rashtriya Kishor Swasthya Karyakram - RKSK)",
    description:
      "Comprehensive adolescent health services: nutrition, mental health, sexual & reproductive health and NCD prevention.",
    benefitAmount: "Programmatic services (free/assisted in govt. facilities)",
    eligibility: "Adolescents (10–19 yrs)",
    location: "Pan India",
    country: "India",
    category: "Preventive / Youth Health",
    infoLink: "https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=1207&lid=129",
  },

  // 34
  {
    title: "Musculoskeletal / Orthopaedic Support Schemes (state-level aids for joint replacement)",
    description:
      "Some states run subsidies/assistance for joint replacement or trauma care for eligible patients.",
    benefitAmount: "Varies (subsidies / cash assistance)",
    eligibility: "Eligible low-income patients as per state rules",
    location: "State-specific",
    country: "India",
    category: "Disease-Specific (Orthopaedic)",
    infoLink: "https://main.mohfw.gov.in/ (search state orthopaedic subsidy)",
  },

  // 35
  {
    title: "Universal Health Insurance Scheme (UHIS) – select state/central programs historically",
    description:
      "Earlier national initiatives/central support for BPL families—many replaced/merged into PM-JAY or state schemes.",
    benefitAmount: "Varies; legacy schemes often up to ₹30,000 or state-specific slabs",
    eligibility: "BPL families (historical/varies)",
    location: "Pan India / legacy",
    country: "India",
    category: "General Health Insurance (Legacy)",
    infoLink: "https://financialservices.gov.in/uhis",
  },

  // 36
  {
    title: "State Heart / Cardiac Assistance Schemes (examples exist in many states)",
    description:
      "Subsidies/coverage for cardiac surgeries and interventions for low-income patients (state-specific programs).",
    benefitAmount: "Varies by state",
    eligibility: "Eligible cardiac patients per state rules",
    location: "State-specific",
    country: "India",
    category: "Disease-Specific (Cardiac)",
    infoLink: "https://main.mohfw.gov.in/ (search state cardiac schemes)",
  },

  // 37
  {
    title: "National Tobacco Control Programme (NTCP) — cessation & control",
    description:
      "Support for tobacco control activities including cessation services, awareness and screening for oral cancers.",
    benefitAmount: "Programmatic service — counselling and treatment services",
    eligibility: "Tobacco users seeking cessation support",
    location: "Pan India",
    country: "India",
    category: "Preventive Health / NCD Control",
    infoLink: "https://main.mohfw.gov.in/",
  },

  // 38
  {
    title: "Mukhyamantri Sukh Arogya Yojana – Example state top-ups & emergency care funds",
    description:
      "Several states have emergency medical funds or top-up schemes for immediate hospitalisation costs.",
    benefitAmount: "Case-by-case disbursal; varies by state",
    eligibility: "State resident / emergency cases as per scheme rules",
    location: "State-specific",
    country: "India",
    category: "Emergency Medical Assistance",
    infoLink: "https://main.mohfw.gov.in/ (search state emergency medical funds)",
  },

  // 39
  {
    title: "Aam Aadmi Bima Yojana (AABY) / Rural Social Security Packages",
    description:
      "Insurance for rural landless households (death cover) often run by Department of Financial Services / states.",
    benefitAmount: 75000,
    eligibility: "Rural landless households (breadwinner)",
    location: "Pan India (rural-focused)",
    country: "India",
    category: "Rural Social Security / Insurance",
    infoLink: "https://financialservices.gov.in/aaby",
  },

  // 40
  {
    title: "State-led Eye Care Initiatives (e.g., free cataract camps & high-volume centres)",
    description:
      "Many states organise free cataract camps and maintain high-volume eye care centres for low-cost surgery.",
    benefitAmount: "Free/low-cost cataract surgery & vision rehab",
    eligibility: "Poor/priority groups as per state program",
    location: "State-specific",
    country: "India",
    category: "Disease-Specific (Eye Care)",
    infoLink: "https://npcbvi.gov.in/",
  },

  // 41
  {
    title: "Jan Arogya Mitra / State Helpdesk Schemes",
    description:
      "State-level helpdesk/assistance units that guide patients to entitlements, bookings and empanelled hospitals.",
    benefitAmount: "Navigation & facilitation services",
    eligibility: "All residents who require assistance (scheme-dependent)",
    location: "State / district health offices",
    country: "India",
    category: "Navigation / Assistance",
    infoLink: "https://pmjay.gov.in/ (state helpdesk links within NHA portals)",
  },

  // 42
  {
    title: "School Health Programmes (Ayushman Bharat - Health & Wellness Centres linkages)",
    description:
      "School health screening, immunisation drives and referral linkages under national/state programmes.",
    benefitAmount: "Screening, referral & preventive services",
    eligibility: "School-going children",
    location: "Pan India",
    country: "India",
    category: "Preventive / Child Health",
    infoLink: "https://ab-hwc.nhp.gov.in/ (Ayushman Bharat HWC network)",
  },

  // 43
  {
    title: "State Cancer Registries & Support (registry + patient aid programs)",
    description:
      "Registries track cancer incidence; some states offer direct patient aid / travel & treatment support.",
    benefitAmount: "Varies (registry is informational; aid varies by state)",
    eligibility: "Cancer patients / data contributors",
    location: "State-specific",
    country: "India",
    category: "Disease-Specific (Cancer Support)",
    infoLink: "https://main.mohfw.gov.in/",
  },

  // 44
  {
    title: "Chief Minister/State Transplant Support Schemes (organ transplant grants)",
    description:
      "Grants or subsidies for organ transplants for financially vulnerable patients in select states.",
    benefitAmount: "Part / full subsidy depending on scheme",
    eligibility: "Patients meeting state-defined means-test",
    location: "State-specific",
    country: "India",
    category: "Special Procedures (Transplant)",
    infoLink: "https://main.mohfw.gov.in/ (search state transplant schemes)",
  },

  // 45
  {
    title: "State-level Mental Health Support & Helplines",
    description:
      "Many states operate helplines, de-addiction and counselling centres funded through NMHP/NHM.",
    benefitAmount: "Counselling, referral & subsidised care",
    eligibility: "Residents needing mental health support",
    location: "State-specific",
    country: "India",
    category: "Disease-Specific (Mental Health)",
    infoLink: "https://main.mohfw.gov.in/",
  },

  // 46
  {
    title: "Tribal Health & Mobile Medical Units Schemes",
    description:
      "Mobile medical units and special tribal health programmes provide outreach clinical services and referral support.",
    benefitAmount: "Free outreach care & referrals",
    eligibility: "Tribal populations in notified areas",
    location: "State/tribal areas",
    country: "India",
    category: "Special Population (Tribal Health)",
    infoLink: "https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=1202&lid=120",
  },

  // 47
  {
    title: "Chief Minister Relief / Medical Aid Funds (state emergency grants)",
    description:
      "One-off grants for medical emergencies disbursed by state CM relief funds for needy applicants.",
    benefitAmount: "Case-by-case grant",
    eligibility: "State residents with medical emergencies & financial need",
    location: "State-specific",
    country: "India",
    category: "Emergency Medical Assistance",
    infoLink: "https://main.mohfw.gov.in/ (check specific state CM relief fund pages)",
  },

  // 48
  {
    title: "Maternal & Newborn Incentive / Transport Schemes (state additions)",
    description:
      "State additions to Janani Suraksha Yojana – transport reimbursement, maternal incentive top-ups.",
    benefitAmount: "Cash incentives / reimbursements (state-specific)",
    eligibility: "Pregnant women registered with state NHM",
    location: "State-specific",
    country: "India",
    category: "Maternal & Child Health",
    infoLink: "https://nhm.gov.in/",
  },

  // 49
  {
    title: "State-level Occupational Health Schemes (for miners/factory workers)",
    description:
      "Some states run occupational health programmes, screenings & treatment for industries with specific hazards.",
    benefitAmount: "Screening & treatment support",
    eligibility: "Workers in notified industries",
    location: "State-specific / industrial areas",
    country: "India",
    category: "Occupational Health",
    infoLink: "https://labour.gov.in/",
  },

  // 50
  {
    title: "State-specific Blood & Thalassemia Support Programmes",
    description:
      "Subsidies and support for blood transfusion services, thalassemia care and pediatric transfusion support.",
    benefitAmount: "Subsidised transfusions, chelation support subsidies (state-dependent)",
    eligibility: "Thalassemia major patients or transfusion-dependent patients per state criteria",
    location: "State-specific",
    country: "India",
    category: "Special Conditions (Blood Disorders)",
    infoLink: "https://main.mohfw.gov.in/",
  },

  // 51 (bonus)
  {
    title: "State-level Eye Camps & ENT Camps (seasonal outreach)",
    description:
      "District/state health departments run periodic outreach camps for cataract/ENT/other procedures for underserved populations.",
    benefitAmount: "Free screening & surgeries during camps",
    eligibility: "Local residents meeting camp criteria",
    location: "District / Block-level (state-run)",
    country: "India",
    category: "Outreach / Preventive",
    infoLink: "https://npcbvi.gov.in/",
  }
];

module.exports = { data: medicalSchemes };
