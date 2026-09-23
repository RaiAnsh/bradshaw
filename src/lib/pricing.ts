export type PriceRow = { service: string; price: string; note?: string };
export type PriceGroup = { title: string; rows: PriceRow[] };

// PLACEHOLDER PRICES — replace with the client's real price list.
export const priceGroups: PriceGroup[] = [
  {
    title: "Repairs & Service Calls",
    rows: [
      { service: "Service call / diagnostic", price: "$XX" },
      { service: "Faucet repair or replacement", price: "$XX+" },
      { service: "Toilet repair", price: "$XX+" },
      { service: "Leak detection & repair", price: "$XX+" },
    ],
  },
  {
    title: "Drains & Sewers",
    rows: [
      { service: "Drain cleaning (sink, tub, shower)", price: "$XX+" },
      { service: "Main line drain cleaning", price: "$XX+" },
      { service: "Sewer camera inspection", price: "$XX+" },
    ],
  },
  {
    title: "Installations",
    rows: [
      { service: "Toilet installation", price: "$XX+" },
      { service: "Vanity & sink installation", price: "$XX+" },
      { service: "Backwater valve installation", price: "$XX+" },
      { service: "Backflow preventer installation", price: "$XX+" },
      { service: "Water heater installation", price: "$XX+" },
    ],
  },
  {
    title: "Renovations",
    rows: [
      { service: "Bathroom renovation", price: "Free estimate", note: "Priced per project" },
      { service: "Kitchen renovation", price: "Free estimate", note: "Priced per project" },
    ],
  },
];
