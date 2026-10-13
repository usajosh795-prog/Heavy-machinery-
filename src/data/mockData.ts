import { Product, Facility, Certification, BusinessSector } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'trx-765-500',
    name: 'UHV Step-Up Autotransformer 500 MVA',
    code: 'VT-TRX-500MVA',
    category: 'transformers',
    categoryLabel: 'High-Voltage Transformers',
    capacity: '500 MVA / 765 kV',
    primarySpec: 'Dielectric BIL > 2,100 kV',
    tagline: 'Transmission grid backbone engineered for utility-scale substations and extreme load stability.',
    description: 'Designed for major national transmission interconnection grids. Features low-loss cold-rolled grain-oriented (CRGO) magnetic silicon steel cores, fiber-optic embedded winding hot-spot sensors, and automated OFAF forced-cooling radiator batteries with SF6 gas-insulated composite bushings.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAo_ZyqTT4dlB5EejvNGqlZKcy3nfRJSdj9H8eC4joBlX7k5rUfNaF2mtnADa4vfiwwPcXJEz9MXPosp5Cy3m2lGe3HzjlhbBHO_a_3hdlcmouD2uq0cabBAKgnqtrAoO7HDWfzzG2C3dhEdKaQWioBgjL7zLSTbCyVOdIznpuWGk5fn92s4p4KwN3Hjg63jFRk-zxYd493NJSSezZMJNSljnJY7goHL1P8id0t2QwS8ukA8-rZLNrs',
    basePriceInr: 154000000, // ₹15.40 Crore
    minWholesaleQty: 2,
    specs: [
      { label: 'Nominal Rating', value: '500 MVA continuous' },
      { label: 'Voltage Class', value: '765 kV Primary / 400 kV Secondary' },
      { label: 'Cooling Class', value: 'ONAN / ONAF / OFAF Dual Stage' },
      { label: 'Basic Impulse Level (BIL)', value: '2,100 kV Crest' },
      { label: 'Core Material', value: 'Laser-Scribed CRGO Steel Grade 23ZH090' },
      { label: 'Thermal Monitoring', value: '48-Channel Fiber Optic Direct Probe' },
      { label: 'Efficiency Rating', value: '99.42% at Nominal Load' },
      { label: 'Total Weight (Oil-Filled)', value: '385 Metric Tons' }
    ],
    features: [
      'Burst-proof diaphragm with sudden-pressure relay tripping',
      'Dual nitrogen-injection fire protection system (NIFPS) ready',
      'Vacuum-cast tap changer with online continuous oil filtration',
      'Full SCADA & IEC 61850 protocol digital telemetry substation gateway'
    ],
    compliance: ['IEEE C57.12', 'IEC 60076-1', 'ISO 9001:2015', 'CE Directive', 'BIS IS-2026'],
    leadTime: '16 – 20 Weeks',
    cadAvailable: true
  },
  {
    id: 'trx-160-220',
    name: 'Industrial Distribution Substation Transformer 160 MVA',
    code: 'VT-TRX-160MVA',
    category: 'transformers',
    categoryLabel: 'High-Voltage Transformers',
    capacity: '160 MVA / 220 kV',
    primarySpec: 'Dielectric BIL > 1,050 kV',
    tagline: 'Medium-voltage distribution unit built for heavy metallurgical plants and mega-factories.',
    description: 'Compact high-efficiency substation transformer built for continuous round-the-clock operations in heavy chemical, steel manufacturing, and large industrial zones with high harmonic resistance.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwh-XIu9qGCxlcYK3EZRbeksoNcraI15cRCH9dnq0B3Da7IMXdVGwYWUeKVeKY6eMBD6n4aDgRZL70cn00fyahWmIbVRD6QawzyTUv4TzZAHR0EmJaKXxBvXVWAI0PFu9pWtWa7PMlkuA2MBh_BePu3HD9epCq2WkKVRnacyY8q8rqv0lKZaDzPYWdVLYeEOIcksaDSVYYiO1lsYfXOZAaVPKbPWz_d29fir97q7OgYkJoOapeE-0Z',
    basePriceInr: 62000000, // ₹6.20 Crore
    minWholesaleQty: 3,
    specs: [
      { label: 'Nominal Rating', value: '160 MVA' },
      { label: 'Voltage Class', value: '220 kV / 33 kV' },
      { label: 'Cooling Class', value: 'ONAF forced airflow radiators' },
      { label: 'BIL Rating', value: '1,050 kV' },
      { label: 'Sound Pressure', value: '< 62 dBA at 2m (Ultra-low acoustic)' },
      { label: 'Total Weight', value: '142 Metric Tons' }
    ],
    features: [
      'Corrosion-resistant marine grade C5M external zinc primer',
      'On-load tap changer with 17 regulation steps (±10%)',
      'Hermetically sealed conservator tank with rubber bladder diaphragm'
    ],
    compliance: ['IEC 60076', 'ANSI / IEEE', 'ISO 14001', 'BIS IS-2026'],
    leadTime: '12 – 14 Weeks',
    cadAvailable: true
  },
  {
    id: 'bar-55x-heavy',
    name: 'Heavy Civil CNC Rebar Bending Center',
    code: 'VT-BAR-55X',
    category: 'rebar',
    categoryLabel: 'Civil Rebar Processing',
    capacity: 'Ø 10mm to Ø 55mm Grade 600',
    primarySpec: '±0.5mm Arc Deflection',
    tagline: 'High-yield hydraulic rebar fabrication center for nuclear, bridge, and dam infrastructure.',
    description: 'Constructed from hardened alloy tool steel and high-tonnage hydraulic cylinders, the VT-BAR-55X bends high-tensile thermo-mechanically treated (TMT) Fe 500D / Fe 550D / Fe 600 steel bars up to 55mm diameter with laser accuracy and minimal operator fatigue.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOrZ_el7Gk3XbfkfH61nFwQHnx8ZkVyGAUgX_MdastgtvpX3EWy0DJnPDHl0V5voXhKguEbqvKLhYHlO9WXt4Si1u-K97Hduwppl75u5z-E28sTRugQ8KQIo_QQaOGaKkpvoXRntrfuIH61NJ4ZXtP0QNiw9SsByvOYI8kZQIxFtY_k7mtess0SGrsm13bt5zVvxrAmmSUSmDrIiz_0FSqdiM2rZOvJ4gKABTeWtPyaiYjsYR4wDb8',
    basePriceInr: 4250000, // ₹42.50 Lakh
    minWholesaleQty: 5,
    specs: [
      { label: 'Max Rebar Diameter', value: 'Ø 55 mm (Fe 500D / Fe 600 / ASTM A615)' },
      { label: 'Bending Speed', value: '5 – 15 RPM variable servo speed' },
      { label: 'Bending Angle', value: '0° to 180° continuous programmable' },
      { label: 'Arc Precision', value: '±0.5 mm arc radius' },
      { label: 'Motor Power', value: '18.5 kW Heavy Duty IP55' },
      { label: 'Operating Weight', value: '3,850 kg' }
    ],
    features: [
      'Dual foot-pedal safety interlocks with emergency dead-man stops',
      'Industrial 10-inch color touch screen with 500+ pre-stored bend patterns',
      'Multi-bar simultaneously bending tooling set included'
    ],
    compliance: ['ASTM A615', 'CE Machinery Directive 2006/42/EC', 'ISO 9001:2015', 'ISI IS-1786 / IS-2502'],
    leadTime: '4 – 6 Weeks (In Stock for Fleet Orders)',
    cadAvailable: true
  },
  {
    id: 'str-40e-stirrup',
    name: 'Automatic Dual-Head Stirrup Bending Cell',
    code: 'VT-STR-40E',
    category: 'rebar',
    categoryLabel: 'Civil Rebar Processing',
    capacity: 'Ø 6mm – 16mm Dual Wire Coil',
    primarySpec: '140 m/min Feed Speed',
    tagline: 'High-speed automated CNC wire straightening, bending, and cut-to-length production line.',
    description: 'Autonomous stirrup fabrication station equipped with dual wire feeding, synchronized servomotors, and hydraulic shearing mechanism. Delivers up to 2,000 polygon stirrups per hour directly from steel wire coils with zero manual straightening.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOrZ_el7Gk3XbfkfH61nFwQHnx8ZkVyGAUgX_MdastgtvpX3EWy0DJnPDHl0V5voXhKguEbqvKLhYHlO9WXt4Si1u-K97Hduwppl75u5z-E28sTRugQ8KQIo_QQaOGaKkpvoXRntrfuIH61NJ4ZXtP0QNiw9SsByvOYI8kZQIxFtY_k7mtess0SGrsm13bt5zVvxrAmmSUSmDrIiz_0FSqdiM2rZOvJ4gKABTeWtPyaiYjsYR4wDb8',
    basePriceInr: 5200000, // ₹52.00 Lakh
    minWholesaleQty: 3,
    specs: [
      { label: 'Wire Diameter Range', value: 'Single: 6–16mm / Double: 6–12mm' },
      { label: 'Feed Speed', value: 'Max 140 m/min continuous' },
      { label: 'Max Bending Speed', value: '1,200 deg/sec' },
      { label: 'Length Tolerance', value: '± 1 mm' },
      { label: 'Hydraulic System', value: 'Proportional servo valve, 210 bar' },
      { label: 'Power Consumption', value: '28 kW Total Active' }
    ],
    features: [
      'Self-diagnosing hydraulic pressure transducers with automatic warning',
      'Dual payoff decoiler system with pneumatic wire tensioning',
      'Direct CAD/BIM import support for automatic shape extraction'
    ],
    compliance: ['CE Compliance', 'ISO 9001:2015', 'OSHA Safety Standards', 'ISI Approved'],
    leadTime: '4 Weeks',
    cadAvailable: true
  },
  {
    id: 'wb-150-modular',
    name: '150-Ton Dynamic Heavy Truck Weighbridge',
    code: 'VT-WB-150T',
    category: 'weighbridges',
    categoryLabel: 'Heavy Industrial Weighbridges',
    capacity: '150 MT Gross (40 MT Axle)',
    primarySpec: 'OIML R76 / Legal Metrology Class III',
    tagline: 'Heavy-gauge orthotropic steel deck platform engineered for 24/7 mine, quarry, and port traffic.',
    description: 'Prefabricated modular surface or pitless weighbridge engineered using U-beam closed orthotropic rib steel construction. Fitted with 8 to 12 laser-welded stainless steel IP68/IP69K compression digital load cells and lightning protection surge suppressors.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCx_n5s0R0B9LhuZZvlTMKm7sWgbFqkwIGew9eOWrex05qJuPQX34uid57LJGdV4QazznwWHwkgYjfWwXHm5ZCAp49piTGdnNrcqiybdwnRV1tQqPGyRx4FPUb_4_BHUqCgFtPoZI-I0Sjij1PmueBoDZI7UgZkMFvd87GXHqB31euzzYCqxSvx7kSbp6P0Snq2oE8HS1HzYMONkEFw9O3buguaRj0nMCfsM6vTYyd96VvyP7cTrNrz',
    basePriceInr: 4500000, // ₹45.00 Lakh
    minWholesaleQty: 2,
    specs: [
      { label: 'Gross Capacity', value: '150 Metric Tons' },
      { label: 'Platform Dimension', value: '18m x 3.2m (Extendable to 24m)' },
      { label: 'Axle Load Limit', value: '40 MT per single dual-wheel axle' },
      { label: 'Load Cell Type', value: 'Stainless Steel Digital Hermetic Compression' },
      { label: 'Ingress Protection', value: 'IP68 / IP69K (Submersible & Jet Cleanable)' },
      { label: 'Overload Safety Factor', value: '150% Safe / 300% Ultimate Structural' },
      { label: 'Deck Thickness', value: '14mm High-Tensile Steel Checker Plate' }
    ],
    features: [
      'Integrated RFID long-range automated truck identification gate',
      'Surge and lightning arrester circuits up to 80,000 Amperes',
      'Anti-cheat tamper-evident encrypted digital communication protocol',
      'Dual external weatherproof LED remote scoreboards (6-inch tall digits)'
    ],
    compliance: ['OIML R76 Class III', 'NIST Handbook 44', 'ISO 9001:2015', 'Legal Metrology India W&M'],
    leadTime: '2 – 3 Weeks',
    cadAvailable: true
  },
  {
    id: 'wb-100-pitless',
    name: '100-Ton Pitless Civil Highway Weighbridge',
    code: 'VT-WB-100P',
    category: 'weighbridges',
    categoryLabel: 'Heavy Industrial Weighbridges',
    capacity: '100 MT Gross (30 MT Axle)',
    primarySpec: 'Class III Legal Metrology Certified',
    tagline: 'Rapid-installation surface ramp scale for logistics hubs, grain terminals, and batching plants.',
    description: 'Surface-mounted modular scale requiring shallow civil concrete foundations, eliminating costly drainage pit excavations. Heavy U-beam undercarriage distributes vehicle dynamic wheel impacts across heavy-duty load plates.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCx_n5s0R0B9LhuZZvlTMKm7sWgbFqkwIGew9eOWrex05qJuPQX34uid57LJGdV4QazznwWHwkgYjfWwXHm5ZCAp49piTGdnNrcqiybdwnRV1tQqPGyRx4FPUb_4_BHUqCgFtPoZI-I0Sjij1PmueBoDZI7UgZkMFvd87GXHqB31euzzYCqxSvx7kSbp6P0Snq2oE8HS1HzYMONkEFw9O3buguaRj0nMCfsM6vTYyd96VvyP7cTrNrz',
    basePriceInr: 3200000, // ₹32.00 Lakh
    minWholesaleQty: 3,
    specs: [
      { label: 'Gross Capacity', value: '100 Metric Tons' },
      { label: 'Platform Dimension', value: '16m x 3.0m' },
      { label: 'Accuracy Division', value: '20 kg e-value increments' },
      { label: 'Load Cells', value: '8 x 30T Stainless Steel Digital Cells' },
      { label: 'Operational Ambient', value: '-30°C to +65°C continuous' }
    ],
    features: [
      'Modular bolt-together sections transportable on standard 40ft container flatbeds',
      'Built-in leveling alignment jacks for rapid recalibration',
      'Automatic wheel guide curbs with high-visibility reflective striping'
    ],
    compliance: ['OIML R76', 'Legal Metrology Verified', 'ISO 9001:2015', 'ISI / BIS Standard'],
    leadTime: '2 Weeks (In Stock)',
    cadAvailable: true
  },
  {
    id: 'allied-asme-press',
    name: '2,500-Ton Deep-Draw Hydraulic Forging Press',
    code: 'VT-HYD-2500T',
    category: 'structural',
    categoryLabel: 'Heavy Allied Fabrication',
    capacity: '2,500 Metric Ton Press Force',
    primarySpec: 'ASME Boiler & Pressure Vessel Sec VIII',
    tagline: 'Multi-cylinder automated forging press for heavy turbine casings, flange forming, and pressure vessels.',
    description: 'Rigid four-column pre-stressed frame design capable of continuous heavy plate pressing, dished-end spinning, and heavy metallurgical forging. Equipped with precision proportional hydraulic control and full digital stroke recording.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXBWkvDplA2R-T88_LsoUD7pgiu9kHrmJpUNpBUyAKl-rbdVjWuU88X90o1Ts_L4faJtB_HNzacOL_ZxvLNH1d230PlPvRL1D_YOWfi5Ss6_v6SwH8JpimQoZqOYkva0BiI0xa5CbansQcgm5qDaFLf4FafwMqOH5ypxbF9PWwyq9_6skI9kP8QiHn6GhStRdij6JYIhB0IM9-dEITmfL5WsYGQg2Bq836tc1W2G7qbvORf6B0fuEs',
    basePriceInr: 26500000, // ₹2.65 Crore
    minWholesaleQty: 1,
    specs: [
      { label: 'Press Force', value: '25,000 kN (2,500 MT)' },
      { label: 'Stroke Length', value: '1,500 mm programmable' },
      { label: 'Table Bed Size', value: '3,200 mm x 2,800 mm' },
      { label: 'Hydraulic Pressure', value: '31.5 MPa continuous' },
      { label: 'Frame Structure', value: 'Pre-stressed 4-column alloy forging' }
    ],
    features: [
      '100% Non-Destructive Testing (X-Ray & Ultrasonic) on all structural weld joints',
      'Regenerative rapid-closing hydraulic circuit for energy conservation',
      'Automatic die-cushion stroke control with hydraulic clamping'
    ],
    compliance: ['ASME Boiler Code Section VIII', 'ISO 9001:2015', 'CE Machinery Safety', 'IBR Certified'],
    leadTime: '18 – 22 Weeks',
    cadAvailable: true
  }
];

