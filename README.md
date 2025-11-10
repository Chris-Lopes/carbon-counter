# Carbon Counter (C--)

## 🌍 Overview

**Carbon Counter** is a comprehensive carbon footprint management platform that leverages blockchain technology, IoT sensors, AI-powered analytics, and a multi-platform ecosystem to help individuals and companies track, reduce, and offset their carbon emissions. The platform integrates cutting-edge technologies to provide real-time monitoring, automated carbon calculations, and a decentralized marketplace for carbon credits.

### Key Highlights

- 🔗 **Blockchain-based Carbon Credit Trading** using Ethereum smart contracts
- 📱 **Multi-platform Support**: Web application, Mobile app (React Native), and IoT integration
- 🤖 **AI-Powered Analysis** using Google Gemini for bill scanning and emissions reporting
- 📊 **Real-time Monitoring** with Arduino-based smoke detection and air quality sensors
- 💰 **Decentralized Marketplace** for carbon credit tokenization (ERC-20)
- 📈 **Advanced Analytics** with interactive charts and data visualization
- 🏢 **Enterprise & Individual Solutions** with separate dashboards and features

---

## 🚀 Features

### 1. Web Application

The web application is divided into two main portals: **Company Dashboard** and **User Portal**, each tailored to specific needs.

#### 1.1 Company Dashboard Features

##### **A. Carbon Emissions Overview**

The dashboard provides a comprehensive view of a company's carbon footprint with real-time metrics and trends.

**Key Metrics:**

- **Total Emissions Tracking**: Monitor total carbon emissions (tCO2e) across all facilities
- **Emissions Target Setting**: Define reduction targets and track progress with visual indicators
- **Monthly Trend Analysis**: Line charts showing emission patterns over 6-12 months
- **Carbon Credit Balance**: Real-time display of owned carbon credit tokens (ERC-20)
- **Blockchain Wallet Integration**: Connected Ethereum wallet showing wallet address and token balance

**Technical Implementation:**

- React-based dashboard with Chart.js integration for visualizations
- Real-time data fetching from MongoDB backend
- Responsive design optimized for desktop and tablet viewing
- Color-coded status indicators (green for on-target, red for over-target)

##### **B. AI-Powered Carbon Calculator**

This feature uses Google Gemini AI to automatically extract data from bills and receipts to calculate carbon emissions.

**How It Works:**

1. **Image Upload**: Users can upload photos of bills (electricity, water, gas, fuel, grocery)
2. **Camera Capture**: Direct photo capture via device camera for instant processing
3. **AI Analysis**: Google Gemini Vision API extracts:
   - Bill type identification (utility, fuel, grocery)
   - Consumption quantities and units (kWh, m³, liters, kg)
   - Item categorization for grocery bills (meat, dairy, vegetables, packaged goods)
   - Date and total amount information
4. **Automatic Calculation**: System applies emission factors:
   - Electricity: 0.85 kgCO2e per kWh
   - Water: 0.419 kgCO2e per m³
   - Natural Gas: 2.2 kgCO2e per kg
   - Petrol: 2.31 kgCO2e per liter
   - Diesel: 2.68 kgCO2e per liter
   - Paper: 0.93 kgCO2e per kg
   - Plastic: 6.0 kgCO2e per kg
   - Meat (Beef): 15.0 kgCO2e per kg
   - Dairy: 2.5 kgCO2e per kg
   - Vegetables: 0.5 kgCO2e per kg
5. **Results Display**: Detailed breakdown showing:
   - Total carbon footprint from the bill
   - Item-by-item emissions (for grocery bills)
   - Comparison with average consumption
   - Suggestions for reduction

**Technical Stack:**

- Google Gemini 2.0 Flash API for vision and text analysis
- Base64 image encoding for API transmission
- JSON parsing and data extraction algorithms
- Error handling and fallback mechanisms
- Preview functionality with file validation

**Use Cases:**

- Monthly utility bill tracking
- Fuel consumption monitoring for company vehicles
- Grocery and supply chain emissions tracking
- Automated data entry reducing manual errors

##### **C. Emissions Data Entry Form**

A structured multi-step form for manual emissions data recording.

**Form Features:**

- **Step 1: Source Details**

  - Emission source selection (Electricity, Fuel, Transportation, Waste, Manufacturing)
  - Facility location dropdown
  - Date picker for accurate timestamping
- **Step 2: Quantity Input**

  - Numeric quantity field with validation
  - Unit selection (kWh, liters, kg, m³, etc.)
  - Notes field for additional context
- **Step 3: Review & Submit**

  - Summary of entered data
  - Edit capability before submission
  - Confirmation animation on successful submission

**Progress Tracking:**

- Visual step indicators with checkmarks
- Progress bar showing completion percentage
- Back/Next navigation between steps
- Form validation at each step

**Data Storage:**

- Emissions records stored in MongoDB with timestamps
- Associated with company account and facility
- Queryable for report generation and analytics

##### **D. Advanced Charts & Analytics**

Comprehensive data visualization suite for deep insights into emissions patterns.

**Available Chart Types:**

