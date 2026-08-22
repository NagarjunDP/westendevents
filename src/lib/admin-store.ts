import fs from "fs";
import path from "path";

const PRIMARY_DATA_PATH = path.join(process.cwd(), "src", "data", "admin-store.json");
const TMP_DATA_PATH = path.join("/tmp", "westend-admin-store.json");

export interface PopupOfferConfig {
  enabled: boolean;
  title: string;
  badge: string;
  subtitle: string;
  description: string;
  perks?: string[];
  phone?: string;
  email?: string;
  buttonText: string;
  buttonLink: string;
  effectStyle: "gold-flakes" | "snow-flakes" | "sparkles" | "petals";
  showDelaySeconds: number;
  fontFamily?: string;
}

export interface AnalyticsData {
  totalViews: number;
  refreshCount: number;
  uniqueVisitors: number;
  visitorIds: string[];
  viewsToday: number;
  viewsThisWeek: number;
  viewsThisMonth: number;
  pageViews: Record<string, number>;
  deviceDistribution: {
    mobile: number;
    desktop: number;
    tablet: number;
  };
  history: Array<{ date: string; views: number }>;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  type: string;
  message: string;
  timestamp: string;
  status: "new" | "contacted" | "booked" | "archived";
  notes?: string;
}

export interface SeoMonthlyReport {
  id: string;
  month: string;
  status: string;
  summary: string;
  achievements: string[];
  organicTrafficGrowth: string;
  agencyNotes: string;
}

export interface SeoKeyword {
  id: string;
  keyword: string;
  targetUrl: string;
  currentRank: number;
  previousRank: number;
  change: string;
  searchVolume: string;
  intent: string;
}

export interface SeoChecklistItem {
  id: string;
  category: string;
  task: string;
  status: "completed" | "in_progress" | "scheduled";
  updatedAt: string;
}

export interface SeoData {
  healthScore: number;
  speedScore: number;
  technicalHealth: number;
  mobileScore: number;
  backlinksCount: number;
  monthlyReports: SeoMonthlyReport[];
  keywords: SeoKeyword[];
  checklist: SeoChecklistItem[];
}

export interface AdminStoreSchema {
  analytics: AnalyticsData;
  contacts: ContactSubmission[];
  seo: SeoData;
  popup: PopupOfferConfig;
}

const DEFAULT_POPUP: PopupOfferConfig = {
  enabled: true,
  title: "Grand Wedding Season Offer",
  badge: "EXCLUSIVE FESTIVE OFFER",
  subtitle: "Lonavla, Pune & Goa Luxury Packages",
  description: "Book your luxury event & receive complimentary 100% In-House VRX Sound & Stage Pyros setup!",
  perks: [
    "100% In-House Decor, Stage & Floral Production",
    "Complimentary JBL VRX Sound & Stage Pyros Setup",
    "Dedicated Senior Event Director for NRI Weddings"
  ],
  phone: "+91 99235 90038",
  email: "westendagarwal@gmail.com",
  buttonText: "Plan Your Event",
  buttonLink: "#contact",
  effectStyle: "gold-flakes",
  showDelaySeconds: 1.5,
  fontFamily: "Cormorant Garamond"
};

const DEFAULT_STORE: AdminStoreSchema = {
  analytics: {
    totalViews: 0,
    refreshCount: 0,
    uniqueVisitors: 0,
    visitorIds: [],
    viewsToday: 0,
    viewsThisWeek: 0,
    viewsThisMonth: 0,
    pageViews: {},
    deviceDistribution: { mobile: 0, desktop: 0, tablet: 0 },
    history: []
  },
  contacts: [],
  seo: {
    healthScore: 96,
    speedScore: 98,
    technicalHealth: 100,
    mobileScore: 96,
    backlinksCount: 340,
    monthlyReports: [],
    keywords: [],
    checklist: []
  },
  popup: DEFAULT_POPUP
};

// Global in-memory cache to maintain immediate updates across requests
declare global {
  // eslint-disable-next-line no-var
  var __WESTEND_ADMIN_STORE__: AdminStoreSchema | undefined;
}

export function getAdminStore(): AdminStoreSchema {
  if (globalThis.__WESTEND_ADMIN_STORE__) {
    return globalThis.__WESTEND_ADMIN_STORE__;
  }

  // Try reading primary data path
  try {
    if (fs.existsSync(PRIMARY_DATA_PATH)) {
      const raw = fs.readFileSync(PRIMARY_DATA_PATH, "utf-8");
      const store = JSON.parse(raw) as AdminStoreSchema;
      if (!store.analytics.visitorIds) store.analytics.visitorIds = [];
      if (store.analytics.refreshCount === undefined) store.analytics.refreshCount = 0;
      if (!store.popup) store.popup = DEFAULT_POPUP;
      globalThis.__WESTEND_ADMIN_STORE__ = store;
      return store;
    }
  } catch (err) {
    console.warn("Could not read primary admin store path, checking tmp:", err);
  }

  // Fallback try reading tmp path
  try {
    if (fs.existsSync(TMP_DATA_PATH)) {
      const raw = fs.readFileSync(TMP_DATA_PATH, "utf-8");
      const store = JSON.parse(raw) as AdminStoreSchema;
      if (!store.popup) store.popup = DEFAULT_POPUP;
      globalThis.__WESTEND_ADMIN_STORE__ = store;
      return store;
    }
  } catch (err) {
    console.warn("Could not read tmp admin store path:", err);
  }

  // Fallback write initial default store
  globalThis.__WESTEND_ADMIN_STORE__ = DEFAULT_STORE;
  saveAdminStore(DEFAULT_STORE);
  return DEFAULT_STORE;
}