export const BUSINESS_SECTORS: BusinessSector[] = [
  {
    id: 'power-transmission',
    title: 'National & State Transmission Grids',
    description: 'Supplying 765kV / 400kV / 220kV extra-high-voltage transformers with continuous duty design for state utilities and central grid transmission corridors.',
    metric: '18,500+ MVA Energized Capacity',
    clientExample: 'PowerGrid, NTPC, Adani Transmission, State Discoms',
    iconName: 'Zap'
  },
  {
    id: 'expressways-civil',
    title: 'Highways, Bridges & Metro Rail EPC',
    description: 'High-speed automated rebar bending centers and shear lines delivering continuous shaped reinforcement steel for expressway viaducts, metro piers, and flyovers.',
    metric: '450+ Major Infrastructure Sites Equipped',
    clientExample: 'L&T Infrastructure, Tata Projects, Dilip Buildcon, NHAI',
    iconName: 'HardHat'
  },
  {
    id: 'ports-mining',
    title: 'Mining, Logistics Ports & Steel Works',
    description: 'Rugged 150-ton dynamic weighbridges operating 24/7 under abrasive dust and continuous heavy vehicle wheel impacts with automated RFID axle tracking.',
    metric: '1,400+ Weighing Systems Operational',
    clientExample: 'JSW Steel, Tata Steel, Adani Ports, Coal India',
    iconName: 'Truck'
  },
  {
    id: 'heavy-forging',
    title: 'Turbine, Boiler & Vessel Fabrication',
    description: 'ASME Section VIII heavy manufacturing authorization for multi-megawatt power plant turbine casings, dished ends, and high-pressure hydraulic cylinders.',
    metric: '120,000 MT Annual Steel Throughput',
    clientExample: 'BHEL, Thermax, Larsen & Toubro Heavy Engineering',
    iconName: 'Factory'
  }
];

