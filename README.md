# TANROADS Road Maintenance Decision Support System (DSS)

> **A web-based Decision Support System for road maintenance strategy prioritization using integrated Fuzzy AHP and TOPSIS methodology.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-brightgreen)](https://yourusername.github.io/tanroads-dss/)
[![Method](https://img.shields.io/badge/Method-FAHP%E2%80%93TOPSIS-blue)](https://yourusername.github.io/tanroads-dss/)
[![Institution](https://img.shields.io/badge/Institution-UDSM-orange)](https://www.udsm.ac.tz)
[![Year](https://img.shields.io/badge/Year-2026-lightgrey)](https://yourusername.github.io/tanroads-dss/)

---

## Overview

This Decision Support System (DSS) was developed as part of a Master of Engineering Management (Project Management) dissertation at the **University of Dar es Salaam (UDSM)**. The system provides a structured, transparent, and objective framework for prioritizing road maintenance interventions for the **Tanzania National Roads Agency (TANROADS)**.

The DSS integrates **Fuzzy Analytic Hierarchy Process (FAHP)** for criteria weighting and **Technique for Order Preference by Similarity to Ideal Solution (TOPSIS)** for ranking seven maintenance strategies across five decision criteria.

---

## Live Demo

🌐 **Access the system here:**
👉 [https://yourusername.github.io/tanroads-dss/](https://Pogwa.github.io/tanroads-dss/)

---

## Features

| Module | Description |
|--------|-------------|
| 📊 **Dashboard & Rankings** | TOPSIS ranking of all 7 maintenance strategies with closeness coefficients and interactive charts |
| 🛣️ **Road Data Input** | Enter PCI, IRI, AADT, cost, and strategic context — system computes real-time maintenance recommendation |
| 🗺️ **GIS Map View** | Interactive Leaflet map of Tanzania showing road segments colour-coded by pavement condition |
| 💰 **Budget Optimization** | Allocate available budget across road segments using priority-based, condition-based, or traffic-based strategies |
| 📋 **Decision Matrix** | Full fuzzy decision matrix, weighted normalized matrix, and ideal solutions from the dissertation |
| 📄 **PDF Report Export** | Generate a complete printable TANROADS report including rankings, segment data, and recommendations |
| 📖 **Methodology** | Step-by-step explanation of the FAHP–TOPSIS framework |

---

## Methodology

### Decision Criteria (FAHP Weights)

| Criterion | Weight | Significance |
|-----------|--------|-------------|
| Effectiveness | **0.29** | Long-term operational performance and reliability |
| Value Addition | **0.24** | Road quality improvement and service delivery |
| Cost | **0.21** | Financial efficiency under budget constraints |
| Implementation | **0.16** | Operational feasibility and execution capacity |
| Safety | **0.10** | Worker and road user safety compliance |

### TOPSIS Ranking Results

| Rank | Maintenance Strategy | Closeness Coefficient | Priority |
|------|---------------------|----------------------|----------|
| 1 | Reliability-Centered Maintenance | **1.000** | HIGH |
| 2 | Predictive Maintenance | **0.704** | HIGH |
| 3 | Preventive Maintenance | **0.638** | HIGH |
| 4 | Corrective Maintenance | 0.339 | MODERATE |
| 5 | Periodic Maintenance | 0.448 | MODERATE |
| 6 | Emergency Maintenance | 0.270 | LOW |
| 7 | Routine Maintenance | 0.199 | LOW |

---

## Road Condition Classification

The GIS map uses the following PCI-based colour coding:

| Colour | PCI Range | Condition | Recommended Action |
|--------|-----------|-----------|-------------------|
| 🔴 Red | 0 – 25 | Critical | Immediate rehabilitation |
| 🟡 Amber | 25 – 50 | Poor | Periodic maintenance |
| 🔵 Blue | 50 – 70 | Fair | Preventive maintenance |
| 🟢 Green | 70 – 100 | Good | Routine monitoring |

---

## How to Use

### 1. View Rankings
Open the **Dashboard** tab to see the full TOPSIS ranking of all maintenance strategies with interactive charts.

### 2. Assess a Road Segment
Go to **Road Data Input** and enter:
- Pavement Condition Index (PCI)
- International Roughness Index (IRI) in m/km
- Average Annual Daily Traffic (AADT)
- Maintenance cost estimate in TZS Million
- Strategic importance and last maintenance date

Click **Compute Recommendation** to get instant DSS output.

### 3. View on Map
Switch to **GIS Map View** to see all road segments plotted on Tanzania's map. Click any marker to view its recommendation.

### 4. Optimize Budget
Go to **Budget Optimization**, enter your total available budget, choose an allocation strategy, and the system ranks which segments to fund first.

### 5. Export Report
Click **Export PDF Report** in the header to generate a full printable TANROADS report.

---

## Technology Stack

| Component | Technology |
|-----------|-----------|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Mapping | [Leaflet.js](https://leafletjs.com/) + OpenStreetMap |
| Charts | [Chart.js](https://www.chartjs.org/) |
| Fonts | [Google Fonts — Space Mono + Sora](https://fonts.google.com/) |
| Hosting | [GitHub Pages](https://pages.github.com/) |
| Analytics | FAHP–TOPSIS (custom JS implementation) |

---

## Academic Reference

```
Pogwa, Y. (2026). Development of Decision Support System for Road Maintenance
Strategy Prioritization: A Case Study of the Tanzania National Roads Agency
(TANROADS). MSc Engineering Management (Project Management) Dissertation,
University of Dar es Salaam, Tanzania.

Supervisor: Dr. John Kafuku
Institution: University of Dar es Salaam (UDSM)
```

### Key References

- Saaty, T.L. (1980). *The Analytic Hierarchy Process*. McGraw-Hill.
- Chaipetch, P., et al. (2022). AHP-based decision support system for sustainable road maintenance prioritization. *Sustainability*, 14(8).
- Liu, J., et al. (2024). Application of AHP and TOPSIS in pavement preventive maintenance selection. *Construction and Building Materials*, 415.
- TANROADS (2022). *Annual Performance Report 2021/2022*. Dar es Salaam.

---

## Project Structure

```
tanroads-dss/
│
├── index.html          # Main DSS application (all-in-one)
└── README.md           # This file
```

---

## Contributing

This system was developed for TANROADS and UDSM research purposes. If you would like to contribute improvements or adapt it for another road agency, please:

1. Fork this repository
2. Create a feature branch (`git checkout -b feature/your-improvement`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-improvement`)
5. Open a Pull Request

---

## License

This project is developed for academic and public infrastructure management purposes. The system may be freely adapted for road maintenance planning in developing countries facing similar resource allocation challenges.

---

## Contact

**Author:** Yusuph Pogwa
**Institution:** University of Dar es Salaam (UDSM)
**Programme:** MSc Engineering Management — Project Management
**Supervisor:** Dr. John Kafuku

---

*Built with ❤️ for Tanzania's road infrastructure | UDSM 2026*