1. **Stacked Bar Chart - Monthly Emissions by Source**

   - Shows breakdown of emissions by category (Electricity, Transport, Manufacturing, Other)
   - Stacked view for easy comparison of total vs. component emissions
   - Interactive tooltips with exact values
   - Time range selection (3 months, 6 months, YTD, 1 year, all time)
2. **Doughnut Chart - Emissions Distribution**

   - Percentage breakdown of emission sources
   - Color-coded segments matching brand theme
   - Center display showing total emissions
   - Click to highlight specific categories
3. **Line Chart - Emission Trends**

   - Time-series analysis of total emissions
   - Trend line showing increase/decrease patterns
   - Gradient fill for visual appeal
   - Comparison with previous period (dotted line)
4. **Polar Area Chart - Facility Comparison**

   - Compare emissions across different facilities/locations
   - Radial visualization for quick identification of high-emission sites
   - Proportional area representation
5. **Bar Chart - Year-over-Year Comparison**

   - Compare current year emissions with previous years
   - Grouped bars for monthly comparisons
   - Percentage change indicators

**Filtering & Customization:**

- Date range selector (3M, 6M, YTD, 1Y, All Time)
- Export functionality (PNG, PDF, CSV)
- Zoom and pan capabilities
- Responsive design for all screen sizes

**Color Scheme:**

