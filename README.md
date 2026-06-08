# TANROADS Road Maintenance Decision Support System (DSS)

> **A web-based Decision Support System for road maintenance strategy prioritization using integrated Fuzzy AHP and TOPSIS methodology.**

---

## Project Structure

```
tanroads-dss/
│
├── index.html              # Main application file
├── css/
│   └── style.css           # All styling (dark theme, responsive design)
├── js/
│   ├── data.js             # Data module (strategies, road segments)
│   └── app.js              # Main application logic
├── README.md               # This file
└── assets/                 # (Optional) For images, icons, etc.
```

## File Organization

### **index.html**
- Lightweight HTML structure
- Imports external CSS and JS files
- Contains all UI markup (header, sidebar, tabs, forms, maps, charts)

### **css/style.css**
- CSS Variables for theme management
- All styling rules (layout, colors, typography, components)
- Responsive design patterns
- 158 lines of well-organized CSS

### **js/data.js**
- `strategies[]` - Array of 7 maintenance strategies with TOPSIS scores
- `roadSegments[]` - Array of 8 pre-loaded road segments with road condition data
- Data can be extended or connected to a backend API

### **js/app.js**
- **Tab Navigation**: `showTab()` - Switch between modules
- **Dashboard**: `renderRankGrid()`, `initCharts()` - Display rankings and charts
- **GIS Map**: `initMap()`, `pciColor()` - Interactive Leaflet map
- **DSS Logic**: `getDSSRec()`, `computeDSS()` - Recommendation engine
- **Budget**: `optimizeBudget()` - Budget allocation across segments
- **PDF Export**: `exportPDF()` - Generate printable reports
- **Utilities**: `notify()` - User notifications

## Features

| Module | Description |
|--------|-------------|
| 📊 **Dashboard & Rankings** | TOPSIS ranking of all 7 maintenance strategies with charts |
| 🛣️ **Road Data Input** | Enter PCI, IRI, AADT, cost — system computes real-time recommendation |
| 🗺️ **GIS Map View** | Interactive Leaflet map of Tanzania colour-coded by condition |
| 💰 **Budget Optimization** | Allocate budget using priority-based, condition-based, or traffic-based strategies |
| 📋 **Decision Matrix** | Full fuzzy decision matrices from dissertation |
| 📖 **Methodology** | 7-step explanation of FAHP–TOPSIS framework |
| 📄 **PDF Export** | Generate complete printable TANROADS report |

## Getting Started

### 1. **Live Demo**
Access at: [https://pet-gh.github.io/Tanroads-dss/](https://pet-gh.github.io/Tanroads-dss/)

### 2. **Local Development**
```bash
# Clone the repository
git clone https://github.com/pet-gh/Tanroads-dss.git
cd Tanroads-dss

# Open in browser (no build process needed)
open index.html
```

### 3. **Extending the System**

#### Add More Road Segments
Edit `js/data.js` and add to `roadSegments[]`:
```javascript
{
  id:"TZ-NEW-001",
  region:"Dar es Salaam",
  road:"New Road Name",
  class:"Trunk Road",
  len:50,
  pci:40,
  iri:6.5,
  aadt:20000,
  cost:500,
  lat:-6.8,
  lng:39.2,
  strategic:3,
  last:3
}
```

#### Connect to Backend API
Modify `js/app.js` to fetch data:
```javascript
// Replace hardcoded roadSegments
async function loadSegments() {
  const response = await fetch('/api/segments');
  roadSegments = await response.json();
}
```

#### Update Styling
Modify `css/style.css` - CSS variables make theming easy:
```css
:root {
  --accent: #f59e0b;      /* Change primary color */
  --bg: #0a0f1e;          /* Change background */
  /* ... other variables ... */
}
```

## Technology Stack

| Component | Technology |
|-----------|-----------|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Mapping | [Leaflet.js](https://leafletjs.com/) + OpenStreetMap |
| Charts | [Chart.js](https://www.chartjs.org/) |
| Fonts | [Google Fonts — Space Mono + Sora](https://fonts.google.com/) |
| Hosting | [GitHub Pages](https://pages.github.com/) |
| Analytics | FAHP–TOPSIS (custom JS implementation) |

## Methodology

### FAHP Criteria Weights
| Criterion | Weight |
|-----------|--------|
| Effectiveness | **0.29** |
| Value Addition | **0.24** |
| Cost | **0.21** |
| Implementation | **0.16** |
| Safety | **0.10** |

### TOPSIS Ranking (7 Strategies)
| Rank | Strategy | CC Score | Priority |
|------|----------|----------|----------|
| 1 | Reliability-Centered Maintenance | **1.000** | HIGH |
| 2 | Predictive Maintenance | **0.704** | HIGH |
| 3 | Preventive Maintenance | **0.638** | HIGH |
| 4 | Periodic Maintenance | 0.448 | MODERATE |
| 5 | Corrective Maintenance | 0.339 | MODERATE |
| 6 | Emergency Maintenance | 0.270 | LOW |
| 7 | Routine Maintenance | 0.199 | LOW |

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

## Contributing

If you'd like to contribute improvements or adapt it for another road agency:

1. Fork this repository
2. Create a feature branch (`git checkout -b feature/your-improvement`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-improvement`)
5. Open a Pull Request

## License

This project is developed for academic and public infrastructure management purposes. The system may be freely adapted for road maintenance planning in developing countries.

## Contact

**Author:** Yusuph Pogwa  
**Institution:** University of Dar es Salaam (UDSM)  
**Programme:** MSc Engineering Management — Project Management  
**Supervisor:** Dr. John Kafuku  

---

*Built with ❤️ for Tanzania's road infrastructure | UDSM 2026*
