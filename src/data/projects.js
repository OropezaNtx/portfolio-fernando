export const projects = [
  {
    id: "coverage-gap-form",
    title: "Coverage GAP Form",
    category: "Data Capture · Automation · Desktop App",
    tech: ["Python", "Tkinter", "SQLite", "Excel", "PyInstaller"],
    image: "/images/projects/coverage-gap.png",

    github: "https://github.com/OropezaNtx/my-portfolio.git",

    problem:
      "Commercial teams needed a structured way to capture, validate and consolidate operational records while reducing manual errors and inconsistencies.",
    solution:
      "Built a desktop platform with dynamic forms, validation rules, local database storage, import/export workflows, audit tracking and business logic for Coverage GAP classification.",
    impact:
      "Improved data quality, reduced manual errors and created a more reliable process for commercial record management.",
    metrics: [
      "Automated manual validation flows",
      "Improved record consistency",
      "Enabled structured local data capture",
    ],
    responsibilities: [
      "Designed the application architecture",
      "Built the Tkinter interface",
      "Implemented SQLite persistence",
      "Created import/export workflows",
      "Added validation and audit logic",
    ],
  },
  {
    id: "bigquery-analytics",
    title: "BigQuery Analytics",
    category: "Data Engineering · SQL · BI",
    tech: ["SQL", "BigQuery", "Power BI", "Data Modeling"],
    image: "/images/projects/bigquery.png",

    github: "https://github.com/TU_USUARIO/bigquery-analytics",

    problem:
      "Business data was distributed across multiple sources, making it difficult to analyze performance, segmentation and commercial coverage accurately.",
    solution:
      "Developed SQL pipelines, unified datasets and analytical queries in BigQuery for Coverage GAP, segmentation, sales metrics and executive reporting.",
    impact:
      "Enabled cleaner reporting, stronger business insights and better data consolidation for decision-making.",
    metrics: [
      "Unified multiple business sources",
      "Improved analytical consistency",
      "Prepared data for Power BI dashboards",
    ],
    responsibilities: [
      "Built advanced SQL queries",
      "Designed business logic in BigQuery",
      "Created calculated fields and segmentation logic",
      "Supported dashboard-ready datasets",
    ],
  },
  {
    id: "pos-system",
    title: "POS System",
    category: "Desktop App · Business Software",
    tech: ["Python", "Tkinter", "SQLite", "Inventory Logic"],
    image: "/images/projects/pos.png",

    github: "https://github.com/TU_USUARIO/pos-system",

    problem:
      "Small businesses often manage sales, inventory and cash control manually, increasing operational risk and reducing visibility.",
    solution:
      "Developed a point-of-sale system with product management, sales records, user roles, tickets, inventory control and operational flows.",
    impact:
      "Digitized core sales operations and improved control over inventory, transactions and daily business activity.",
    metrics: [
      "Centralized sales operations",
      "Improved inventory control",
      "Reduced manual tracking",
    ],
    responsibilities: [
      "Designed database structure",
      "Built sales and inventory modules",
      "Implemented ticket generation",
      "Created user and role logic",
    ],
  },
  {
    id: "android-field-app",
    title: "Android Field App",
    category: "Mobile App · Field Operations",
    tech: ["Kotlin", "Jetpack Compose", "Room", "GPS", "Firebase"],
    image: "/images/projects/android-field.png",

    github: "https://github.com/TU_USUARIO/android-field-app",

    problem:
      "Field data collection for transport and market studies can be inconsistent, manual and hard to validate.",
    solution:
      "Designed a mobile app for structured field capture, GPS-based records, offline operation and study-specific modules.",
    impact:
      "Standardized field data collection and created a foundation for real-time reporting and operational monitoring.",
    metrics: [
      "Structured mobile capture",
      "Offline-first approach",
      "GPS-based evidence collection",
    ],
    responsibilities: [
      "Designed mobile workflows",
      "Modeled Room database entities",
      "Built Jetpack Compose screens",
      "Planned Firebase synchronization",
    ],
  },
  {
    id: "qr-traceability",
    title: "QR Traceability System",
    category: "Automation · Quality Control",
    tech: ["Python", "Access", "SQL", "Power BI", "Excel"],
    image: "/images/projects/qr-traceability.png",

    github: "https://github.com/TU_USUARIO/qr-traceability",

    problem:
      "Production file tracking relied on manual and paper-based workflows, making traceability slower and less reliable.",
    solution:
      "Built a QR code generator connected to an Access database with SQL queries, enabling faster identification and tracking of production batches.",
    impact:
      "Improved traceability, reduced manual lookup time and supported digital control of quality documentation.",
    metrics: [
      "Improved batch traceability",
      "Reduced paper-based tracking",
      "Supported digital quality control",
    ],
    responsibilities: [
      "Designed Access database structure",
      "Built QR generator in Python",
      "Connected SQL queries",
      "Supported Power BI reporting",
    ],
  },
  {
    id: "gps-mobility-tools",
    title: "GPS & Mobility Data Tools",
    category: "Geospatial Data · Mobility Studies",
    tech: ["Python", "GPX", "GDB", "KMZ", "QGIS", "Google Earth", "Excel"],
    image: "/images/projects/gps-tools.png",

    github: "https://github.com/TU_USUARIO/gps-tools",

    problem:
      "Mobility studies required cleaning, segmenting and validating GPS routes manually across different geospatial formats.",
    solution:
      "Developed tools to process GPX/GDB/KMZ files, analyze waypoints, detect signal loss, segment routes and generate structured Excel outputs.",
    impact:
      "Accelerated GPS data analysis for transport studies and improved the quality of deliverables for mobility projects.",
    metrics: [
      "Automated GPS route processing",
      "Detected signal loss",
      "Generated structured Excel reports",
    ],
    responsibilities: [
      "Processed GPX/GDB/KMZ files",
      "Built route segmentation logic",
      "Generated Excel reports",
      "Supported mobility deliverables",
    ],
  },
]