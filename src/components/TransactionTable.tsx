"use client";

import { useMemo, useState } from "react";

type Transaction = { sector: string; project: string; partner: string; country: string; value: string };

const transactions: Transaction[] = [
  {
    "sector": "General Infrastructure",
    "project": "JV for DFCC & DMRC Projects",
    "partner": "Unity Infra Projects",
    "country": "India",
    "value": "USD 620 Million"
  },
  {
    "sector": "General Infrastructure",
    "project": "JV for DFCC Projects",
    "partner": "Gulsan Construction",
    "country": "Turkey",
    "value": "USD 500 Million"
  },
  {
    "sector": "Railways & Metro",
    "project": "Railway Station Redevelopment Phase 1",
    "partner": "Belgium Railways",
    "country": "India-Belgium",
    "value": "EUR 5 Billion"
  },
  {
    "sector": "Water & Wastewater",
    "project": "Water Projects in Rajasthan",
    "partner": "Mekorot",
    "country": "Israel-India",
    "value": "Not Specified"
  },
  {
    "sector": "Roads & Highways",
    "project": "JV for NHAI Projects",
    "partner": "Unity Infra Projects",
    "country": "India",
    "value": "INR 51.09 Crore"
  },
  {
    "sector": "Water & Wastewater",
    "project": "Water Projects in Haryana",
    "partner": "Mekorot",
    "country": "Israel-India",
    "value": "Not Specified"
  },
  {
    "sector": "Roads & Highways",
    "project": "Jaipur Ring Road Project",
    "partner": "Sanjose India",
    "country": "India",
    "value": "EUR 157 Million"
  },
  {
    "sector": "Water & Wastewater",
    "project": "Desalination Projects",
    "partner": "Mekorot",
    "country": "Israel",
    "value": "USD 150 Million"
  },
  {
    "sector": "Mining",
    "project": "Underground Coal Mines JV",
    "partner": "Indu Projects",
    "country": "India",
    "value": "Not Specified"
  },
  {
    "sector": "Water & Wastewater",
    "project": "Wastewater Treatment Plants",
    "partner": "Mekorot",
    "country": "Israel",
    "value": "USD 100 Million & USD 60 Million"
  },
  {
    "sector": "Water & Wastewater",
    "project": "Water Supply Projects",
    "partner": "Mekorot",
    "country": "Israel",
    "value": "USD 100 Million"
  },
  {
    "sector": "Renewable Energy",
    "project": "8000Mw Solar Power",
    "partner": "Israel Electric",
    "country": "Israel-India",
    "value": "Not Specified"
  },
  {
    "sector": "General Infrastructure",
    "project": "660Mw x3 Super Critical TPP",
    "partner": "Israel Electric & Bajaj Hindustan",
    "country": "India",
    "value": "Not Specified"
  },
  {
    "sector": "Railways & Metro",
    "project": "Station Redevelopment Engineering",
    "partner": "EuroStation",
    "country": "India",
    "value": "Not Specified"
  },
  {
    "sector": "General Infrastructure",
    "project": "Industrial Paper Project",
    "partner": "Confidential",
    "country": "India",
    "value": "EUR 55 Million"
  },
  {
    "sector": "Healthcare",
    "project": "Medivac Helicopter Lease",
    "partner": "Confidential",
    "country": "India/Europe",
    "value": "7 Helicopters + 10 Commitments"
  },
  {
    "sector": "Renewable Energy",
    "project": "Wind Project",
    "partner": "Confidential",
    "country": "Romania",
    "value": "152 MW"
  },
  {
    "sector": "Housing & Urban Development",
    "project": "Residential Apartments",
    "partner": "Confidential",
    "country": "Sweden",
    "value": "EUR 110 Million"
  },
  {
    "sector": "Housing & Urban Development",
    "project": "Slum Rehab",
    "partner": "Confidential",
    "country": "India",
    "value": "EUR 120 Million"
  },
  {
    "sector": "Consumer & Industrial",
    "project": "Packaging Company Liquidity",
    "partner": "Confidential",
    "country": "India",
    "value": "USD 50 Million"
  },
  {
    "sector": "General Infrastructure",
    "project": "Paper Project",
    "partner": "Confidential",
    "country": "India",
    "value": "EUR 30 Million"
  },
  {
    "sector": "Renewable Energy",
    "project": "Energy Platform Securitization",
    "partner": "Confidential",
    "country": "Germany",
    "value": "EUR 20 Million"
  },
  {
    "sector": "Healthcare",
    "project": "Medical Equipment Lease",
    "partner": "Confidential",
    "country": "India",
    "value": "EUR 80 Million"
  },
  {
    "sector": "Entertainment & Leisure",
    "project": "Amusement Park & Expo Centre",
    "partner": "Confidential",
    "country": "Germany",
    "value": "EUR 55 Million"
  },
  {
    "sector": "Water & Wastewater",
    "project": "HAM Water Infra Projects",
    "partner": "Confidential",
    "country": "India",
    "value": "USD 4.5 Billion"
  },
  {
    "sector": "General Infrastructure",
    "project": "Composite Cylinders Project",
    "partner": "Confidential",
    "country": "India",
    "value": "Confidential"
  },
  {
    "sector": "General Infrastructure",
    "project": "Gulfstream G550 Lease",
    "partner": "Confidential",
    "country": "India",
    "value": "USD 45 Million"
  },
  {
    "sector": "Railways & Metro",
    "project": "Private Metro Line",
    "partner": "Confidential",
    "country": "India",
    "value": "Confidential"
  },
  {
    "sector": "Renewable Energy",
    "project": "Renewables Refinancing Vehicle",
    "partner": "Confidential",
    "country": "Eastern Europe",
    "value": "EUR 300 Million"
  },
  {
    "sector": "Renewable Energy",
    "project": "Hydrogen Nodes Projects",
    "partner": "Finnish Sponsors",
    "country": "EU",
    "value": "Confidential"
  },
  {
    "sector": "Consumer & Industrial",
    "project": "India Entry – Consumer Durables",
    "partner": "German/Belarus Entities",
    "country": "India",
    "value": "Confidential"
  },
  {
    "sector": "Housing & Urban Development",
    "project": "Government RE Apartments",
    "partner": "Nordic State",
    "country": "Nordic Region",
    "value": "25000 Units"
  },
  {
    "sector": "Renewable Energy",
    "project": "8000 MW Solar Power",
    "partner": "Ethiemad Energy, Ehôr Power, Ashdod Ltd. (Israel/India)",
    "country": "Confidential",
    "value": "8000 MW"
  },
  {
    "sector": "Energy Transition",
    "project": "EGL – Romania",
    "partner": "Confidential",
    "country": "Confidential",
    "value": "USD 190 million"
  },
  {
    "sector": "Energy Transition",
    "project": "Not Specified",
    "partner": "Confidential",
    "country": "Confidential",
    "value": "EUR 6 Billion"
  },
  {
    "sector": "Railways",
    "project": "Railway Infra",
    "partner": "Confidential",
    "country": "Confidential",
    "value": "Not Specified"
  },
  {
    "sector": "Railways",
    "project": "Underground Stations",
    "partner": "Europe",
    "country": "Confidential",
    "value": "Not Specified"
  },
  {
    "sector": "Metro",
    "project": "Metro Project",
    "partner": "Europe",
    "country": "Confidential",
    "value": "EUR 60 Million"
  },
  {
    "sector": "Metro",
    "project": "Metro Rail Infra",
    "partner": "India",
    "country": "Confidential",
    "value": "Confidential"
  },
  {
    "sector": "Thermal Power",
    "project": "Supercritical Thermal Power",
    "partner": "Bajaj Group",
    "country": "Confidential",
    "value": "Not Specified"
  },
  {
    "sector": "Aviation",
    "project": "Aircraft Lease / Operations",
    "partner": "Confidential",
    "country": "Confidential",
    "value": "India"
  },
  {
    "sector": "EPC Structuring",
    "project": "Hydrogen Nodes",
    "partner": "Finish Sponsors (EU)",
    "country": "Confidential",
    "value": "EUR 198 Million"
  },
  {
    "sector": "Water",
    "project": "Water Infra",
    "partner": "Haryana & Rajasthan Ltd.",
    "country": "Confidential",
    "value": "Confidential"
  },
  {
    "sector": "Water",
    "project": "Water Infrastructure",
    "partner": "Congo",
    "country": "Confidential",
    "value": "USD 56.9 million"
  },
  {
    "sector": "Healthcare",
    "project": "Metro Depot, Metro Stations",
    "partner": "DFCC/DMRC Collaborations, India",
    "country": "Confidential",
    "value": "Not Specified"
  },
  {
    "sector": "Healthcare",
    "project": "Helicopter Fleet Lease",
    "partner": "India/EU Medivac",
    "country": "Confidential",
    "value": "EUR 80 million"
  },
  {
    "sector": "Consumer Durables",
    "project": "Underground Coal Mines",
    "partner": "Indu Projects (India)",
    "country": "Confidential",
    "value": "Not Specified"
  },
  {
    "sector": "Public Housing",
    "project": "Slum Rehab & Affordable Housing",
    "partner": "Maharashtra / Nordic Statikom",
    "country": "Confidential",
    "value": "EUR 120 million"
  },
  {
    "sector": "Real Estate",
    "project": "25,000 Apartments Turnkey Program",
    "partner": "India",
    "country": "Confidential",
    "value": "Not Specified"
  },
  {
    "sector": "Real Estate",
    "project": "Residential Apartments",
    "partner": "Sweden",
    "country": "Confidential",
    "value": "EUR 110 million"
  },
  {
    "sector": "Real Estate",
    "project": "Housing Project",
    "partner": "Confidential",
    "country": "Confidential",
    "value": "USD 92 million"
  },
  {
    "sector": "Leisure",
    "project": "Amusement Park cum Expo Centre",
    "partner": "Germany",
    "country": "Confidential",
    "value": "EUR 55 million"
  },
  {
    "sector": "Road Projects",
    "project": "Jaipur Ring Road Project",
    "partner": "India",
    "country": "Confidential",
    "value": "EUR 157 million"
  },
  {
    "sector": "Road Projects",
    "project": "JV for DFCC & DMRC Projects",
    "partner": "Unity Infra",
    "country": "Confidential",
    "value": "INR 51.09 crore"
  },
  {
    "sector": "Road Projects",
    "project": "Road Infra",
    "partner": "Confidential",
    "country": "Confidential",
    "value": "INR 51 million"
  },
  {
    "sector": "Healthcare",
    "project": "Medical Equipment Lease (MRI, Linear Accelerator)",
    "partner": "India",
    "country": "Confidential",
    "value": "EUR 80 million"
  },
  {
    "sector": "Consumer Durables",
    "project": "Manufacturing / Distribution JV",
    "partner": "India / EU",
    "country": "Confidential",
    "value": "Confidential"
  },
  {
    "sector": "Public Housing",
    "project": "Slum Rehab & Urban Housing",
    "partner": "Nordic State",
    "country": "Confidential",
    "value": "EUR 120 million"
  },
  {
    "sector": "Real Estate",
    "project": "Residential Apartments Sweden",
    "partner": "Confidential",
    "country": "Confidential",
    "value": "EUR 110 million / USD 92 million"
  },
  {
    "sector": "Leisure",
    "project": "Alystarden Entwicklung",
    "partner": "Germany",
    "country": "Confidential",
    "value": "EUR 55 million"
  },
  {
    "sector": "Renewable Energy",
    "project": "Renewables Refinancing Vehicle",
    "partner": "East Europe",
    "country": "Confidential",
    "value": "EUR 300 million"
  },
  {
    "sector": "Water",
    "project": "Wastewater Treatment JV",
    "partner": "India/Israel",
    "country": "Confidential",
    "value": "USD 100 million & USD 60 million"
  },
  {
    "sector": "Water",
    "project": "Desalination Projects",
    "partner": "Mekorot, Israel",
    "country": "Confidential",
    "value": "USD 150 million"
  },
  {
    "sector": "Water",
    "project": "Water Supply Projects",
    "partner": "Mekorot, Israel",
    "country": "Confidential",
    "value": "USD 100 million"
  },
  {
    "sector": "Infrastructure",
    "project": "Station Redevelopment Engineering & Services",
    "partner": "EuroStation",
    "country": "Confidential",
    "value": "Confidential"
  },
  {
    "sector": "Thermal Power",
    "project": "660 MW x 3 Supercritical TPP",
    "partner": "Bajaj Hindustan & Israel Electric",
    "country": "Confidential",
    "value": "Confidential"
  },
  {
    "sector": "Renewable Energy",
    "project": "8000 MW Solar Projects",
    "partner": "Israel Electric",
    "country": "Confidential",
    "value": "Confidential"
  },
  {
    "sector": "Joint Ventures",
    "project": "JV Planning for Underground Coal Mines",
    "partner": "Indu Projects",
    "country": "Confidential",
    "value": "Confidential"
  },
  {
    "sector": "Water",
    "project": "Water Recycling Projects",
    "partner": "Mekorot, Haryana",
    "country": "Confidential",
    "value": "Confidential"
  },
  {
    "sector": "Water",
    "project": "Water Recycling Projects",
    "partner": "Mekorot, Rajasthan",
    "country": "Confidential",
    "value": "Confidential"
  },
  {
    "sector": "Infrastructure",
    "project": "Station Redevelopment India",
    "partner": "Indo-Belgium",
    "country": "Confidential",
    "value": "EUR 5 Billion"
  },
  {
    "sector": "Railways",
    "project": "DFCC Projects JV",
    "partner": "Gulsan Construction, Turkey",
    "country": "Confidential",
    "value": "USD 500 million"
  },
  {
    "sector": "Railways",
    "project": "DFCC & DMRC Projects JV",
    "partner": "Unity Infra Projects",
    "country": "Confidential",
    "value": "USD 620 million"
  },
  {
    "sector": "Legal Advisory",
    "project": "Legal Advisory for JV & PPP Structuring",
    "partner": "Sanjose India",
    "country": "Confidential",
    "value": "Confidential"
  },
  {
    "sector": "Aviation",
    "project": "Gulfstream G550 Jet Lease",
    "partner": "India",
    "country": "Confidential",
    "value": "USD 45 million"
  },
  {
    "sector": "Infrastructure",
    "project": "Private Metro Line Revenue Securitization",
    "partner": "India",
    "country": "Confidential",
    "value": "Confidential"
  },
  {
    "sector": "Finance",
    "project": "Trade Product & Liquidity Structuring",
    "partner": "Mid Cap Packaging Company, MP",
    "country": "Confidential",
    "value": "USD 50 million"
  },
  {
    "sector": "Finance",
    "project": "Paper Expansion",
    "partner": "Punjab, India",
    "country": "Confidential",
    "value": "EUR 55 million"
  },
  {
    "sector": "Finance",
    "project": "Paper Balancing Equipment",
    "partner": "Uttar Pradesh, India",
    "country": "Confidential",
    "value": "EUR 30 million"
  },
  {
    "sector": "Finance",
    "project": "Crowdfunding Refinance Platform",
    "partner": "Germany",
    "country": "Confidential",
    "value": "EUR 20 million"
  }
];

