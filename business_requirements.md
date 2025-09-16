# Finance GenAI Strategy Prototype Portal  
**Version:** Draft v1.3  
**Owner:** Finance GenAI Strategy Team  
**Audience:** Leadership + Internal Tech Stakeholders  
**Deployment:** React + Tailwind, GitHub Pages (SSG)

---

## 1. 🎯 Objective
To build a **prototype Finance Copilot Portal** (OpenBB-style) that demonstrates:

- 🌐 Integration of copilots with finance workflows.  
- 📦 Widget-based registration (files, FAQs, APIs, docs, data products).  
- 🧩 Inference flow after admin approval.  
- 🤖 Copilot chat that gives contextual, explainable, and **visually formatted** answers.

---

## 2. 🚀 Key Use Cases (MVP → Global Tax Copilot)

### 2.1 🌍 Webpage Widget  
**Description:** Preloaded OECD DST tracker page (looks like a website with URL preview).  

**User Journey:**  
1. User drags DST Webpage widget into workspace.  
2. Copilot shows preview (hardcoded iframe).  
3. User asks: *“Which countries have DST rules as per OECD tracker?”*  
4. Copilot extracts highlights + citations → formatted response in chat.  

**Sample Q&A:**  
- **Q:** Which markets are live with DST as per OECD?  
- **A (Copilot):** OECD lists 🇫🇷 France, 🇮🇹 Italy, 🇪🇸 Spain with active DST measures. [OECD DST Tracker]  

---

### 2.2 📂 File Content Widget  
**Description:** Trial Balance file with dummy FY24 tax provision data.  

**User Journey:**  
1. User uploads sample Trial Balance (validated).  
2. Admin approves → widget appears in library.  
3. Analyst drags into workspace.  
4. Query: *“Show deferred tax provisions for FY24.”*  
5. Copilot parses file → structured response with numbers.  

**Sample Q&A:**  
- **Q:** What is total deferred tax expense FY24?  
- **A (Copilot):** Deferred Tax Expense: **$2.3M** (14% of total provisions).  

---

### 2.3 ❓ FAQ Widget  
**Description:** Pre-seeded with Transfer Pricing + India GST rules.  

**User Journey:**  
1. Analyst drags FAQ widget.  
2. User queries: *“What are TP documentation thresholds in India?”*  
3. Copilot performs RAG → retrieves seeded FAQ → cites source.  

**Sample Q&A:**  
- **Q:** GST threshold in India for mandatory registration?  
- **A (Copilot):** INR **40 lakhs** for goods, INR **20 lakhs** for services. [Govt. Circular Ref.]  

---

### 2.4 🔌 API Integration Widget  
**Description:** Stub for Rate Selection System (RSS API).  

**User Journey:**  
1. User drags API widget.  
2. Clicks “Get Exchange Rate” → Flow:  
   - *Checking your authorization…*  
   - *Authorized ✔️*  
   - *Calling RSS system…*  
   - Returns mock rate → “USD/INR = 83.25”  

**Sample Q&A:**  
- **Q:** Give me today’s EUR/INR rate.  
- **A (Copilot):** EUR/INR = **89.40** (from RSS API stub, 2024-12-01).  

---

### 2.5 📊 Trusted Data Product Widget  
**Description:** Pulls mock datasets from Tax Data Marketplace (e.g., DST dataset).  

**User Journey:**  
1. User drags DST dataset widget.  
2. Copilot suggests: *“You can ask: DST collections by country for FY23.”*  
3. User clicks query button → copilot fetches dataset summary.  

**Sample Q&A:**  
- **Q:** DST collections FY23 (mock)?  
- **A (Copilot):**  
   - 🇫🇷 France: $120M  
   - 🇮🇹 Italy: $95M  
   - 🇪🇸 Spain: $88M  

---

### 2.6 🗂️ Digital Document Storage + Data Product Widget  
**Description:** Combines structured dataset (Sales & Use Tax) with unstructured audit docs.  

**User Journey:**  
1. Analyst drags Sales & Use Tax dataset + US/SNUT doc folder.  
2. Queries: *“Show audit trail for SNUT 2023 returns.”*  
3. Copilot blends structured + unstructured sources.  
4. Response includes: tabular data + extracted doc snippets.  

**Sample Q&A:**  
- **Q:** Where is SNUT filing variance noted?  
- **A (Copilot):** Variance of **$1.2M** flagged in FY23 audit doc (Pg. 12, DocRef#SNUT-23).  

---

## 3. 🛠️ Future Copilots
- 🔄 Recon Copilot (Coming soon)  
- 📒 Accounting Copilot (Coming soon)  

---

## 4. 👥 Users & Roles
- 🛡️ **Admins:** Approve registered widgets.  
- 📊 **Analysts/Users:** Register, drag, and query widgets.  
- 👩‍💻 **Guests/Junior Users:** Only interact with approved widgets.  

---

## 5. 🛠️ Setup Flow (Detailed)

The Setup Flow ensures that **all widgets are registered, validated, and approved** before being used in inference.  
This protects the portal from unverified data and maintains governance.  

### Step 1: 🔎 Widget Registration
- User (Analyst/Admin) selects **“Register New Widget”**.  
- Provides required **metadata**:  
  - ID, Title, Description, Category  
  - Source (URL, file, API endpoint, marketplace)  
  - Schema (if structured)  
  - Flag if unstructured (e.g., documents)  

**Example:** Analyst registers *“Trial Balance FY24 File”*.  

---

### Step 2: 🛡️ Validation
- **File Widgets:** system validates schema & file type (e.g., CSV/JSON).  
- **Web Widgets:** URL whitelisted & sandbox preview created.  
- **FAQ Widgets:** Q&A pairs formatted into JSON.  
- **API Widgets:** Endpoint mocked/stubbed for demo.  

**Example:** Trial Balance CSV schema passes validation.  

---

### Step 3: ✅ Admin Approval
- Admin reviews metadata + validation logs.  
- Approves / rejects widget.  
- Approved widgets move into **Sidebar Library**.  

**Example:** Admin approves *Trial Balance FY24 File* → visible under “File Widgets”.  

---

### Step 4: 📚 Library Listing
- Approved widget appears in **Sidebar → Library** with:  
  - Title + Category Icon  
  - Status = Approved  
  - Tooltip → description & source info  

**Example:** *Trial Balance FY24 File* shows in library with 📂 icon.  

---

### Step 5: 🎨 Ready for Inference
- Once in library, widget can be **dragged into Workspace Canvas**.  
- Copilot now has access to its context.  

**Example:** Analyst drags Trial Balance widget → asks *“Tax provisions for FY24?”*  

---

### Setup Flow (ASCII-style overview)