export const ADDONS = [
  {
    id: 'turnkey-foundation',
    name: 'Turnkey Foundation & Civil Anchoring',
    description: 'Factory-supervised foundation surveying, seismic anchor bolt embedment, and structural grouting on customer site.',
    pricePerUnit: 550000 // ₹5.50 Lakh
  },
  {
    id: 'on-site-fat',
    name: 'Factory Acceptance Testing (FAT) Witness Package',
    description: 'Dedicated engineer protocol hosting for client inspection team, comprehensive laboratory test certificates, and full calibration verification logs.',
    pricePerUnit: 350000 // ₹3.50 Lakh
  },
  {
    id: 'warranty-5yr',
    name: 'Extended 5-Year Comprehensive Warranty',
    description: 'Extends standard 2-year warranty to 5 years, covering all mechanical, hydraulic, electrical coils, and load cell components with zero deductible.',
    pricePerUnit: 750000 // ₹7.50 Lakh
  },
  {
    id: 'scada-iot',
    name: 'SCADA & Industrial IoT Telemetry Gateway',
    description: 'Cellular/Ethernet telemetry module providing real-time bearing vibration, oil temperature, winding load, and predictive maintenance alerts to client ERP.',
    pricePerUnit: 280000 // ₹2.80 Lakh
  },
  {
    id: 'engineer-training',
    name: 'On-Site Operator & Master Maintenance Training (5 Days)',
    description: 'Factory certified senior commissioning engineer deployed to customer facility for 5 full days of hands-on operations, tooling setup, and safety training.',
    pricePerUnit: 400000 // ₹4.00 Lakh
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    code: 'ISO 9001:2015',
    name: 'Quality Management Systems',
    body: 'TÜV Rheinland International',
    category: 'Management & QA',
    description: 'Certified design, engineering, metallurgy inspection, fabrication, and after-sales field support for heavy mechanical and electrical power systems.'
  },
  {
    code: 'ISI / BIS IS-1786 & IS-2026',
    name: 'Bureau of Indian Standards',
    body: 'BIS National Metrology Council',
    category: 'Civil & Electrical Codes',
    description: 'Strict compliance for high-strength deformed rebar bending mandrels and power transformer efficiency ratings across Indian standard classes.'
  },
  {
    code: 'IEEE C57 / IEC 60076',
    name: 'Power & Distribution Transformers',
    body: 'International Electrotechnical Commission',
    category: 'Electrical Power',
    description: 'Meets and exceeds all dielectric insulation, short-circuit withstand, temperature rise, and acoustic noise emissions standards.'
  },
  {
    code: 'OIML R76 / Legal Metrology',
    name: 'Legal Metrology Non-Automatic Weighing',
    body: 'Directorate of Legal Metrology & OIML',
    category: 'Metrology (W&M)',
    description: 'Full legal-for-trade certification for static and dynamic axle load weighbridges, certified across national highways and freight corridors.'
  },
  {
    code: 'ASME SEC VIII & IBR',
    name: 'Boiler and Pressure Vessel Code',
    body: 'American Society of Mechanical Engineers / IBR',
    category: 'Structural Fabrication',
    description: 'Qualified manufacturing authorization for heavy welded unfired pressure vessels, expansion tanks, and hydraulic cylinders.'
  },
  {
    code: 'CE Directive 2006/42/EC',
    name: 'European Union Machinery Directive',
    body: 'Eurofins Notified Body',
    category: 'Machine Safety',
    description: 'Conforms to EU essential health and safety requirements for industrial machinery, electrical enclosures, and hydraulic systems.'
  }
];