export default function TransactionTable() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sort, setSort] = useState<{ key: keyof Transaction; direction: "asc" | "desc" }>({ key: "sector", direction: "asc" });

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const rows = q ? transactions.filter((row) => Object.values(row).some((value) => value.toLowerCase().includes(q))) : transactions;
    return [...rows].sort((a, b) => {
      const result = a[sort.key].localeCompare(b[sort.key], undefined, { numeric: true, sensitivity: "base" });
      return sort.direction === "asc" ? result : -result;
    });
  }, [query, sort]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, pageCount);
  const visible = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  const toggleSort = (key: keyof Transaction) => {
    setSort((previous) => ({ key, direction: previous.key === key && previous.direction === "asc" ? "desc" : "asc" }));
    setPage(1);
  };

  return (
    <div className="transaction-data">
      <div className="transaction-controls">
        <label className="transaction-page-size">Show{" "}
          <select value={pageSize} onChange={(event) => { setPageSize(Number(event.target.value)); setPage(1); }}>
            <option value={10}>10</option><option value={25}>25</option><option value={50}>50</option>
          </select>{" "}entries
        </label>
        <label className="transaction-search">Search:
          <input value={query} onChange={(event) => { setQuery(event.target.value); setPage(1); }} placeholder="Search transactions" />
        </label>
      </div>
      <div className="transaction-table-wrap">
        <table className="transaction-table">
          <thead><tr>
            {([
              ["sector", "Sector"], ["project", "Project / Description"], ["partner", "Partner / Region"], ["country", "Country"], ["value", "Value"],
            ] as [keyof Transaction, string][]).map(([key, label]) => (
              <th key={key} aria-sort={sort.key === key ? (sort.direction === "asc" ? "ascending" : "descending") : "none"}>
                <button type="button" className="transaction-sort" onClick={() => toggleSort(key)}>{label}<span>{sort.key === key ? (sort.direction === "asc" ? "↑" : "↓") : "↕"}</span></button>
              </th>
            ))}
          </tr></thead>
          <tbody>{visible.map((row, index) => <tr key={`${row.project}-${row.partner}-${index}`}>
            <td>{row.sector}</td><td>{row.project}</td><td>{row.partner}</td><td>{row.country}</td><td>{row.value}</td>
          </tr>)}
          {visible.length === 0 && <tr><td colSpan={5} className="transaction-empty">No matching transactions found.</td></tr>}
          </tbody>
        </table>
      </div>
      <div className="transaction-pagination">
        <span>Showing {filtered.length ? (currentPage - 1) * pageSize + 1 : 0} to {Math.min(currentPage * pageSize, filtered.length)} of {filtered.length} entries</span>
        <div className="transaction-page-buttons">
          <button type="button" disabled={currentPage <= 1} onClick={() => setPage((value) => value - 1)}>Previous</button>
          {Array.from({ length: pageCount }, (_, index) => index + 1).filter((number) => pageCount <= 7 || number === 1 || number === pageCount || Math.abs(number - currentPage) <= 1).map((number, index, list) => (
            <span className="transaction-page-item" key={number}>
              {index > 0 && number - list[index - 1] > 1 && <span className="transaction-ellipsis">…</span>}
              <button type="button" aria-current={currentPage === number ? "page" : undefined} className={currentPage === number ? "is-current" : ""} onClick={() => setPage(number)}>{number}</button>
            </span>
          ))}
          <button type="button" disabled={currentPage >= pageCount} onClick={() => setPage((value) => value + 1)}>Next</button>
        </div>
      </div>
    </div>
  );
}
