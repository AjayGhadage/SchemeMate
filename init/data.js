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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
    infoLink: "https://npcbvi.gov.in/",
  },

  // 41
  {
    title: "Jan Arogya Mitra / State Helpdesk Schemes",
    description:
      "State-level helpdesk/assistance units that guide patients to entitlements, bookings and empanelled hospitals.",
    benefitAmount: "Navigation & facilitation services",
    eligibility: "All residents who require assistance (scheme-dependent)",
    location: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
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
    category: "Medical",
    infoLink: "https://npcbvi.gov.in/",
  },
  {
    title: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
    description:
      "Direct income support providing ₹6,000 per year in three equal installments to all eligible landholding farmer families.",
    benefitAmount: 6000,
    eligibility: "All landholding farmer families; excludes income taxpayers and institutional holders.",
    location: "Pan India",
    country: "India",
    category: "Farmer",
    infoLink: "https://pmkisan.gov.in/",
  },
  {
    title: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    description:
      "Provides affordable crop insurance against losses due to floods, droughts, pests, and diseases with government premium subsidy.",
    benefitAmount: "Full crop insurance cover (premium: 2% Kharif, 1.5% Rabi, 5% horticulture)",
    eligibility: "Farmers cultivating notified crops in notified areas",
    location: "Pan India",
    country: "India",
    category: "Farmer",
    infoLink: "https://pmfby.gov.in/",
  },
  {
    title: "Kisan Credit Card (KCC) Scheme",
    description:
      "Facilitates easy and affordable credit access for cultivation and allied activities.",
    benefitAmount: "Up to ₹3 lakh at 4% effective interest (with timely repayment)",
    eligibility: "All farmers, including animal husbandry and fisheries sectors",
    location: "Pan India",
    country: "India",
    category: "Farmer",
    infoLink: "https://agricoop.gov.in/",
  },
  {
    title: "Pradhan Mantri Krishi Sinchai Yojana (PMKSY)",
    description:
      "Ensures irrigation access to every farm through micro-irrigation and watershed projects.",
    benefitAmount: "Subsidy up to 55% for small farmers (more for NE States)",
    eligibility: "Farmers implementing water-efficient irrigation",
    location: "Pan India",
    country: "India",
    category: "Farmer",
    infoLink: "https://pmksy.gov.in/",
  },
  {
    title: "Rashtriya Krishi Vikas Yojana – RAFTAAR",
    description:
      "Funds agricultural infrastructure, value chain startups, and state-led agri innovation.",
    benefitAmount: "Grants up to ₹25 lakh for agri-startups and incubation projects",
    eligibility: "FPOs, startups, cooperatives, and state agriculture departments",
    location: "Pan India",
    country: "India",
    category: "Farmer",
    infoLink: "https://rkvy.nic.in/",
  },
  {
    title: "Sub-Mission on Agricultural Mechanization (SMAM)",
    description:
      "Offers subsidies to farmers on tractors, combine harvesters, and precision farming tools.",
    benefitAmount: "Farm power subsidy up to 50% on equipment value",
    eligibility: "Small/marginal farmers and women farmers get higher priority",
    location: "Pan India",
    country: "India",
    category: "Farmer",
    infoLink: "https://agricoop.gov.in/",
  },
  {
    title: "Soil Health Card Scheme",
    description:
      "Issues soil nutrient information to promote rational fertilizer use and crop selection.",
    benefitAmount: "Free soil testing and crop-based recommendations",
    eligibility: "All farmers with cultivable land",
    location: "Pan India",
    country: "India",
    category: "Farmer",
    infoLink: "https://soilhealth.dac.gov.in/",
  },
  {
    title: "Paramparagat Krishi Vikas Yojana (PKVY)",
    description:
      "Supports organic farming clusters and helps farmers access certification and markets.",
    benefitAmount: "₹31,500 per hectare over 3 years",
    eligibility: "Cluster-based organic farmer groups",
    location: "Pan India",
    country: "India",
    category: "Farmer",
    infoLink: "https://pgsindia-ncof.gov.in/",
  },
  {
    title: "National Agriculture Market (e-NAM)",
    description:
      "Creates an online trading platform to link farmers and buyers for better price discovery.",
    benefitAmount: "Pan-India market access via 1,000+ mandis",
    eligibility: "Farmers and FPOs trading through APMCs",
    location: "Pan India",
    country: "India",
    category: "Farmer",
    infoLink: "https://enam.gov.in/web/",
  },
  {
    title: "Agriculture Infrastructure Fund (AIF)",
    description:
      "Provides medium to long-term debt financing for post-harvest infrastructure creation.",
    benefitAmount: "Interest subvention on loans up to ₹2 crore per project",
    eligibility: "FPOs, cooperatives, agri-entrepreneurs, startups",
    location: "Pan India",
    country: "India",
    category: "Farmer",
    infoLink: "https://agriinfra.dac.gov.in/",
  },
  {
    title: "Pradhan Mantri Matsya Sampada Yojana (PMMSY)",
    description:
      "Comprehensive scheme for fisheries and aquaculture development across India.",
    benefitAmount: "Financial subsidy for ponds, hatcheries, and fishery infrastructure",
    eligibility: "Fishers, fish farmers, SHGs, cooperatives",
    location: "Pan India",
    country: "India",
    category: "Farmer",
    infoLink: "https://pmmsy.dof.gov.in/",
  },
  {
    title: "PM Dhan-Dhaanya Krishi Yojana (2025)",
    description:
      "Launched in 2025 with ₹24,000 crore outlay to boost crop diversification, irrigation, and credit access.",
    benefitAmount: "Financial & infrastructure assistance for high-value crops",
    eligibility: "Farmers in identified 100 districts",
    location: "Pan India",
    country: "India",
    category: "Farmer",
    infoLink: "https://pib.gov.in/",
  },
  {
    title: "Mission for Aatmanirbharta in Pulses",
    description:
      "Aims to enhance domestic pulse production through improved seeds and farmer cooperatives.",
    benefitAmount: "Input and infrastructure support under ₹11,440 crore plan",
    eligibility: "Pulse farmers and FPOs in pulse-growing areas",
    location: "Pan India",
    country: "India",
    category: "Farmer",
    infoLink: "https://pib.gov.in/",
  },
  {
    title: "Digital Agriculture Mission 2025",
    description:
      "Promotes precision farming, use of drones, and satellite mapping of crops.",
    benefitAmount: "Free digital training and app-based farm tools",
    eligibility: "Registered farmers and agri-tech startups",
    location: "Pan India",
    country: "India",
    category: "Farmer",
    infoLink: "https://agricoop.gov.in/",
  },
  {
    title: "National Mission for Sustainable Agriculture (NMSA)",
    description:
      "Supports climate-resilient farming through soil conservation and rainwater harvesting.",
    benefitAmount: "Financial aid for resource conservation and integrated nutrient management",
    eligibility: "Farmers in climate-stressed districts",
    location: "Pan India",
    country: "India",
    category: "Farmer",
    infoLink: "https://nmsa.dac.gov.in/",
  },
  {
    title: "FPO Formation and Promotion Scheme",
    description:
      "Aims to create 10,000 Farmer Producer Organizations for collective marketing and input purchase.",
    benefitAmount: "Equity grant up to ₹15 lakh per FPO",
    eligibility: "Registered farmer groups and cooperatives",
    location: "Pan India",
    country: "India",
    category: "Farmer",
    infoLink: "https://sfacindia.com/",
  },
  {
    title: "Dairy Entrepreneurship Development Scheme (DEDS)",
    description:
      "Encourages modern dairy farms and milk processing units with back-end subsidies.",
    benefitAmount: "25–33% subsidy (up to ₹7 lakh per unit)",
    eligibility: "Milk producers, SHGs, and dairy entrepreneurs",
    location: "Pan India",
    country: "India",
    category: "Farmer",
    infoLink: "https://nabard.org/",
  },
  {
    title: "Sub-Mission on Seed and Planting Material (SMSP)",
    description:
      "Ensures availability of quality seeds and planting materials for high-yield crops.",
    benefitAmount: "Support up to ₹25,000 per hectare for seed production",
    eligibility: "Seed farmers under designated agencies",
    location: "Pan India",
    country: "India",
    category: "Farmer",
    infoLink: "https://agricoop.gov.in/",
  },
  {
    title: "National Beekeeping and Honey Mission (NBHM)",
    description:
      "Promotes scientific beekeeping and honey production for rural income diversification.",
    benefitAmount: "40–60% subsidy on equipment & bee colonies",
    eligibility: "Beekeepers, FPOs, SHGs, and startups",
    location: "Pan India",
    country: "India",
    category: "Farmer",
    infoLink: "https://nbhm.gov.in/",
  },
  {
    title: "PM Formalisation of Micro Food Processing Enterprises (PMFME)",
    description:
      "Supports food processing units for farm produce under One District One Product (ODOP).",
    benefitAmount: "Credit-linked subsidy up to 35% (₹10 lakh max)",
    eligibility: "Micro food processors, SHGs, cooperatives",
    location: "Pan India",
    country: "India",
    category: "Farmer",
    infoLink: "https://mofpi.gov.in/",
  },
  {
    title: "National Mission on Natural Farming (NMNF)",
    description:
      "Supports adoption of zero-budget natural farming, bio-input cultivation, and training.",
    benefitAmount: "Financial aid for organic inputs and natural inputs infrastructure",
    eligibility: "Farmers shifting to chemical-free farming",
    location: "Pan India",
    country: "India",
    category: "Farmer",
    infoLink: "https://agricoop.gov.in/",
  },
  {
    title: "Gramin Bhandaran Yojana (Rural Godowns)",
    description:
      "Encourages construction of rural godowns for safe storage of grains and perishables.",
    benefitAmount: "Subsidy 25–33% on capital cost",
    eligibility: "Individual farmers, cooperatives, agri-firms",
    location: "Pan India",
    country: "India",
    category: "Farmer",
    infoLink: "https://nabard.org/",
  },
  {
    title: "Operation Greens (TOP to TOTAL)",
    description:
      "Stabilizes supply and prices for tomatoes, onions, and potatoes through farmer cooperatives.",
    benefitAmount: "50% subsidy on transport/storage during glut periods",
    eligibility: "FPOs, SHGs, and individual farmers growing TOP crops",
    location: "Pan India",
    country: "India",
    category: "Farmer",
    infoLink: "https://mofpi.gov.in/",
  },
  {
    title: "Integrated Scheme for Agricultural Marketing (ISAM)",
    description:
      "Promotes development of marketing infrastructure, grading, and farmer market linkages.",
    benefitAmount: "Subsidy for rural haats, pack-houses, and warehouses",
    eligibility: "FPOs, cooperatives, and panchayat bodies",
    location: "Pan India",
    country: "India",
    category: "Farmer",
    infoLink: "https://agrimarkindia.gov.in/",
  },
  {
    title: "Kisan Drone Support Scheme",
    description:
      "Encourages adoption of drones for spraying pesticides, nutrient distribution, and soil monitoring.",
    benefitAmount: "Up to ₹10 lakh subsidy to FPOs for drone acquisition",
    eligibility: "FPOs, agricultural startups, custom hiring centers",
    location: "Pan India",
    country: "India",
    category: "Farmer",
    infoLink: "https://agricoop.gov.in/",
  },
    {
    title: "Samagra Shiksha Abhiyan (SSA)",
    description:
      "Integrated scheme for school education from pre-school to Class XII focusing on inclusivity, quality, and digital transformation under NEP 2020.",
    benefitAmount: "School infrastructure, digital classrooms, and inclusive education funding",
    eligibility: "Students enrolled in government or aided schools",
    location: "Pan India",
    country: "India",
    category: "Education",
    infoLink: "http://dsel.education.gov.in/en/scheme/samagra-shiksha",
  },

  {
    title: "PM SHRI Schools (Pradhan Mantri Schools for Rising India)",
    description:
      "Transforms over 14,500 schools into NEP-aligned model institutions with smart classrooms, green campuses, and experiential education.",
    benefitAmount: "Model school upgrades with ICT labs, STEM centers, and teacher training",
    eligibility: "Government-run or aided schools selected under PM SHRI framework",
    location: "Pan India",
    country: "India",
    category: "Education",
    infoLink: "https://pmshrischools.education.gov.in/",
  },

  {
    title: "NIPUN Bharat Mission",
    description:
      "National Initiative for Proficiency in Reading with Understanding and Numeracy ensuring foundational learning for students in Grade 3 and below.",
    benefitAmount: "Teaching-learning materials, training, and support programs",
    eligibility: "Students in grades 1-3 of recognized schools",
    location: "Pan India",
    country: "India",
    category: "Education",
    infoLink: "https://nipunbharat.education.gov.in/",
  },

  {
    title: "PM POSHAN (Mid-Day Meal Scheme)",
    description:
      "Ensures free hot cooked meals for students from Bal Vatika to Class VIII to improve nutrition and retention.",
    benefitAmount: "Daily nutritious meals for eligible children",
    eligibility: "Students in government and aided schools up to Class VIII",
    location: "Pan India",
    country: "India",
    category: "Education",
    infoLink: "https://education.gov.in/pm-poshan",
  },

  {
    title: "Schemes for Residential Education (SHRESHTA)",
    description:
      "Provides residential school education for meritorious students from SC and marginalized communities.",
    benefitAmount: "Full residential schooling and educational grants",
    eligibility: "SC students selected through the national exam conducted by NTA",
    location: "Pan India",
    country: "India",
    category: "Education",
    infoLink: "https://shreshta.admissions.nic.in/",
  },

  {
    title: "AICTE Pragati and Saksham Scholarships",
    description:
      "Scholarships for girl students and differently-abled students pursuing technical education at AICTE-approved institutions.",
    benefitAmount: "₹50,000 per annum plus contingency allowances",
    eligibility: "Girls and differently-abled students in AICTE-approved degree/diploma courses",
    location: "Pan India",
    country: "India",
    category: "Education",
    infoLink: "https://aicte-india.org/",
  },

  {
    title: "National Means-cum-Merit Scholarship (NMMS)",
    description:
      "Supports meritorious students from economically weaker sections to continue secondary education.",
    benefitAmount: "₹12,000 per annum till completion of Class 12",
    eligibility: "Students of Class 8 with parental income less than ₹3.5 lakh/year",
    location: "Pan India",
    country: "India",
    category: "Education",
    infoLink: "https://scholarships.gov.in/",
  },

  {
    title: "Inspire - Innovation in Science Pursuit for Inspired Research",
    description:
      "Encourages scientific aptitude and innovation among school and college students through awards and research fellowships.",
    benefitAmount: "₹80,000 yearly for scholarship and mentorship support",
    eligibility: "Students in the top 1% of Class XII science examiners or enrolled in science courses",
    location: "Pan India",
    country: "India",
    category: "Education",
    infoLink: "https://online-inspire.gov.in/",
  },

  {
    title: "Udaan for Girl Students (CBSE)",
    description:
      "Empowers girl students aiming for engineering entrance exams with free online courses and mentorship.",
    benefitAmount: "Free JEE preparation modules, study kits, and mentoring",
    eligibility: "Girl students from Class XI–XII studying Science (CBSE-affiliated schools)",
    location: "Pan India",
    country: "India",
    category: "Education",
    infoLink: "https://cbse.gov.in/",
  },

  {
    title: "National Digital Education Architecture (NDEAR)",
    description:
      "Digital infrastructure supporting interoperability between education systems and data-driven policy decisions.",
    benefitAmount: "Access to digital education frameworks and analytics tools",
    eligibility: "Institutions integrated with DIKSHA platform",
    location: "Pan India",
    country: "India",
    category: "Education",
    infoLink: "https://ndear.gov.in/",
  },

  {
    title: "DIKSHA – Digital Infrastructure for Knowledge Sharing",
    description:
      "Comprehensive platform for teachers and students offering e-content, lesson plans, and assessments.",
    benefitAmount: "Free access to online learning resources in 30+ languages",
    eligibility: "Teachers and learners at all academic levels",
    location: "Pan India",
    country: "India",
    category: "Education",
    infoLink: "https://diksha.gov.in/",
  },

  {
    title: "ULLAS – Nav Bharat Saaksharta Karyakram (Adult Literacy)",
    description:
      "Promotes basic literacy and digital learning among adults through community-based platforms.",
    benefitAmount: "Free literacy training, vocational skills, and digital literacy tools",
    eligibility: "Adults aged 15+ who missed formal schooling",
    location: "Pan India",
    country: "India",
    category: "Education",
    infoLink: "https://education.gov.in/nav-bharat-saaksharta",
  },

  {
    title: "ISHAN UDAY (North East Scholarship)",
    description:
      "Encourages higher education among students from the North Eastern Region.",
    benefitAmount: "₹7,800 per month for professional courses, ₹5,400 for general degrees",
    eligibility: "Residents of North Eastern States studying undergraduate courses",
    location: "North Eastern States",
    country: "India",
    category: "Education",
    infoLink: "https://ugc.ac.in/ner/",
  },

  {
    title: "PM Research Fellowship (PMRF)",
    description:
      "Empowers outstanding B.Tech and M.Tech graduates to pursue a PhD in premier institutes like IITs, IISERs, or IISc.",
    benefitAmount: "Fellowship up to ₹70,000/month + research grants",
    eligibility: "High-performing students in select institutions",
    location: "Pan India",
    country: "India",
    category: "Education",
    infoLink: "https://pmrf.in/",
  },

  {
    title: "SWAYAM and SWAYAM PRABHA",
    description:
      "Free Massive Open Online Courses (MOOCs) for higher education, school, and vocational training.",
    benefitAmount: "Online courses and certification in 1,000+ subjects",
    eligibility: "Open to all Indian learners",
    location: "Pan India",
    country: "India",
    category: "Education",
    infoLink: "https://swayam.gov.in/",
  },

  {
    title: "AICTE Lilavati Scheme for Women",
    description:
      "Recognizes institutional projects promoting women’s empowerment through innovation and education.",
    benefitAmount: "Awards and grants of up to ₹1 crore per project",
    eligibility: "AICTE-approved institutions and their women-led teams",
    location: "India",
    country: "India",
    category: "Education",
    infoLink: "https://aicte-india.org/",
  },

  {
    title: "National Apprenticeship Promotion Scheme (NAPS)",
    description:
      "Promotes skill-based on-the-job training for youth to increase employability.",
    benefitAmount: "Government shares 25% of stipend (up to ₹1,500/month per apprentice)",
    eligibility: "Students aged 14+ undergoing vocational courses or ITI training",
    location: "Pan India",
    country: "India",
    category: "Education",
    infoLink: "https://apprenticeshipindia.gov.in/",
  },

  {
    title: "Top Class Education for SC, ST & OBC Students",
    description:
      "Provides full financial support for meritorious students from marginalized communities in top institutions.",
    benefitAmount: "₹2 lakh–₹2.5 lakh tuition coverage plus stipends",
    eligibility: "Students belonging to SC, ST, OBC, or EWS categories in recognized institutions",
    location: "Pan India",
    country: "India",
    category: "Education",
    infoLink: "https://socialjustice.gov.in/",
  },

  {
    title: "National Overseas Scholarship Scheme (NOS)",
    description:
      "Supports higher education abroad for students from SC, ST, and OBC communities.",
    benefitAmount: "Full tuition and living expenses up to ₹40 lakh per student",
    eligibility: "Postgraduate applicants from eligible categories",
    location: "International",
    country: "India",
    category: "Education",
    infoLink: "https://nos.msje.gov.in/",
  },

  {
    title: "PM eVIDYA (One Nation, One Digital Platform)",
    description:
      "Centralized digital education program ensuring access to diverse e-learning resources across all education levels.",
    benefitAmount: "Access to TV channels, mobile apps, and e-content portals",
    eligibility: "School and college students",
    location: "Pan India",
    country: "India",
    category: "Education",
    infoLink: "https://pmevidya.education.gov.in/",
  },

  {
    title: "Kasturba Gandhi Balika Vidyalaya (KGBV)",
    description:
      "Residential schooling for girls from disadvantaged communities in educationally backward districts.",
    benefitAmount: "Free residential, educational, and meal facilities",
    eligibility: "Girls aged 10–18 from SC, ST, OBC, and minority groups",
    location: "Educationally backward districts",
    country: "India",
    category: "Education",
    infoLink: "https://education.gov.in/kgbv",
  },

  {
    title: "PM Uchchatar Shiksha Abhiyan (RUSA)",
    description:
      "Improves the quality and infrastructure of state universities and colleges.",
    benefitAmount: "Funding support for infrastructure, innovation, and research",
    eligibility: "State public universities and government colleges",
    location: "Pan India",
    country: "India",
    category: "Education",
    infoLink: "https://rusa.education.gov.in/",
  },

  {
    title: "National Means for Higher Education (NMMSS)",
    description:
      "Encourages students from low-income backgrounds to pursue post-matric education.",
    benefitAmount: "Scholarship ₹1,000/month till graduation",
    eligibility: "Students from families with annual income under ₹1.5 lakh",
    location: "Pan India",
    country: "India",
    category: "Education",
    infoLink: "https://scholarships.gov.in/",
  },

  {
    title: "Digital India – Skill and Education Connect Program",
    description:
      "Bridges digital literacy and employability through coding, cloud computing, and vocational programs in schools and colleges.",
    benefitAmount: "Free digital skill certification and course access",
    eligibility: "Indian students aged 10–25",
    location: "Pan India",
    country: "India",
    category: "Education",
    infoLink: "https://digitalindia.gov.in/",
  },
  {
  title: "MahaDBT Scholarship Portal",
  description:
    "Digital platform providing streamlined access to multiple Maharashtra state scholarships, including merit, post-matric, minority, and special category scholarships, via Direct Benefit Transfer.",
  benefitAmount:
    "Up to ₹50,000/year depending on scheme and course type (tuition, exam fees, maintenance allowances covered)",
  eligibility:
    "Maharashtra domicile students from reserved categories and general category with merit eligibility. Varies by scheme with income limits and academic criteria.",
  location: "Maharashtra",
  country: "India",
  category: "Education",
  infoLink: "https://mahadbt.maharashtra.gov.in/login/login",
}
];

module.exports = { data: medicalSchemes };