export function saveAdminStore(store: AdminStoreSchema): boolean {
  globalThis.__WESTEND_ADMIN_STORE__ = store;
  let saved = false;

  // Try primary path
  try {
    const dir = path.dirname(PRIMARY_DATA_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(PRIMARY_DATA_PATH, JSON.stringify(store, null, 2), "utf-8");
    saved = true;
  } catch (err) {
    console.warn("Primary disk write failed (read-only filesystem?), attempting /tmp fallback:", err);
  }

  // Also sync to /tmp path for serverless safety
  try {
    fs.writeFileSync(TMP_DATA_PATH, JSON.stringify(store, null, 2), "utf-8");
    saved = true;
  } catch (err) {
    console.warn("/tmp disk write failed:", err);
  }

  return saved;
}

export function recordPageView(
  pagePath: string,
  deviceType: "mobile" | "desktop" | "tablet" = "desktop",
  visitorId?: string,
  isRefresh: boolean = false
) {
  const store = getAdminStore();
  const todayStr = new Date().toISOString().split("T")[0];

  store.analytics.totalViews += 1;
  if (isRefresh) {
    store.analytics.refreshCount += 1;
  }

  store.analytics.viewsToday += 1;
  store.analytics.viewsThisWeek += 1;
  store.analytics.viewsThisMonth += 1;

  // Track unique visitor IDs
  if (visitorId) {
    if (!store.analytics.visitorIds) store.analytics.visitorIds = [];
    if (!store.analytics.visitorIds.includes(visitorId)) {
      store.analytics.visitorIds.push(visitorId);
      store.analytics.uniqueVisitors = store.analytics.visitorIds.length;
    }
  } else {
    store.analytics.uniqueVisitors = Math.max(1, Math.ceil(store.analytics.totalViews * 0.6));
  }

  // Increment path view count
  const normalizedPath = pagePath || "/";
  store.analytics.pageViews[normalizedPath] = (store.analytics.pageViews[normalizedPath] || 0) + 1;

  // Device distribution
  if (deviceType === "mobile") store.analytics.deviceDistribution.mobile += 1;
  else if (deviceType === "tablet") store.analytics.deviceDistribution.tablet += 1;
  else store.analytics.deviceDistribution.desktop += 1;

  // History tracking for date
  const existingHistIndex = store.analytics.history.findIndex(h => h.date === todayStr);
  if (existingHistIndex >= 0) {
    store.analytics.history[existingHistIndex].views += 1;
  } else {
    store.analytics.history.push({ date: todayStr, views: 1 });
  }

  // Keep last 14 days history
  if (store.analytics.history.length > 14) {
    store.analytics.history = store.analytics.history.slice(-14);
  }

  saveAdminStore(store);
}

export function updatePopupConfig(newConfig: Partial<PopupOfferConfig>): PopupOfferConfig {
  const store = getAdminStore();
  store.popup = {
    ...DEFAULT_POPUP,
    ...(store.popup || {}),
    ...newConfig
  };
  saveAdminStore(store);
  return store.popup;
}

export function addContactSubmission(payload: Omit<ContactSubmission, "id" | "timestamp" | "status">): ContactSubmission {
  const store = getAdminStore();
  const newSubmission: ContactSubmission = {
    ...payload,
    id: `cnt_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    timestamp: new Date().toISOString(),
    status: "new",
    notes: ""
  };
  store.contacts.unshift(newSubmission);
  saveAdminStore(store);
  return newSubmission;
}

export function updateContactStatus(id: string, status: ContactSubmission["status"], notes?: string) {
  const store = getAdminStore();
  const index = store.contacts.findIndex(c => c.id === id);
  if (index !== -1) {
    store.contacts[index].status = status;
    if (notes !== undefined) {
      store.contacts[index].notes = notes;
    }
    saveAdminStore(store);
    return store.contacts[index];
  }
  return null;
}

export function updateSeoChecklistStatus(id: string, status: SeoChecklistItem["status"]) {
  const store = getAdminStore();
  const index = store.seo.checklist.findIndex(c => c.id === id);
  if (index !== -1) {
    store.seo.checklist[index].status = status;
    store.seo.checklist[index].updatedAt = new Date().toISOString().split("T")[0];
    saveAdminStore(store);
    return store.seo.checklist[index];
  }
  return null;
}

export function addSeoMonthlyReport(report: Omit<SeoMonthlyReport, "id">) {
  const store = getAdminStore();
  const newReport: SeoMonthlyReport = {
    ...report,
    id: `seo_rep_${Date.now()}`
  };
  store.seo.monthlyReports.unshift(newReport);
  saveAdminStore(store);
  return newReport;
}

export function addSeoKeyword(kw: Omit<SeoKeyword, "id">) {
  const store = getAdminStore();
  const newKw: SeoKeyword = {
    ...kw,
    id: `kw_${Date.now()}`
  };
  store.seo.keywords.push(newKw);
  saveAdminStore(store);
  return newKw;
}

