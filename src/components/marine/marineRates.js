// Ships rates
const shipOptions = [
  { slug: "iccc", name: "ICC C", rate: 0.3 },
  { slug: "iccb", name: "ICC B", rate: 0.45 },
];

// Trucks Rates
const truckOptions = [{ slug: "truckRiskOnly", name: "Risk Only", rate: 0.43 }];

// Air Rates
const airOptions = [
  { slug: "airiskOnly", name: "Risk Only (ICC C)", rate: 0.22 },
  { slug: "ndOnly", name: "ND Only (ICC B)", rate: 0.43 },
  { slug: "tpndOnly", name: "TPND Only (ICC A)", rate: 0.65 },
  { slug: "allRisks", name: "All Risks (ICC A)", rate: 0.86 },
];

export { shipOptions, truckOptions, airOptions };
