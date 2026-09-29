export type PriceRow = { service: string; price: string; note?: string };
export type PriceGroup = { title: string; rows: PriceRow[] };

export const priceGroups: PriceGroup[] = [
  {
    title: "Bathtub Installations",
    rows: [
      { service: "Bathtub Drop-In Jacuzzi Installation", price: "$1,350" },
      {
        service: "Bathtub Installation and Maintenance in Toronto & GTA",
        price: "$999",
        note: "$1,500 (Condo)",
      },
      { service: "Drop-In Bathtubs Installation", price: "$1,350", note: "$2,000 (Condo)" },
      {
        service: "Free Stand Bathtub Installation",
        price: "$1,500",
        note: "$2,000 (Condo) — labor only",
      },
    ],
  },
  {
    title: "Drain Services",
    rows: [
      { service: "Backwater Valve Installation", price: "Contact for pricing" },
      { service: "Cast Iron Pipe Descaling", price: "$400", note: "Per hour, 4-hour minimum" },
      {
        service: "Drain Video Camera Inspection",
        price: "$445",
        note: "$495 (Condo) — per branch, with good access, labor only",
      },
      {
        service: "Hydro Jet / Power Wash Drain Cleaning",
        price: "$290",
        note: "Per hour, 2.5-hour minimum",
      },
      {
        service: "Sewer Smell Investigation",
        price: "$280",
        note: "$320 (Condo) — labor only, up to 2 hours investigation",
      },
      { service: "Unclogging a Tub Using a Snake", price: "$299", note: "Labor only" },
      {
        service: "Unclogging Hand Sinks in Residential Locations",
        price: "$299",
        note: "$320 (Condo) — labor only",
      },
      {
        service: "Unclogging Kitchen Sinks Using a Snake",
        price: "$399",
        note: "$450 (Condo) — labor only",
      },
      {
        service: "Unclogging Main Drains Through Accessible Cleanouts",
        price: "$399",
        note: "$450 (Condo) — labor only",
      },
      {
        service: "Unclogging Main Drains Through Toilet Flange with Toilet Reinstallation",
        price: "$599",
        note: "$650 (Condo) — labor only, with toilet removal and installation included",
      },
      {
        service: "Unclogging Showers with Snakes",
        price: "$299",
        note: "$320 (Condo) — labor only",
      },
    ],
  },
  {
    title: "Faucets Installation",
    rows: [
      {
        service: "Bathtub and Shower Faucets (Moen or American Standard) Installation",
        price: "$650",
        note: "$750 (Condo)",
      },
      {
        service: "Bathtub and Shower Faucets With Rain Showers And Bars Installation",
        price: "$850",
        note: "$1,050 (Condo)",
      },
      { service: "Bathtub Free Stand Faucets Installation", price: "$650" },
      {
        service: "Battery Operated Touchless Sink Faucet Installation",
        price: "$450",
        note: "$600 (Condo)",
      },
      { service: "Faucet Installation Service", price: "$220", note: "Up to $850" },
      {
        service: "Hand Sink Single-Handle Faucet Installation",
        price: "$220",
        note: "$250 (Condo)",
      },
      {
        service: "Hand Sink Three Piece Faucet Installation",
        price: "$380",
        note: "$425 (Condo)",
      },
      { service: "Kitchen Sink Faucets Installation", price: "$220", note: "$250 (Condo)" },
    ],
  },
  {
    title: "Kitchen Installations",
    rows: [
      { service: "ABS P-Trap Replacement", price: "$280" },
      { service: "Brass P-Trap Replacement", price: "$295", note: "$300 (Condo)" },
      {
        service: "Dishwasher Installation",
        price: "$350",
        note:
          "$400 (Condo) — first-time dishwasher pipe arrangement is an extra $395 / $445 (Condo), electrical not included",
      },
      { service: "Ice Maker Lines For Fridge", price: "$350", note: "$400 (Condo)" },
      { service: "XFR P-Trap Replacement", price: "$320" },
    ],
  },
  {
    title: "Other Plumbing Services",
    rows: [
      { service: "1/2\" Water Heater Mix Valve Installation", price: "$395", note: "$450 (Condo)" },
      { service: "3/4\" Water Heater Mix Valve Installation", price: "$495", note: "$550 (Condo)" },
      {
        service: "Replacement of 1/2\" Galvanized Nipples",
        price: "$220",
        note: "Per each — $220 (Condo)",
      },
    ],
  },
  {
    title: "Plumbing Repairs and Installations",
    rows: [
      { service: "Battery Backup Pump Installation", price: "Contact for pricing" },
      {
        service: "Leak Detection",
        price: "$250",
        note: "$270 (Condo) — labor only, up to 2 hours investigation",
      },
      {
        service: "Plumbing Related Service Calls",
        price: "$215",
        note: "$205 (Seniors 65+) — per hour, labor only",
      },
      { service: "Rough-In Per Piece", price: "$950", note: "$1,250 (Condo)" },
      { service: "Sump Pump Replacement", price: "Call for pricing", note: "Labor only" },
      { service: "Tankless Water Heater Installation and Repair", price: "Contact for pricing" },
    ],
  },
  {
    title: "Shower Installations",
    rows: [
      { service: "Shower Base Installation", price: "$650", note: "$750 (Condo)" },
      { service: "Shower Liner 4' x 5' Installation", price: "$450", note: "$400 (Condo)" },
      { service: "Shower Panels Installation", price: "$750", note: "$950 (Condo)" },
    ],
  },
  {
    title: "Shut-off Valves Installation",
    rows: [
      { service: "1\" Shut-Off Valves Installation", price: "$340", note: "$400 (Condo)" },
      { service: "3/4\" Shut-Off Valves Installation", price: "$280", note: "$320 (Condo)" },
      { service: "Main 3/4\" Shut-Off Valves Installation", price: "$400", note: "$650 (Condo)" },
      { service: "Main 1/2\" Shut-Off Valves Installation", price: "$350", note: "$595 (Condo)" },
      { service: "New Main 1\" Shut-Off Valves Installation", price: "$500" },
      { service: "New Water Shut-Off Valve Installation", price: "$225", note: "Up to $650" },
      { service: "1/2\" Shut-Off Valves Installation", price: "$225", note: "$200 (Condo)" },
    ],
  },
  {
    title: "Sink Installation",
    rows: [
      { service: "Floor Mounted Hand Sinks With Cabinets Installation", price: "$375" },
      { service: "Kitchen Sink Installation", price: "$395", note: "Up to $850" },
      {
        service: "Kitchen Sinks Or Hook Up To Drains (ABS Black Piping) Installation",
        price: "$395",
        note: "$400 (Condo)",
      },
      {
        service: "Kitchen Sinks Or Hook Up To Drains With Copper Piping Installation",
        price: "$495",
      },
      { service: "Kitchen Sinks with Gray XFR or PVC Pipe Installation", price: "$495" },
      {
        service: "Wall Mounted Hand Sinks With Cabinets Installation",
        price: "$745",
        note: "$850 (Condo)",
      },
    ],
  },
  {
    title: "Toilets Installation and Repair",
    rows: [
      { service: "Bidet Installation", price: "$295", note: "Up to $1,200" },
      {
        service: "Braided Water Supply Replacement",
        price: "$235",
        note: "$255 (Condo) — replacement of braided water supply only",
      },
      {
        service: "One Piece Toilet Installation",
        price: "$453",
        note: "$480 (Condo) — $520 for skirted / $550 for skirted (Condo)",
      },
      {
        service: "Seat Bidet Installation",
        price: "$450",
        note: "Up to $1,200 — electrical connections not included",
      },
      { service: "Separate Bidet Installation", price: "$750", note: "$850 (Condo)" },
      { service: "Skirted Toilets Installation", price: "$453", note: "$450 (Condo)" },
      { service: "Sprayer Bidet Installation", price: "$295" },
      { service: "Toilet Installation", price: "$350", note: "Up to $1,200" },
      {
        service: "Toilet Tank Repairing (A/S or universal-parts toilet tanks)",
        price: "$230",
        note:
          "$250 (Condo) — includes full kit of flapper, fill valve and braided water supply. Price subject to change depending on model.",
      },
      { service: "Two Piece Toilet Installation", price: "$350" },
    ],
  },
];