- Dark Green (#14281D) - Primary category
- Medium Green (#588157) - Secondary category
- Light Green (#a3b18a) - Tertiary category
- Cream (#dad7cd) - Background and accents

##### **E. Blockchain Carbon Credits Wallet**

Integrated Web3 wallet for managing carbon credit tokens on Ethereum blockchain.

**Wallet Features:**

1. **Token Management**

   - Display of Ethereum wallet address
   - Real-time CCT (Carbon Credit Token) balance
   - Token value in Indian Rupees (₹)
   - Transaction history with blockchain explorer links
2. **Carbon Credit Marketplace**

   - **Available Credits Listing**:

     - Clean Energy Portfolio (₹1,850 per token) - Pan-India, TERI verified
     - Himalayan Forest Conservation (₹2,250 per token) - Uttarakhand, Gold Standard
     - Solar Village Initiative (₹1,650 per token) - Tamil Nadu, BEE verified
     - Ganges Methane Capture (₹1,350 per token) - Uttar Pradesh, CPCB verified
     - Rajasthan Wind Farm (₹1,950 per token) - Rajasthan, IREDA verified
   - **Credit Purchase Flow**:

     - Select credits from marketplace
     - Review project details and verification
     - Connect wallet (MetaMask integration)
     - Execute smart contract transaction
     - Receive ERC-20 tokens in wallet
     - Blockchain transaction confirmation
3. **Owned Credits Dashboard**

   - List of purchased carbon credits with:
     - Project name and quantity
     - Purchase date and token ID
     - Current market value
     - Blockchain transaction hash
     - Status (Active/Retired)
   - Retirement functionality for offsetting emissions
   - Transfer capabilities between wallets
4. **Transaction History**

   - Complete log of all blockchain transactions:
     - Purchase transactions with amounts
     - Retirement/burn events
     - Token minting (if applicable)
     - Transfer history
   - Blockchain explorer links (Etherscan)
   - Date, time, and gas fee information
   - Filter by transaction type
5. **Credit Statistics**

   - Total credits owned (tokens)
   - Total market value (₹)
   - Retired credits for carbon offsetting
   - Total carbon offset achieved (tCO2e)
   - Portfolio performance tracking
6. **Swap & Trade Features**

   - Swap credits between different projects
   - List credits for sale on marketplace
   - Set custom prices for listings
   - Cancel active orders
   - View order book and market depth

**Smart Contract Integration:**

- ERC-20 compliant Carbon Credit Token (CCT)
- Marketplace smart contract for decentralized trading
- MetaMask wallet connection
- Gas fee estimation and optimization
- Transaction confirmation flows

**Indian Market Focus:**

- All prices in Indian Rupees (₹)
- Focus on Indian renewable energy projects
- Verification from Indian bodies (TERI, BEE, CPCB, IREDA)
- Compliance with Indian environmental standards

##### **F. AI-Generated Reports**

Automated report generation using Google Gemini AI for comprehensive sustainability documentation.

**Report Types:**

1. **Emissions Report**

   - **Scope 1 Emissions**: Direct emissions from owned sources (vehicles, facilities)
   - **Scope 2 Emissions**: Indirect emissions from purchased electricity
   - **Scope 3 Emissions**: Other indirect emissions (supply chain, business travel)
   - Total tCO2e calculations
   - Month-over-month and year-over-year comparisons
   - Emission intensity metrics (per revenue, per employee)
   - Reduction suggestions and action items
2. **Carbon Credits Blockchain Report**

   - Complete transaction history on blockchain
   - Tokens purchased, sold, and retired
   - Current holdings and portfolio value (₹)
   - Market performance analysis
   - Verification details for each credit project
   - Smart contract addresses and transaction hashes
   - Gas fees and transaction costs
3. **Savings Report**

   - Cost savings from emission reduction initiatives (₹)
   - ROI on sustainability investments
   - Energy efficiency improvements
   - Projected future savings (1 year, 3 years, 5 years)
   - Cost avoidance from carbon pricing
   - Comparison with industry benchmarks
4. **Compliance Report**

   - Indian environmental regulation compliance:
     - Environmental Protection Act, 1986
     - Air (Prevention and Control of Pollution) Act, 1981
     - Water (Prevention and Control of Pollution) Act, 1974
   - BIS (Bureau of Indian Standards) compliance
   - Industry-specific requirements (NGRBC, BRSR)
   - ESG (Environmental, Social, Governance) metrics
   - Recommendations for regulatory adherence
   - Audit trail and documentation

**Report Generation Process:**

1. Select report type from dropdown
2. Choose date range (start and end dates)
3. Click "Generate Report" button
4. AI processes request via Gemini API
5. Report generated in markdown format with:
   - Proper heading hierarchy
   - Bullet points and numbered lists
   - Tables for structured data
   - Bold and italic formatting for emphasis
   - Realistic metrics and values in rupees
6. Display in-app with markdown rendering
7. Export options (PDF, Word, HTML)

**Previous Reports Library:**

- Archive of all generated reports
- Quick access to Q1, Q2, Q3, Q4 reports
- File size and generation date information
- Re-generate option for updated data
- Search and filter functionality

**Technical Implementation:**

- Google Gemini 1.5 Pro API integration
- React Markdown for rendering
- Custom prompt engineering for Indian context
- Error handling and retry mechanisms
- Loading states and progress indicators

##### **G. Authentication & Security**

Robust security features for company accounts.

**Features:**

- JWT-based authentication
- bcrypt password hashing
- Company registration with industry selection
- Email verification (planned)
- Session management with 30-day token expiration
- Protected routes with middleware
- Company-specific data isolation

#### 1.2 User Portal Features

##### **A. Personal Carbon Calculator**

Individual users can calculate their personal carbon footprint through the mobile app (detailed in Mobile Application section).

##### **B. User Dashboard**

- Personal emissions tracking
- Comparison with community averages
- Sustainability tips and challenges
- Achievement badges and gamification

##### **C. User Authentication**

- Separate login system for individual users
- Profile management
- Password reset functionality

---

### 2. Blockchain Integration

The blockchain component is built on Ethereum and provides a decentralized infrastructure for carbon credit tokenization and trading.

#### 2.1 Smart Contracts

##### **A. CarbonCreditToken.sol (CCT)**

An ERC-20 compliant token representing carbon credits.

**Contract Features:**

1. **Token Specifications**

   - Name: CarbonCreditToken
   - Symbol: CCT
   - Decimals: 18 (standard ERC-20)
   - Initial Supply: 1,000,000 tokens
   - Capped supply with ERC20Capped extension
   - Total Cap: Configurable at deployment
2. **Core Functions**

   - `mint(address to, uint256 amount)`: Owner can mint new tokens (up to cap)
   - `burn(uint256 amount)`: Token holders can burn their tokens (carbon offsetting)
   - `transfer(address to, uint256 amount)`: Standard ERC-20 transfer
   - `approve(address spender, uint256 amount)`: Approval for marketplace trading
   - `setMarketplace(address)`: Link to marketplace contract
3. **Ownership & Security**

   - Ownable contract with access control
   - Only owner can mint new tokens
   - Anyone can burn their own tokens
   - Reentrancy protection
   - Emergency destroy function (owner only)
4. **Initial Distribution**

   - 20% of initial supply to marketplace
   - 80% retained by deployer
   - Marketplace receives 200,000 tokens for initial distribution

**Technical Details:**

- Built with OpenZeppelin libraries for security
- Solidity version: ^0.8.9
- Deployed on Ethereum testnet (Sepolia) and local Hardhat network
- Verified contracts with deployment artifacts

##### **B. Marketplace.sol**

Decentralized marketplace for buying and selling carbon credits.

**Contract Features:**

1. **Order Management**

   - Create sell orders with custom pricing
   - Fulfill buy orders with ETH payment
   - Cancel unfilled orders
   - Order book tracking
2. **Sell Order Creation**

   ```solidity
   function createSellOrder(uint256 amount, uint256 pricePerToken)
   ```

   - Seller specifies token amount and price (in wei per token)
   - Tokens transferred to marketplace contract (escrow)
   - Order added to `sellOrders` array
   - Event emitted for off-chain tracking
3. **Order Fulfillment**

   ```solidity
   function fulfillOrder(uint256 orderId) payable
   ```

   - Buyer sends exact ETH amount
   - Tokens transferred from escrow to buyer
   - ETH transferred to seller
   - Order marked as fulfilled
   - Reentrancy protection
4. **Order Cancellation**

   ```solidity
   function cancelOrder(uint256 orderId)
   ```

   - Only seller can cancel
   - Tokens returned from escrow
   - Order removed from active listings
5. **Initial Token Distribution**

   ```solidity
   function claimInitialTokens()
   ```

   - New users can claim 1,000 CCT tokens (one-time)
   - Prevents double-claiming with mapping
   - Tokens distributed from marketplace reserve
6. **Query Functions**

   - `getSellOrders()`: Returns all active orders
   - `sellOrders[id]`: Get specific order details
   - Order struct: `{seller, amount, price}`

**Security Features:**

- ReentrancyGuard for all state-changing functions
- Ownership checks for order management
- Balance verification before transfers
- Allowance checks for token transfers
- Secure ETH transfer with `call` method

**Events for Transparency:**

- `OrderCreated(orderId, seller, amount, price)`
- `OrderFulfilled(orderId, buyer, seller, amount, price)`
- `OrderCancelled(orderId)`
- `InitialTokensDistributed(recipient, amount)`

#### 2.2 Blockchain Deployment

**Networks:**

- **Sepolia Testnet** (Chain ID: 11155111)

  - Contract addresses stored in deployment artifacts
  - Public blockchain for testing
  - Etherscan verification available
- **Local Hardhat Network** (Chain ID: 1337)

  - Development and testing environment
  - Fast transactions with no gas fees
  - Easy debugging with console.log

**Deployment Information:**

- Hardhat Ignition deployment system
- Deployment artifacts in `ignition/deployments/`
- Build information and ABIs available
- Contract verification scripts included

#### 2.3 Frontend Integration (Next.js)

**Web3 Configuration:**

- Wagmi for React hooks
- Viem for Ethereum interactions
- RainbowKit for wallet connections
- Contract ABIs exported from deployment

**Supported Wallets:**

- MetaMask
- WalletConnect
- Coinbase Wallet
- Rainbow Wallet

---

### 3. Mobile Application

A React Native mobile application for individual carbon footprint tracking.

#### 3.1 Features

##### **A. Landing Page**

Beautiful, gradient-designed welcome screen with:

- App branding and logo
- Mission statement about environmental impact
- "Get Started" CTA button
- Smooth navigation to calculator

##### **B. Carbon Calculator**

Comprehensive personal carbon footprint calculator with multiple input categories:

**Input Fields:**

1. **Transportation**

   - Distance traveled (km)
   - Emission factor: 0.21 kg CO₂ per km
   - Accounts for average vehicle usage
2. **Electricity Consumption**

   - Monthly usage (kWh)
   - Emission factor: 0.7 kg CO₂ per kWh
   - Based on Indian power grid average
3. **Diet Type Selection**

   - Heavy Meat Diet: 7 kg CO₂ per day
   - Average Diet: 5 kg CO₂ per day
   - Vegetarian: 3 kg CO₂ per day
   - Vegan: 2 kg CO₂ per day
   - Multiplied by 30 for monthly calculation
4. **Shopping Frequency**

   - Weekly: 1.5x multiplier
   - Monthly: 1.0x multiplier
   - Impacts consumption-based emissions
5. **Public Transport Usage**

   - Daily: 0.05 kg × 30 days
   - Often: 0.05 kg × 15 days
   - Rarely: 0.05 kg × 5 days
   - Adjusted by shopping multiplier

**Calculation Formula:**

```
Total Carbon = 
  (Distance × 0.21) + 
  (Electricity × 0.7) + 
  (Diet CO₂ × 30) + 
  (Transport CO₂ × Shopping Multiplier)
```

**Results Display:**

- Total carbon footprint in kg CO₂
- Visual card with highlighted results
- Breakdown available for each category
- Comparison with national/global averages

##### **C. Leaderboard**

Gamified comparison feature:

- Ranked list of users by carbon footprint (lowest first)
- Sample leaderboard data:
  1. Chris - 120 kg CO₂
  2. Harsh - 135 kg CO₂
  3. Reniyas - 145 kg CO₂
  4. Russel - 160 kg CO₂
  5. Rohan - 180 kg CO₂
- Encourages friendly competition for emission reduction
- Monthly/yearly leaderboard cycles

##### **D. Home Screen**

- Dashboard view with quick stats
- Recent calculations
- Sustainability tips
- Challenges and achievements

#### 3.2 Navigation

**Bottom Tab Navigation:**

- Home tab (icon: home/home-outline)
- Leaderboard tab (icon: stats-chart/stats-chart-outline)
- Calculator tab (icon: calculator/calculator-outline)
- Active/inactive states with color changes
- Green theme for active, gray for inactive

#### 3.3 Technical Stack

- **Framework**: React Native with Expo
- **Navigation**: React Navigation (Bottom Tabs, Stack)
- **UI Components**: React Native core components
- **Icons**: Ionicons (React Native Vector Icons)
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **State Management**: React Hooks (useState)
- **Platform**: iOS, Android, and Web (via Expo)

#### 3.4 Design System

- Green color scheme (#588157, #14281D)
- Gradient backgrounds (green-200 to green-400)
- Rounded buttons and cards
- Shadow effects for depth
- Responsive design for all screen sizes
- Accessibility-friendly contrast ratios

---

### 4. IoT Integration

Real-time air quality monitoring using Arduino hardware and Django backend.

#### 4.1 Hardware Setup

**Components:**

- Arduino board (Uno/Mega recommended)
- MQ-2 Smoke/Gas sensor
- USB cable for serial communication
- Power supply

**Sensor Specifications:**

- MQ-2 sensor for smoke, LPG, propane, methane, hydrogen detection
- Analog output (PPM - Parts Per Million)
- Reading range: 0-1000+ PPM

#### 4.2 Software Features

##### **A. Real-time Smoke Monitoring**

Continuous monitoring of air quality with live updates.

**Data Collection:**

- Serial communication via COM port (COM3-COM6 auto-detection)
- 9600 baud rate for stable connection
- 1-second timeout for responsive readings
- Auto-reconnection on connection loss

**Data Format:**

- Arduino sends: `"Smoke: XXX"` (where XXX is PPM value)
- Alternative formats supported: `"e: XXX"` or just `"XXX"`
- Parsing handles multiple formats for robustness

**Status Classification:**

- **Safe** (Green): < 230 PPM
  - Normal air quality
  - No action required
- **Warning** (Yellow): 230-499 PPM
  - Moderate smoke levels
  - Ventilation recommended
- **Danger** (Red): ≥ 500 PPM
  - High smoke concentration
  - Immediate action required
  - Alert notifications triggered

##### **B. Database Storage**

All readings stored in SQLite database via Django ORM.

**SmokeData Model:**

```python
class SmokeData(models.Model):
    timestamp = models.DateTimeField(auto_now_add=True)
    smoke_level = models.IntegerField()
    status = models.CharField(choices=[
        ('safe', 'Safe'),
        ('warning', 'Warning'),
        ('danger', 'Danger')
    ])
```

**Benefits:**

- Historical data analysis
- Trend identification
- Compliance reporting
- Data export capabilities

##### **C. Data Visualization & Analytics**

**Graphical Data View:**

- **Hourly Average Chart**:

  - Groups data by hour using Django's `TruncHour`
  - Shows smoke level trends over 24 hours
  - Color-coded lines based on status
  - Interactive chart with tooltips
- **Real-time Graph**:

  - Live updating line chart
  - Last 50-100 readings displayed
  - Auto-scrolling for continuous monitoring
  - Zoom and pan functionality

**Analytics Features:**

- Average smoke level calculation
- Peak detection and alerting
- Time-based analysis (daily, weekly, monthly)
- Export data to CSV/Excel
- Generate PDF reports

##### **D. AI-Powered Suggestions**

Google Gemini AI integration for actionable insights.

**How It Works:**

1. System collects recent smoke data (last 24 hours)
2. Calculates statistics: average, max, min, frequency of warnings
3. Sends data to Gemini API with contextual prompt
4. AI analyzes patterns and provides:
   - Root cause analysis
   - Health risk assessment
   - Specific reduction strategies
   - Equipment/process recommendations
   - Timeline for improvements

**Suggestion Categories:**

- **Immediate Actions**: Emergency steps for high smoke levels
- **Short-term Improvements**: 1-7 day action items
- **Long-term Solutions**: Infrastructure and process changes
- **Preventive Measures**: Proactive steps to avoid future issues

**Example Suggestions:**

- "Install additional ventilation in Zone B"
- "Schedule HVAC maintenance - filters may be clogged"
- "Consider upgrading to electric equipment in production area"
- "Implement smoke break policies to reduce indoor smoking"

##### **E. Web Interface (Django Templates)

**Landing Page:**

- Project overview and introduction
- Quick stats dashboard
- Navigation to all features

**Smoke Monitor Page:**

- Real-time smoke level display
- Large, color-coded PPM value
- Status indicator (Safe/Warning/Danger)
- Auto-refresh every 2 seconds
- Historical trend sparkline

**Graphical Data Page:**

- Interactive charts and graphs
- Date range selector
- Export functionality
- Comparison views

**AI Suggestions Page:**

- Latest AI-generated recommendations
- Timestamp of analysis
- Actionable items with priority levels
- History of past suggestions and implementation status

#### 4.3 Technical Implementation

**Backend (Django):**

- Python 3.x with Django framework
- SQLite database for development
- Serial communication via `pyserial` library
- RESTful API endpoints for data access
- Environment variables for configuration

**Communication Protocol:**

```python
arduino_serial = serial.Serial('COM3', 9600, timeout=1)
line = arduino_serial.readline().decode('utf-8').strip()
```

**Error Handling:**

- COM port auto-detection with fallback options
- Connection timeout handling
- Data parsing error recovery
- Database transaction management
- Graceful degradation on sensor failure

**API Endpoints:**

- `GET /api/smoke-data/` - Latest reading
- `GET /api/smoke-data/history/` - Historical data
- `GET /api/smoke-data/analytics/` - Calculated statistics
- `POST /api/smoke-data/alert/` - Trigger manual alert

---

## 🏗️ Architecture

### System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         Frontend Layer                          │
├─────────────────┬───────────────────┬──────────────────────────┤
│   Web App       │   Mobile App      │   Blockchain Frontend    │
│   (React/Vite)  │   (React Native)  │   (Next.js)             │
│   - Company     │   - Calculator    │   - Web3 Integration    │
│   - User Portal │   - Leaderboard   │   - Wallet Connect      │
└────────┬────────┴────────┬──────────┴──────────┬───────────────┘
         │                 │                     │
         ▼                 ▼                     ▼
┌─────────────────────────────────────────────────────────────────┐
│                         API Layer                               │
├──────────────────┬──────────────────┬──────────────────────────┤
│   REST API       │   GraphQL (opt)  │   Web3 Provider          │
│   (Express.js)   │                  │   (Wagmi/Viem)           │
│   - Auth         │                  │   - Smart Contract       │
│   - CRUD Ops     │                  │   - Transaction Mgmt     │
└────────┬─────────┴──────────────────┴──────────┬───────────────┘
         │                                       │
         ▼                                       ▼
┌─────────────────────────────────────┐ ┌───────────────────────┐
│       Backend Services              │ │   Blockchain Layer    │
├─────────────────────────────────────┤ ├───────────────────────┤
│   MongoDB Database                  │ │   Ethereum Network    │
│   - User/Company Collections        │ │   - Smart Contracts   │
│   - Emissions Data                  │ │   - CCT Token (ERC20) │
│                                     │ │   - Marketplace       │
│   Django Backend (IoT)              │ │   - Transaction Pool  │
│   - SQLite Database                 │ └───────────────────────┘
│   - Smoke Data                      │
│   - Serial Communication            │
└─────────────────────────────────────┘
         │                    ▲
         ▼                    │
┌─────────────────────────────────────┐
│       External Services             │
├─────────────────────────────────────┤
│   Google Gemini AI                  │
│   - Bill Analysis                   │
│   - Report Generation               │
│   - IoT Suggestions                 │
│                                     │
│   Arduino/IoT Devices               │
│   - Smoke Sensors (MQ-2)            │
│   - Serial Communication            │
└─────────────────────────────────────┘
```

### Data Flow

**1. Company Emissions Tracking:**

```
Bill Upload → Gemini AI Analysis → Data Extraction → 
MongoDB Storage → Dashboard Visualization → Carbon Credits Purchase
```

**2. Blockchain Carbon Credit Flow:**

```
User → MetaMask Wallet → Marketplace Smart Contract → 
CCT Token Transfer → Blockchain Confirmation → Wallet Update
```

**3. IoT Monitoring Flow:**

```
Arduino Sensor → Serial Data → Django Backend → 
Database Storage → Web Dashboard → AI Analysis → 
Recommendations Display
```

---

## 🛠️ Technology Stack

### Frontend Technologies

**Web Application (Company/User Portal):**

- **Framework**: React 18.2.0
- **Build Tool**: Vite
- **Routing**: React Router DOM v6
- **State Management**: React Context API
- **HTTP Client**: Axios / Fetch API
- **Charts**: Chart.js with react-chartjs-2
- **Styling**: Tailwind CSS
- **Icons**: Heroicons, React Icons
- **Markdown**: React Markdown (for AI reports)

**Mobile Application:**

- **Framework**: React Native 0.74.5
- **Development Platform**: Expo ~51.0.28
- **Navigation**: React Navigation (Bottom Tabs, Stack)
- **Styling**: NativeWind (Tailwind for RN)
- **Icons**: React Native Vector Icons (Ionicons)
- **Components**: React Native Picker Select
- **Type Safety**: TypeScript ~5.3.3

**Blockchain Frontend:**

- **Framework**: Next.js 14+ (App Router)
- **Web3 Library**: Wagmi + Viem
- **Wallet Connection**: RainbowKit
- **Styling**: Tailwind CSS
- **Contract Interaction**: ethers.js / viem

### Backend Technologies

**Web Backend (Node.js):**

- **Runtime**: Node.js
- **Framework**: Express.js 5.1.0
- **Database**: MongoDB with Mongoose 8.13.1
- **Authentication**: JWT (jsonwebtoken 9.0.2)
- **Password Hashing**: bcryptjs 3.0.2
- **CORS**: cors 2.8.5
- **Environment**: dotenv 16.4.7

**IoT Backend (Python):**

- **Framework**: Django 4.x
- **Database**: SQLite3 (development), PostgreSQL (production-ready)
- **Serial Communication**: pyserial
- **HTTP Client**: requests library
- **Time Handling**: datetime, timezone utilities

### Blockchain Technologies

**Smart Contracts:**

- **Language**: Solidity ^0.8.9
- **Framework**: Hardhat
- **Testing**: Hardhat Test (Mocha/Chai)
- **Libraries**:
  - OpenZeppelin Contracts (ERC20, Ownable, ReentrancyGuard)
  - OpenZeppelin ERC20 Extensions (Capped, Burnable)
- **Deployment**: Hardhat Ignition

**Networks:**

- Ethereum Mainnet (production - planned)
- Sepolia Testnet (testing)
- Hardhat Local Network (development)

### AI & External Services

**Google Gemini AI:**

- **Models**:
  - Gemini 2.0 Flash (vision + text for bill analysis)
  - Gemini 1.5 Pro (text generation for reports)
- **Use Cases**:
  - Image analysis for bill extraction
  - Report generation
  - IoT data insights
  - Recommendation systems

### DevOps & Tools

**Development Tools:**

- **Version Control**: Git + GitHub
- **Package Managers**:
  - npm (Node.js projects)
  - pnpm (blockchain frontend)
  - pip (Python projects)
- **Code Editor**: VS Code (recommended)
- **API Testing**: Postman / Thunder Client

**Build Tools:**

- Vite (web frontend)
- Expo CLI (mobile)
- Hardhat (smart contracts)
- Django manage.py (IoT backend)

---

## 📦 Installation & Setup

### Prerequisites

Before starting, ensure you have the following installed:

- **Node.js** (v18+ recommended) - [Download](https://nodejs.org/)
- **Python** (v3.8+) - [Download](https://www.python.org/)
- **MongoDB** (v6+) - [Download](https://www.mongodb.com/)
- **Git** - [Download](https://git-scm.com/)
- **Arduino IDE** (for IoT setup) - [Download](https://www.arduino.cc/)
- **MetaMask** browser extension - [Install](https://metamask.io/)

### 1. Clone the Repository

```bash
git clone https://github.com/Chris-Lopes/carbon-counter.git
cd carbon-counter
```

### 2. Web Application Setup

#### Backend Setup

```bash
# Navigate to backend directory
cd Website/backend

# Install dependencies
npm install

# Create .env file
# Add the following variables:
PORT=5000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key_here

# Start the server
npm start
```

#### Frontend Setup

```bash
# Navigate to frontend directory (in new terminal)
cd Website/frontend

# Install dependencies
npm install

# Create .env file
# Add the following:
VITE_GEMINI_KEY=your_google_gemini_api_key
VITE_API_URL=http://localhost:5000

# Start the development server
npm run dev
```

Access at: `http://localhost:5173`

### 3. Mobile Application Setup

```bash
# Navigate to app directory
cd app

# Install dependencies
npm install

# Install Expo CLI globally (if not installed)
npm install -g expo-cli

# Start Expo development server
npx expo start

# Options:
# - Press 'a' for Android emulator
# - Press 'i' for iOS simulator (Mac only)
# - Scan QR code with Expo Go app on your phone
```

### 4. Blockchain Setup

```bash
# Navigate to blockchain directory
cd blockchain

# Install dependencies
npm install

# Compile smart contracts
npx hardhat compile

# Run tests
npx hardhat test

# Start local Hardhat node (in separate terminal)
npx hardhat node

# Deploy contracts to local network
npx hardhat ignition deploy ./ignition/modules/CarbonCreditToken.ts --network localhost

# For testnet deployment (Sepolia):
# Add to .env:
SEPOLIA_RPC_URL=your_alchemy_or_infura_rpc_url
PRIVATE_KEY=your_wallet_private_key

npx hardhat ignition deploy ./ignition/modules/CarbonCreditToken.ts --network sepolia
```

#### Blockchain Frontend Setup

```bash
# Navigate to blockchain frontend
cd blockchain/frontend

# Install dependencies with pnpm
pnpm install

# Create .env.local file
# Add:
NEXT_PUBLIC_CHAIN_ID=11155111  # or 1337 for local
NEXT_PUBLIC_TOKEN_ADDRESS=deployed_token_address
NEXT_PUBLIC_MARKETPLACE_ADDRESS=deployed_marketplace_address

# Start Next.js development server
pnpm dev
```

Access at: `http://localhost:3000`

### 5. IoT Setup

#### Hardware Setup

1. Connect MQ-2 sensor to Arduino:

   - VCC → 5V
   - GND → GND
   - A0 → A0 (analog pin)
2. Upload Arduino code (create `smoke_sensor.ino`):

```cpp
int smokePin = A0;

void setup() {
  Serial.begin(9600);
  pinMode(smokePin, INPUT);
}

void loop() {
  int smokeLevel = analogRead(smokePin);
  Serial.print("Smoke: ");
  Serial.println(smokeLevel);
  delay(1000);
}
```

3. Note the COM port (e.g., COM3 on Windows, /dev/ttyUSB0 on Linux)

#### Software Setup

```bash
# Navigate to IoT directory
cd Iot

# Create virtual environment (recommended)
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install django pyserial requests

# Create .env file (optional)
# Add:
ARDUINO_COM_PORT=COM3
GEMINI_API_KEY=your_google_gemini_api_key

# Run migrations
python manage.py migrate

# Create superuser (for admin access)
python manage.py createsuperuser

# Start Django server
python manage.py runserver
```

Access at: `http://localhost:8000`

### 6. Environment Variables Reference

**Website Backend (.env):**

```env
PORT=5000
MONGO_URL=mongodb://localhost:27017/carbon-counter
# Or MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/dbname
JWT_SECRET=your-very-secret-jwt-key-change-this
NODE_ENV=development
```

**Website Frontend (.env):**

```env
VITE_GEMINI_KEY=your-google-gemini-api-key
VITE_API_URL=http://localhost:5000
```

**Blockchain (.env):**

```env
SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/your-api-key
PRIVATE_KEY=your-wallet-private-key-without-0x
ETHERSCAN_API_KEY=your-etherscan-api-key-for-verification
```

**IoT Backend (.env or settings):**

```env
ARDUINO_COM_PORT=COM3
GEMINI_API_KEY=your-google-gemini-api-key
DEBUG=True
SECRET_KEY=your-django-secret-key
```

---

## 📖 Usage Guide

### For Companies

#### 1. Registration & Login

1. Navigate to `/company/register`
2. Fill in company details:
   - Company Name
   - Email Address
   - Industry Type
   - Password
3. Receive registration token
4. Login at `/company/login`

#### 2. Dashboard Overview

- View total emissions (tCO2e)
- Check carbon credit balance
- See monthly trends
- Access blockchain wallet

#### 3. Recording Emissions

**Method A: AI Bill Scanner**

1. Go to "Carbon Calculator" tab
2. Click "Upload Bill" or "Take Photo"
3. Select utility bill / fuel receipt / grocery receipt
4. AI automatically extracts data
5. Review and confirm calculations
6. Data saved to emissions database

**Method B: Manual Entry**

1. Go to "Emissions Form" tab
2. Step 1: Select emission source and facility
3. Step 2: Enter quantity and unit
4. Step 3: Review and submit

#### 4. Purchasing Carbon Credits

1. Navigate to "Credits" tab
2. Browse available carbon credit projects
3. Select desired credits and quantity
4. Click "Connect Wallet" (MetaMask)
5. Approve transaction
6. Confirm on blockchain
7. Credits appear in "Owned Credits" section

#### 5. Generating Reports

1. Go to "Reports" tab
2. Select report type (Emissions, Credits, Savings, Compliance)
3. Choose date range
4. Click "Generate Report"
5. AI generates detailed markdown report
6. Export as PDF or view in-app

### For Individual Users

#### 1. Mobile App Usage

1. Download Expo Go app
2. Scan QR code from `npx expo start`
3. App opens to landing page
4. Navigate to "Calculator" tab

#### 2. Calculate Carbon Footprint

1. Enter distance traveled (km)
2. Enter electricity usage (kWh)
3. Select diet type (dropdown)
4. Select shopping frequency
5. Select public transport usage
6. Click "Calculate"
7. View total carbon footprint

#### 3. View Leaderboard

1. Navigate to "Leaderboard" tab
2. See ranking based on carbon footprint
3. Compare with other users
4. Aim to reduce emissions for better ranking

### For IoT Monitoring

#### 1. Live Monitoring

1. Open `http://localhost:8000`
2. Click "Smoke Monitor"
3. View real-time PPM reading
4. Color indicates status (Green/Yellow/Red)

#### 2. View Analytics

1. Click "Graphical Data"
2. See hourly averages chart
3. Analyze trends and patterns
4. Export data if needed

#### 3. Get AI Recommendations

1. Click "AI Suggestions"
2. System analyzes recent data
3. View personalized recommendations
4. Implement suggested actions

---

## 🔌 API Documentation

### Authentication Endpoints

**POST** `/api/auth/company/register`

- Register new company
- Body: `{ companyName, email, password, industry, registrationToken }`
- Returns: `{ token, company }`

**POST** `/api/auth/company/login`

- Company login
- Body: `{ email, password }`
- Returns: `{ token, company }`

**POST** `/api/auth/user/register`

- Register individual user
- Body: `{ name, email, password }`
- Returns: `{ token, user }`

**POST** `/api/auth/user/login`

- User login
- Body: `{ email, password }`
- Returns: `{ token, user }`

### Emissions Endpoints (Protected)

**GET** `/api/emissions`

- Get all emissions for logged-in company
- Headers: `Authorization: Bearer {token}`
- Returns: Array of emission records

**POST** `/api/emissions`

- Create new emission record
- Headers: `Authorization: Bearer {token}`
- Body: `{ source, facility, date, quantity, unit, notes }`
- Returns: Created emission record

### Carbon Credits Endpoints

**GET** `/api/credits/available`

- List available carbon credits for purchase
- Returns: Array of credit projects

**GET** `/api/credits/owned`

- Get credits owned by company (from blockchain)
- Headers: `Authorization: Bearer {token}`
- Returns: Array of owned credits

---

## 🔐 Smart Contracts

### CarbonCreditToken (CCT)

**Contract Address (Sepolia):** [View in deployment artifacts]

**Functions:**

```solidity
// Minting (Owner only)
function mint(address to, uint256 amount) external onlyOwner

// Burning (Carbon Offsetting)
function burn(uint256 amount) public

// Transfer
function transfer(address to, uint256 amount) public returns (bool)

// Approve marketplace
function approve(address spender, uint256 amount) public returns (bool)

// Set marketplace address
function setMarketplace(address _marketplaceAddress) external onlyOwner
```

### Marketplace

**Contract Address (Sepolia):** [View in deployment artifacts]

**Functions:**

```solidity
// Create sell order
function createSellOrder(uint256 amount, uint256 pricePerToken) external nonReentrant

// Buy carbon credits
function fulfillOrder(uint256 orderId) external payable nonReentrant

// Cancel sell order
function cancelOrder(uint256 orderId) external nonReentrant

// Claim initial tokens (1000 CCT)
function claimInitialTokens() external nonReentrant

// View all sell orders
function getSellOrders() external view returns (Order[] memory)
```

---


## 🗺️ Roadmap

### Phase 1 (Current)

- ✅ Core web application with company dashboard
- ✅ Blockchain carbon credit tokenization
- ✅ Mobile app for personal tracking
- ✅ IoT smoke monitoring system

### Phase 2 (Upcoming)

- 🔄 Enhanced AI recommendations
- 🔄 Multi-language support
- 🔄 Real-time notifications
- 🔄 Advanced analytics and forecasting

### Phase 3 (Future)

- 📋 Integration with more IoT sensors (temperature, humidity, CO2)
- 📋 Corporate sustainability certifications
- 📋 API for third-party integrations
- 📋 Mobile app marketplace for carbon credits
- 📋 Machine learning for emission predictions

---

**Made with 💚 for a sustainable future**
