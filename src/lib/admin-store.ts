import fs from "fs";
import path from "path";

const DATA_FILE_PATH = path.join(process.cwd(), "src", "data", "admin-store.json");

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
}

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
    healthScore: 94,
    speedScore: 96,
    technicalHealth: 98,
    mobileScore: 95,
    backlinksCount: 340,
    monthlyReports: [],
    keywords: [],
    checklist: []
  }
};

export function getAdminStore(): AdminStoreSchema {
  try {
    if (!fs.existsSync(DATA_FILE_PATH)) {
      const dir = path.dirname(DATA_FILE_PATH);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(DEFAULT_STORE, null, 2), "utf-8");
      return DEFAULT_STORE;
    }
    const raw = fs.readFileSync(DATA_FILE_PATH, "utf-8");
    const store = JSON.parse(raw) as AdminStoreSchema;
    if (!store.analytics.visitorIds) store.analytics.visitorIds = [];
    if (store.analytics.refreshCount === undefined) store.analytics.refreshCount = 0;
    return store;
  } catch (error) {
    console.error("Error reading admin store:", error);
    return DEFAULT_STORE;
  }
}

export function saveAdminStore(store: AdminStoreSchema): boolean {
  try {
    const dir = path.dirname(DATA_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(store, null, 2), "utf-8");
    return true;
  } catch (error) {
    console.error("Error writing admin store:", error);
    return false;
  }
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
