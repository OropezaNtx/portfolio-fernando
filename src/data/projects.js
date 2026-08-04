export const projects = [
  {
    id: "commercial-data-integration",
    title: "Commercial Data Integration & Performance Analytics",
    category: "Data Engineering · SQL · Business Intelligence",
    tech: ["SQL", "BigQuery", "Power BI", "Python", "Data Modeling"],
    image: "/images/projects/bigquery.png",
    problem:
      "Commercial information was distributed across multiple operational sources, making it difficult to follow affiliations, coverage, visits, billing and sales performance consistently.",
    solution:
      "Designed BigQuery processes to integrate, standardize and transform information from affiliations, executives, campaigns, industries, visits, coverage and billing. Added calculations, validations, commercial criteria and dashboard-ready datasets.",
    impact:
      "Created a centralized analytical foundation for operational follow-up, executive support, performance analysis and business decision-making.",
    metrics: [
      "Integrated multiple commercial data domains",
      "Applied traceable business rules and validations",
      "Prepared analytical datasets for Power BI and operational reporting",
    ],
    responsibilities: [
      "Designed advanced SQL transformations",
      "Implemented business rules and calculated classifications",
      "Standardized and reconciled source information",
      "Supported operational inquiries and dashboard development",
    ],
  },
  {
    id: "coverage-gap-form",
    title: "Coverage GAP Form",
    category: "Data Capture · Automation · Desktop Application",
    tech: ["Python", "Pandas", "Desktop UI", "Excel", "PyInstaller"],
    image: "/images/projects/coverage-gap.png",
    problem:
      "Commercial teams needed a structured way to capture merchant and sales information while reducing incomplete records, inconsistent formats and manual validation work.",
    solution:
      "Developed a Python desktop application with field validations, autocomplete, calculated values, business rules and controlled import and export workflows for executive use.",
    impact:
      "Standardized commercial data capture, reduced preventable errors and improved the quality of information used by downstream reporting processes.",
    metrics: [
      "Automated field and business-rule validation",
      "Standardized merchant and sales records",
      "Enabled controlled import and export workflows",
    ],
    responsibilities: [
      "Designed the application workflow and interface",
      "Implemented validations and autocomplete behavior",
      "Built calculated classifications and business rules",
      "Prepared executable distribution and user workflows",
    ],
  },
  {
    id: "naf-automation",
    title: "NAF Commercial Classification Automation",
    category: "Automation · Data Integration · Commercial Rules",
    tech: ["Python", "Pandas", "BigQuery", "SQL", "Jupyter", "Excel"],
    image: "/images/projects/naf-automation.png",
    problem:
      "Merchant promotion and payment classifications required manual reconciliation of operational and billing information from different files and data sources.",
    solution:
      "Automated the integration, standardization and classification process using Python and BigQuery, applying billing calculations, commercial thresholds and traceable inclusion or exclusion criteria.",
    impact:
      "Reduced manual review, centralized classification criteria and accelerated preparation of operational deliverables.",
    metrics: [
      "Centralized commercial classification rules",
      "Automated billing-based evaluations",
      "Generated structured outputs for operational teams",
    ],
    responsibilities: [
      "Integrated operational layouts and billing sources",
      "Implemented classification and threshold logic",
      "Built quality controls and traceable outputs",
      "Automated preparation of final deliverables",
    ],
  },
  {
    id: "qr-traceability",
    title: "QR Traceability System",
    category: "Automation · Pharmaceutical Quality Control",
    tech: ["Python", "Access", "SQL", "Power BI", "Excel"],
    image: "/images/projects/qr-traceability.png",
    problem:
      "Batch records and quality documentation relied heavily on manual and paper-based workflows, slowing identification and traceability.",
    solution:
      "Developed a QR solution connected to a centralized Access database, supported by Python and SQL, to identify batches, retrieve records and strengthen digital traceability.",
    impact:
      "Improved access to batch information, supported paperless controls and strengthened quality-process monitoring.",
    metrics: [
      "Improved batch identification and traceability",
      "Reduced dependence on paper-based lookup",
      "Supported quality dashboards and operational monitoring",
    ],
    responsibilities: [
      "Designed the database structure",
      "Developed QR generation and consultation workflows",
      "Connected records through SQL queries",
      "Supported Power BI indicators and process documentation",
    ],
  },
  {
    id: "gps-mobility-tools",
    title: "GPS & Mobility Data Tools",
    category: "Geospatial Data · Mobility Studies",
    tech: ["Python", "GPX", "GDB", "KMZ", "QGIS", "Google Earth", "Excel"],
    image: "/images/projects/gps-tools.png",
    problem:
      "Mobility studies required time-consuming cleaning, segmentation and validation of GPS routes across multiple geospatial formats.",
    solution:
      "Developed tools and procedures to process GPX, GDB and KMZ files, validate routes, identify inconsistencies and generate consolidated databases, maps and technical outputs.",
    impact:
      "Accelerated mobility-data preparation, improved deliverable quality and supported projects developed across different regions of Mexico.",
    metrics: [
      "Automated route processing and validation",
      "Integrated multiple geospatial formats",
      "Generated structured databases, maps and reports",
    ],
    responsibilities: [
      "Processed and standardized geospatial information",
      "Created route and waypoint validation logic",
      "Coordinated quality-control and field teams",
      "Prepared technical deliverables and operating procedures",
    ],
  },
  {
    id: "afora",
    title: "AFORA",
    category: "Product Development · Web & Mobile Platform",
    tech: ["Kotlin", "Firebase", "React", "Data Validation", "Field Operations"],
    image: "/images/projects/android-field.png",
    problem:
      "Operational and mobility projects need flexible tools for structured field capture, validation and subsequent analysis.",
    solution:
      "Designed a web and mobile platform for capturing, validating and analyzing operational and mobility information through configurable workflows.",
    impact:
      "Created a product foundation for standardized field operations, centralized information and future analytical modules.",
    metrics: [
      "Structured field-data capture",
      "Web and mobile product architecture",
      "Centralized operational information",
    ],
    responsibilities: [
      "Defined product vision and workflows",
      "Designed mobile and web architecture",
      "Modeled data-capture and validation modules",
      "Led functional and technical development",
    ],
  },
  {
    id: "politycs",
    title: "POLITYCS",
    category: "Territorial Intelligence · Data Platform",
    tech: ["FastAPI", "PostgreSQL", "Next.js", "Public Data", "Analytics"],
    image: "/images/projects/politycs.png",
    problem:
      "Public indicators and territorial information are often fragmented, limiting comparative analysis and local understanding.",
    solution:
      "Designed a territorial-intelligence platform to integrate public data, indicators and trends through a modern API, database and web architecture.",
    impact:
      "Established a scalable foundation for territorial analysis, comparative indicators and data-driven exploration.",
    metrics: [
      "Integrated territorial and public-data concepts",
      "Designed API and database architecture",
      "Prepared scalable analytical modules",
    ],
    responsibilities: [
      "Defined the solution architecture",
      "Modeled PostgreSQL data structures",
      "Designed FastAPI services",
      "Planned analytical and visualization experiences",
    ],
  },
  {
    id: "mobilytics",
    title: "MOBILYTICS",
    category: "Consulting · Automation · Data Quality",
    tech: ["Python", "SQL", "Excel", "Automation", "Process Design"],
    image: "/images/projects/mobilytics.png",
    problem:
      "Small organizations and project teams frequently depend on fragmented files, manual activities and undocumented quality controls.",
    solution:
      "Created a consulting initiative focused on automating processes, integrating information sources and implementing practical data-quality controls.",
    impact:
      "Provides a professional framework for delivering reusable automation, integration and process-improvement solutions.",
    metrics: [
      "Process and data-quality consulting model",
      "Reusable automation approach",
      "Business-oriented technical solutions",
    ],
    responsibilities: [
      "Defined service and solution offerings",
      "Designed automation and integration approaches",
      "Developed technical prototypes",
      "Translated operational needs into implementation plans",
    ],
  },
]
