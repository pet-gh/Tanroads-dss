// ── TANROADS DSS DATA ────────────────────────────────────────────────────────

const strategies = [
  {name:"Reliability-Centered Maintenance", cc:1.000, sp:0.000, sn:0.171},
  {name:"Predictive Maintenance",           cc:0.704, sp:0.053, sn:0.126},
  {name:"Preventive Maintenance",           cc:0.638, sp:0.067, sn:0.118},
  {name:"Corrective Maintenance",           cc:0.339, sp:0.129, sn:0.066},
  {name:"Periodic Maintenance",             cc:0.448, sp:0.102, sn:0.083},
  {name:"Emergency Maintenance",            cc:0.270, sp:0.146, sn:0.054},
  {name:"Routine Maintenance",              cc:0.199, sp:0.161, sn:0.040},
];

let roadSegments = [
  {id:"TZ-DSM-001",region:"Dar es Salaam",road:"Nyerere Rd",class:"Trunk Road",  len:28,pci:22,iri:9.5,aadt:42000,cost:850, lat:-6.800,lng:39.200,strategic:3,last:4},
  {id:"TZ-DSM-002",region:"Dar es Salaam",road:"Morogoro Rd",class:"Trunk Road", len:15,pci:45,iri:6.2,aadt:28000,cost:320, lat:-6.780,lng:39.240,strategic:3,last:3},
  {id:"TZ-ARU-001",region:"Arusha",       road:"Arusha–Moshi",class:"Trunk Road",len:82,pci:61,iri:4.1,aadt:12000,cost:640, lat:-3.387,lng:36.682,strategic:2,last:2},
  {id:"TZ-DOD-001",region:"Dodoma",       road:"Dodoma Bypass",class:"Regional", len:34,pci:18,iri:11.2,aadt:8500,cost:420,  lat:-6.173,lng:35.739,strategic:2,last:5},
  {id:"TZ-MWZ-001",region:"Mwanza",       road:"Mwanza Port Rd",class:"Trunk",   len:12,pci:55,iri:5.1,aadt:15000,cost:180, lat:-2.516,lng:32.900,strategic:3,last:2},
  {id:"TZ-MBY-001",region:"Mbeya",        road:"Mbeya–Tunduma",class:"Trunk Rd", len:95,pci:38,iri:7.8,aadt:9200,cost:780,  lat:-8.910,lng:33.460,strategic:2,last:4},
  {id:"TZ-TNG-001",region:"Tanga",        road:"Tanga–Horohoro",class:"Regional",len:68,pci:71,iri:3.2,aadt:6800,cost:390,  lat:-5.069,lng:39.099,strategic:1,last:1},
  {id:"TZ-TAB-001",region:"Tabora",       road:"Tabora–Nzega",  class:"Regional",len:120,pci:29,iri:9.0,aadt:3200,cost:560, lat:-5.022,lng:32.800,strategic:1,last:5},
];