export const FACILITIES: Facility[] = [
  {
    id: 'plant-01',
    name: 'Plant 01: Duisburg Heavy Forging Complex',
    location: 'Duisburg, North Rhine-Westphalia, Germany',
    specialty: 'Heavy structural forging, CNC rebar bending frames, hydraulic cylinders',
    capacity: '45,000 MT Steel / Year',
    established: 1988,
    manager: 'Dr. Klaus Becker, Chief Production Officer',
    phone: '8780788806'
  },
  {
    id: 'plant-02',
    name: 'Plant 02: Pune & Mumbai Heavy Engineering Hub',
    location: 'Chakan Industrial Zone, Pune, Maharashtra, India',
    specialty: 'High-speed CNC stirrup cells, heavy rebar benders, substation power panels',
    capacity: '38,000 MT Steel & 650 Automated Machines / Year',
    established: 2001,
    manager: 'Rajesh Kulkarni, VP Manufacturing & EPC Operations',
    phone: '8780788806'
  },
  {
    id: 'plant-04',
    name: 'Plant 04: Vadodara High-Voltage Transformer Works',
    location: 'Savli GIDC, Vadodara, Gujarat, India',
    specialty: '765kV / 400kV Extra-High-Voltage autotransformers, UHV impulse test bay',
    capacity: '12,000 MVA Transformer Capacity / Year',
    established: 2008,
    manager: 'Anand Swaminathan, Chief Power Systems Engineer',
    phone: '8780788806'
  },
  {
    id: 'plant-07',
    name: 'Plant 07: Houston Power Transformer Works',
    location: 'Houston, Texas, United States',
    specialty: 'Utility-scale substation transformers, oil filtration systems',
    capacity: '14,000 MVA Installed Power / Year',
    established: 1996,
    manager: 'Marcus Sterling, VP High-Voltage Engineering',
    phone: '8780788806'
  },
  {
    id: 'plant-14',
    name: 'Plant 14: Dammam Metrology & Weighbridge Assembly',
    location: 'Dammam 2nd Industrial City, Saudi Arabia',
    specialty: 'Heavy 150-ton orthotropic weighbridge decks, load cell hermetic sealing',
    capacity: '850 Weighbridge Systems / Year',
    established: 2017,
    manager: 'Tariq Al-Mansoor, Operations Manager',
    phone: '8780788806'
  }
];

export const TESTING_BAYS = [
  {
    id: 'bay-01',
    name: 'Bay 01: Lightning & Surge Impulse Lab',
    rating: 'Calibrated up to 2,400 kV Peak',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_Qucy8p5bYV7r_RlkDh3QN513lPNSK4M66n6TT_iUdyPUrQCy7gjGksbiOdtb-bqxuSGmwY9-wtEMQb2bfVbvu4b-cPgKMwwEb2V6H1E4Z4c1tTEEzrEheExCR9Q7zlreNNh3AXjMtJRYU4qne-txz4UWpB1gaC6QzBu0CrDVK-wUyB07ZSrdX4XvNm_CZCjhaFTknD44qUNNJhh-FtDPFu_cpP0w9-HpBTFDXoDtawFCFEKKc80T',
    description: 'Equipped with Marx multi-stage impulse generators and capacitive voltage dividers. We subject every high-voltage transformer to full wave (1.2/50 μs) and chopped-wave impulses to ensure complete grid switch surge survival under severe lightning events.'
  },
  {
    id: 'bay-02',
    name: 'Bay 02: Dynamic Stress & Cyclic Fatigue Rig',
    rating: '3,000 kN Static & Dynamic Capacity',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD69FuUEpVsY_HQvklm0BVJhv9yfdlSZYHstL1FWkQyAdYj5HLO9MSwHRjTTIX70yslxE8iRhPGqmYJkmg13GozQHF-2uxaVhIvflkazFmXLNnyQzNtaIT3_Ox6MHsvcTD4ZBaq2_qT9T4aggGSHtOQJZLtBzXVfZ2cD67vmutXJIWVDrNOl20O8Xi_rbBRQ88LDYy_N0-Ee8hG4SQkvdoyrx8MOIFsovoZs3XPYv0ON1z_dC1J0CzA',
    description: 'Hydraulic actuators execute over 2.5 million repetitive deflection cycles on weighbridge deck modules and rebar bending gear heads to verify weld metallurgy and eliminate brittle fatigue failure under extreme civil load conditions.'
  },
  {
    id: 'bay-03',
    name: 'Bay 03: Full-Load Continuous Heat-Run Bay',
    rating: '100-Hour Sustained Over-Current Protocol',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbqksBBfSbdmizaXuL3EsQiPzXoTffmek9aYpHAoaBrSP3fDQldcIHNejFNCulAFWwZ0h_ZFAmA-8UFz5QvmWy_iPma_WmUOsLFFICkewUfRTAcU3kpCfPryt-ynO1PMaQ1-e_Av5h16cRgEjMyPCjjW3X5nfctKiKIzfIBaCnIFcwO8hsq01wAFONEj9vQE_bvaPoO1xUOgYJFAuldcQaKSI6Rj9xG23TDYKytZ6wtpcbtjp8Q5fD',
    description: 'Sustained thermal saturation testing with 48 embedded fiber-optic RTDs and calibrated radiometric thermal imaging cameras. Verifies that top oil and winding temperature rise adhere strictly to IEC 60076 and IS-2026 limits during continuous duty.'
  }
];

export const REGIONS = [
  { id: 'india-domestic', name: 'Domestic India (All States & UTs · Turnkey Road Transit)', shippingFactor: 1.02 },
  { id: 'middle-east', name: 'Middle East & GCC (Saudi Arabia, UAE, Qatar, Oman)', shippingFactor: 1.05 },
  { id: 'southeast-asia', name: 'Southeast Asia (Indonesia, Vietnam, Thailand, Malaysia)', shippingFactor: 1.06 },
  { id: 'north-america', name: 'North America (USA, Canada, Mexico)', shippingFactor: 1.08 },
  { id: 'europe', name: 'Europe & UK', shippingFactor: 1.07 },
  { id: 'africa', name: 'Africa (East & West Infrastructure Corridors)', shippingFactor: 1.09 }
];
