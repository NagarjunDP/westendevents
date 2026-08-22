"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Download,
  Eye,
  FileSpreadsheet,
  FileText,
  Filter,
  Gift,
  Globe,
  Key,
  Layers,
  LayoutDashboard,
  Lock,
  LogOut,
  Mail,
  Menu,
  MessageCircle,
  MessageSquare,
  Phone,
  Plus,
  RefreshCw,
  RotateCw,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
  User,
  Users,
  X
} from "lucide-react";
import { useEffect, useState } from "react";

interface PopupOfferConfig {
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

interface ContactSubmission {
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

interface AnalyticsData {
  totalViews: number;
  refreshCount: number;
  uniqueVisitors: number;
  visitorIds: string[];
  viewsToday: number;
  viewsThisWeek: number;
  viewsThisMonth: number;
  pageViews: Record<string, number>;
  deviceDistribution: { mobile: number; desktop: number; tablet: number };
  history: Array<{ date: string; views: number }>;
}

interface SeoMonthlyReport {
  id: string;
  month: string;
  status: string;
  summary: string;
  achievements: string[];
  organicTrafficGrowth: string;
  agencyNotes: string;
}

interface SeoKeyword {
  id: string;
  keyword: string;
  targetUrl: string;
  currentRank: number;
  previousRank: number;
  change: string;
  searchVolume: string;
  intent: string;
}

interface SeoChecklistItem {
  id: string;
  category: string;
  task: string;
  status: "completed" | "in_progress" | "scheduled";
  updatedAt: string;
}

interface SeoData {
  healthScore: number;
  speedScore: number;
  technicalHealth: number;
  mobileScore: number;
  backlinksCount: number;
  monthlyReports: SeoMonthlyReport[];
  keywords: SeoKeyword[];
  checklist: SeoChecklistItem[];
}

interface MetaAuditItem {
  route: string;
  title: string;
  description: string;
  schema: string;
  h1: string;
  status: string;
}

export default function AdminPortalPage() {
  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  // Tab & UI state
  const [activeTab, setActiveTab] = useState<"overview" | "analytics" | "contacts" | "seo" | "popup">("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Dashboard Data State
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [seo, setSeo] = useState<SeoData | null>(null);
  const [metaAudit, setMetaAudit] = useState<MetaAuditItem[]>([]);

  // Offer Popup State
  const [popupConfig, setPopupConfig] = useState<PopupOfferConfig>({
    enabled: true,
    title: "Grand Wedding Season Offer",
    badge: "EXCLUSIVE FESTIVE OFFER",
    subtitle: "Lonavla, Pune & Goa Luxury Packages",
    description: "Book your luxury event & receive complimentary 100% In-House VRX Sound & Stage Pyros setup!",
    phone: "+91 99235 90037",
    email: "info@westendevent.com",
    buttonText: "Plan Your Event",
    buttonLink: "#contact",
    effectStyle: "gold-flakes",
    showDelaySeconds: 1.5
  });
  const [popupSaving, setPopupSaving] = useState(false);
  const [popupSaveMessage, setPopupSaveMessage] = useState("");


  // Contact modal state
  const [selectedContact, setSelectedContact] = useState<ContactSubmission | null>(null);
  const [contactFilter, setContactFilter] = useState<string>("all");
  const [contactSearch, setContactSearch] = useState("");
  const [editingNote, setEditingNote] = useState("");

  // SEO modal state
  const [showAddReportModal, setShowAddReportModal] = useState(false);
  const [newReportMonth, setNewReportMonth] = useState("");
  const [newReportSummary, setNewReportSummary] = useState("");
  const [newReportAchievements, setNewReportAchievements] = useState("");
  const [newReportTraffic, setNewReportTraffic] = useState("+15% MoM");
  const [newReportNotes, setNewReportNotes] = useState("");

  const [showAddKeywordModal, setShowAddKeywordModal] = useState(false);
  const [newKwKeyword, setNewKwKeyword] = useState("");
  const [newKwTargetUrl, setNewKwTargetUrl] = useState("/destinations");
  const [newKwRank, setNewKwRank] = useState("1");
  const [newKwPrevRank, setNewKwPrevRank] = useState("3");
  const [newKwVolume, setNewKwVolume] = useState("3,500 / mo");

  useEffect(() => {
    checkAuthSession();
  }, []);

  // Real-time live polling every 4 seconds when authenticated
  useEffect(() => {
    if (!isAuthenticated) return;
    const pollInterval = setInterval(() => {
      loadDashboardData(true);
    }, 4000);
    return () => clearInterval(pollInterval);
  }, [isAuthenticated]);

  const checkAuthSession = async () => {
    try {
      const res = await fetch("/api/admin/auth");
      if (res.ok) {
        setIsAuthenticated(true);
        loadDashboardData();
      } else {
        setIsAuthenticated(false);
        setIsLoading(false);
      }
    } catch {
      setIsAuthenticated(false);
      setIsLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setLoginLoading(true);

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "login",
          username: loginUsername,
          password: loginPassword
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setIsAuthenticated(true);
        loadDashboardData();
      } else {
        setLoginError(data.message || "Invalid credentials");
      }
    } catch {
      setLoginError("Connection failed. Please try again.");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "logout" })
    });
    setIsAuthenticated(false);
  };

  const loadDashboardData = async (silent: boolean = false) => {
    if (!silent) setIsLoading(true);
    try {
      const [contactsRes, seoRes, popupRes] = await Promise.all([
        fetch("/api/admin/contacts"),
        fetch("/api/admin/seo"),
        fetch("/api/popup", { cache: "no-store" })
      ]);

      if (contactsRes.ok) {
        const cData = await contactsRes.json();
        setContacts(cData.contacts || []);
      }

      if (seoRes.ok) {
        const sData = await seoRes.json();
        setAnalytics(sData.analytics || null);
        setSeo(sData.seo || null);
        setMetaAudit(sData.metaAudit || []);
      }

      // Only update popup form state on initial load or non-silent refresh
      if (!silent && popupRes.ok) {
        const pData = await popupRes.json();
        if (pData.popup) {
          setPopupConfig(pData.popup);
        }
      }
    } catch (error) {
      if (!silent) console.error("Error loading dashboard data:", error);
    } finally {
      if (!silent) setIsLoading(false);
    }
  };

  const handleSavePopupConfig = async (e: React.FormEvent) => {
    e.preventDefault();
    setPopupSaving(true);
    setPopupSaveMessage("");

    try {
      const res = await fetch("/api/popup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(popupConfig)
      });
      const data = await res.json();
      if (res.ok && data.success && data.popup) {
        setPopupConfig(data.popup);
        if (data.popup.fontFamily) {
          window.dispatchEvent(new CustomEvent("themeFontChange", { detail: data.popup.fontFamily }));
        }
        setPopupSaveMessage("Offer Pop-Up & Site Typography published successfully to all devices!");
        setTimeout(() => setPopupSaveMessage(""), 4000);
      } else {
        setPopupSaveMessage(data.message || "Failed to update pop-up settings.");
      }
    } catch {
      setPopupSaveMessage("Error updating settings.");
    } finally {
      setPopupSaving(false);
    }
  };


  const handleUpdateContactStatus = async (id: string, status: ContactSubmission["status"], notes?: string) => {
    try {
      const res = await fetch("/api/admin/contacts", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status, notes })
      });

      if (res.ok) {
        const data = await res.json();
        setContacts(prev => prev.map(c => (c.id === id ? data.contact : c)));
        if (selectedContact && selectedContact.id === id) {
          setSelectedContact(data.contact);
        }
      }
    } catch (err) {
      console.error("Failed to update status", err);
    }
  };

  const handleToggleChecklist = async (id: string, currentStatus: SeoChecklistItem["status"]) => {
    const nextStatus: SeoChecklistItem["status"] =
      currentStatus === "completed" ? "in_progress" : currentStatus === "in_progress" ? "scheduled" : "completed";

    try {
      const res = await fetch("/api/admin/seo", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "update_checklist", id, status: nextStatus })
      });

      if (res.ok) {
        const data = await res.json();
        if (seo) {
          setSeo({
            ...seo,
            checklist: seo.checklist.map(item => (item.id === id ? data.item : item))
          });
        }
      }
    } catch (err) {
      console.error("Checklist update failed", err);
    }
  };

  const handleAddSeoReport = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReportMonth || !newReportSummary) return;

    try {
      const achList = newReportAchievements.split("\n").filter(a => a.trim().length > 0);
      const res = await fetch("/api/admin/seo", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "add_report",
          month: newReportMonth,
          summary: newReportSummary,
          achievements: achList,
          organicTrafficGrowth: newReportTraffic,
          agencyNotes: newReportNotes
        })
      });

      if (res.ok) {
        const data = await res.json();
        if (seo) {
          setSeo({
            ...seo,
            monthlyReports: [data.report, ...seo.monthlyReports]
          });
        }
        setShowAddReportModal(false);
        setNewReportMonth("");
        setNewReportSummary("");
        setNewReportAchievements("");
        setNewReportNotes("");
      }
    } catch (err) {
      console.error("Failed to add report", err);
    }
  };

  const handleAddKeyword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newKwKeyword) return;

    const curr = parseInt(newKwRank, 10) || 1;
    const prev = parseInt(newKwPrevRank, 10) || 1;
    const diff = prev - curr;
    const changeStr = diff > 0 ? `+${diff}` : diff < 0 ? `${diff}` : "0";

    try {
      const res = await fetch("/api/admin/seo", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "add_keyword",
          keyword: newKwKeyword,
          targetUrl: newKwTargetUrl,
          currentRank: curr,
          previousRank: prev,
          change: changeStr,
          searchVolume: newKwVolume,
          intent: "Commercial"
        })
      });

      if (res.ok) {
        const data = await res.json();
        if (seo) {
          setSeo({
            ...seo,
            keywords: [...seo.keywords, data.keyword]
          });
        }
        setShowAddKeywordModal(false);
        setNewKwKeyword("");
      }
    } catch (err) {
      console.error("Failed to add keyword", err);
    }
  };

  const downloadCSV = () => {
    window.location.href = "/api/admin/contacts?format=csv";
  };

  const filteredContacts = contacts.filter(c => {
    const matchesFilter =
      contactFilter === "all"
        ? true
        : contactFilter === "unread"
        ? c.status === "new"
        : c.type === contactFilter || c.status === contactFilter;
    const matchesSearch =
      c.name.toLowerCase().includes(contactSearch.toLowerCase()) ||
      c.email.toLowerCase().includes(contactSearch.toLowerCase()) ||
      c.phone.toLowerCase().includes(contactSearch.toLowerCase()) ||
      c.message.toLowerCase().includes(contactSearch.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const unreadCount = contacts.filter(c => c.status === "new").length;

  // 1. Initial Checking Loader
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-[#0B0B0C] text-[#ECECEE] flex items-center justify-center font-sans">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-[#D4AF37] border-t-transparent rounded-full animate-spin" />
          <p className="text-xs text-[#8E8E93] font-mono">Loading portal...</p>
        </div>
      </div>
    );
  }

  // 2. Subtle & Clean Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0B0B0C] text-[#ECECEE] flex items-center justify-center p-4 font-sans">
        <div className="w-full max-w-sm bg-[#121214] border border-[#222226] p-6 sm:p-8 rounded-xl shadow-xl">
          <div className="text-center mb-6">
            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mx-auto mb-3">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <h1 className="text-xl font-serif font-bold text-[#ECECEE]">Westend Admin Portal</h1>
            <p className="text-xs text-[#8E8E93] mt-1 font-sans">Client & SEO Management Access</p>
          </div>

          {loginError && (
            <div className="mb-4 p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs flex items-center gap-2">
              <X className="w-4 h-4 text-rose-400 shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4 text-xs">
            <div>
              <label className="block text-[#8E8E93] font-mono mb-1">Username</label>
              <input
                type="text"
                required
                value={loginUsername}
                onChange={e => setLoginUsername(e.target.value)}
                placeholder="westend_admin"
                className="w-full bg-[#0B0B0C] border border-[#222226] focus:border-[#D4AF37] text-[#ECECEE] p-3 rounded-lg outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-[#8E8E93] font-mono mb-1">Password</label>
              <input
                type="password"
                required
                value={loginPassword}
                onChange={e => setLoginPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-[#0B0B0C] border border-[#222226] focus:border-[#D4AF37] text-[#ECECEE] p-3 rounded-lg outline-none transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full py-3 bg-[#D4AF37] text-[#0B0B0C] font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-[#E5BE48] transition-colors disabled:opacity-50"
            >
              {loginLoading ? "Authenticating..." : "Sign In"}
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-[#1F1F24] text-center">
            <p className="text-[11px] text-[#636366] font-mono">Westend Events &copy; 2026 Admin Portal</p>
          </div>
        </div>
      </div>
    );
  }

  // 3. Main Subtle & Professional Admin Portal View
  return (
    <div className="min-h-screen bg-[#0B0B0C] text-[#ECECEE] font-sans">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-[#121214]/95 backdrop-blur-sm border-b border-[#1F1F24] px-4 md:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center font-serif font-bold text-[#D4AF37] text-sm">
              W
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-base font-bold text-[#ECECEE]">Westend Events</span>
                <span className="text-[10px] bg-[#1F1F24] border border-[#2E2E35] text-[#8E8E93] font-mono px-2 py-0.5 rounded uppercase">
                  Client Admin
                </span>
              </div>
              <p className="text-[11px] text-[#8E8E93] font-mono hidden sm:block">
                Traffic Analytics &bull; Enquiries &bull; Monthly SEO Portal
              </p>
            </div>
          </div>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0B0B0C] border border-[#1F1F24] p-1 rounded-lg">
            <button
              onClick={() => setActiveTab("overview")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-mono transition-colors ${
                activeTab === "overview"
                  ? "bg-[#D4AF37] text-[#0B0B0C] font-bold"
                  : "text-[#8E8E93] hover:text-[#ECECEE]"
              }`}
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>Overview</span>
            </button>

            <button
              onClick={() => setActiveTab("analytics")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-mono transition-colors ${
                activeTab === "analytics"
                  ? "bg-[#D4AF37] text-[#0B0B0C] font-bold"
                  : "text-[#8E8E93] hover:text-[#ECECEE]"
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Website Views</span>
              <span className="text-[10px] bg-[#1F1F24] px-1.5 py-0.2 rounded font-sans text-[#ECECEE]">
                {analytics?.totalViews || 0}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("contacts")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-mono transition-colors ${
                activeTab === "contacts"
                  ? "bg-[#D4AF37] text-[#0B0B0C] font-bold"
                  : "text-[#8E8E93] hover:text-[#ECECEE]"
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Contact Enquiries</span>
              {unreadCount > 0 && (
                <span className="text-[10px] bg-rose-500 text-white font-bold px-1.5 py-0.2 rounded">
                  {unreadCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab("seo")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-mono transition-colors ${
                activeTab === "seo"
                  ? "bg-[#D4AF37] text-[#0B0B0C] font-bold"
                  : "text-[#8E8E93] hover:text-[#ECECEE]"
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Monthly SEO</span>
            </button>

            <button
              onClick={() => setActiveTab("popup")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-mono transition-colors ${
                activeTab === "popup"
                  ? "bg-[#D4AF37] text-[#0B0B0C] font-bold"
                  : "text-[#8E8E93] hover:text-[#ECECEE]"
              }`}
            >
              <Gift className="w-3.5 h-3.5" />
              <span>Offer Pop-Up</span>
            </button>
          </nav>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => loadDashboardData(false)}
              title="Refresh Data"
              className="p-2 rounded-lg bg-[#121214] border border-[#1F1F24] text-[#8E8E93] hover:text-[#ECECEE] hover:border-[#2E2E35] transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? "animate-spin" : ""}`} />
            </button>

            <button
              onClick={handleLogout}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#121214] border border-[#1F1F24] text-[#8E8E93] text-xs font-mono hover:text-rose-400 hover:border-rose-500/30 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-[#121214] border border-[#1F1F24] text-[#8E8E93]"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-[#1F1F24] space-y-2">
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <button
                onClick={() => {
                  setActiveTab("overview");
                  setMobileMenuOpen(false);
                }}
                className={`p-2.5 rounded-lg text-center ${
                  activeTab === "overview" ? "bg-[#D4AF37] text-[#0B0B0C] font-bold" : "bg-[#121214] border border-[#1F1F24]"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => {
                  setActiveTab("analytics");
                  setMobileMenuOpen(false);
                }}
                className={`p-2.5 rounded-lg text-center ${
                  activeTab === "analytics" ? "bg-[#D4AF37] text-[#0B0B0C] font-bold" : "bg-[#121214] border border-[#1F1F24]"
                }`}
              >
                Website Views ({analytics?.totalViews || 0})
              </button>
              <button
                onClick={() => {
                  setActiveTab("contacts");
                  setMobileMenuOpen(false);
                }}
                className={`p-2.5 rounded-lg text-center ${
                  activeTab === "contacts" ? "bg-[#D4AF37] text-[#0B0B0C] font-bold" : "bg-[#121214] border border-[#1F1F24]"
                }`}
              >
                Enquiries ({unreadCount > 0 ? `${unreadCount} New` : contacts.length})
              </button>
              <button
                onClick={() => {
                  setActiveTab("seo");
                  setMobileMenuOpen(false);
                }}
                className={`p-2.5 rounded-lg text-center ${
                  activeTab === "seo" ? "bg-[#D4AF37] text-[#0B0B0C] font-bold" : "bg-[#121214] border border-[#1F1F24]"
                }`}
              >
                Monthly SEO
              </button>
              <button
                onClick={() => {
                  setActiveTab("popup");
                  setMobileMenuOpen(false);
                }}
                className={`p-2.5 rounded-lg text-center col-span-2 ${
                  activeTab === "popup" ? "bg-[#D4AF37] text-[#0B0B0C] font-bold" : "bg-[#121214] border border-[#1F1F24]"
                }`}
              >
                Festive Offer Pop-Up
              </button>
            </div>

            <div className="pt-2 flex justify-between items-center text-[11px] font-mono text-[#8E8E93]">
              <span>Admin Session Active</span>
              <button onClick={handleLogout} className="text-rose-400 underline">Logout</button>
            </div>
          </div>
        )}
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-6">
        {/* ================= TAB 1: OVERVIEW ================= */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1F1F24] pb-4">
              <div>
                <h2 className="text-xl font-serif font-bold text-[#ECECEE]">Admin Executive Dashboard</h2>
                <p className="text-xs text-[#8E8E93] font-mono">Client Lead Enquiries & Website Traffic Overview</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-mono text-[#8E8E93]">Live Real-Time Data</span>
              </div>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-xl bg-[#121214] border border-[#1F1F24]">
                <div className="flex items-center justify-between text-xs font-mono text-[#8E8E93] mb-2">
                  <span>Total Page Views</span>
                  <Eye className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div className="text-2xl font-bold font-serif text-[#ECECEE]">
                  {analytics?.totalViews.toLocaleString() || 0}
                </div>
                <p className="text-[11px] text-[#8E8E93] font-mono mt-1">
                  Page Refreshes: {analytics?.refreshCount || 0}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#121214] border border-[#1F1F24]">
                <div className="flex items-center justify-between text-xs font-mono text-[#8E8E93] mb-2">
                  <span>Unique Visitors</span>
                  <Users className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-2xl font-bold font-serif text-[#ECECEE]">
                  {analytics?.uniqueVisitors || 0}
                </div>
                <p className="text-[11px] text-[#8E8E93] font-mono mt-1">
                  Distinct User Devices
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#121214] border border-[#1F1F24]">
                <div className="flex items-center justify-between text-xs font-mono text-[#8E8E93] mb-2">
                  <span>Contact Submissions</span>
                  <FileText className="w-4 h-4 text-rose-400" />
                </div>
                <div className="text-2xl font-bold font-serif text-[#ECECEE] flex items-center justify-between">
                  <span>{contacts.length}</span>
                  {unreadCount > 0 && (
                    <span className="text-xs bg-rose-500/20 border border-rose-500/40 text-rose-300 font-mono px-2 py-0.5 rounded">
                      {unreadCount} New
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-[#8E8E93] font-mono mt-1">
                  Action Required: {unreadCount}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#121214] border border-[#1F1F24]">
                <div className="flex items-center justify-between text-xs font-mono text-[#8E8E93] mb-2">
                  <span>SEO Health Score</span>
                  <Globe className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-2xl font-bold font-serif text-emerald-400">
                  {seo?.healthScore || 94}%
                </div>
                <p className="text-[11px] text-[#8E8E93] font-mono mt-1">
                  Mobile UX: {seo?.mobileScore || 95}% &bull; Speed: {seo?.speedScore || 96}%
                </p>
              </div>
            </div>

            {/* Quick Preview Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Enquiries */}
              <div className="p-5 rounded-xl bg-[#121214] border border-[#1F1F24]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif font-bold text-sm text-[#ECECEE]">Recent Form Enquiries</h3>
                  <button
                    onClick={() => setActiveTab("contacts")}
                    className="text-xs text-[#D4AF37] font-mono hover:underline flex items-center gap-1"
                  >
                    View All ({contacts.length}) &rarr;
                  </button>
                </div>

                <div className="space-y-3">
                  {contacts.slice(0, 3).map(contact => (
                    <div
                      key={contact.id}
                      onClick={() => {
                        setSelectedContact(contact);
                        setActiveTab("contacts");
                      }}
                      className="p-3.5 rounded-lg bg-[#0B0B0C] border border-[#1F1F24] hover:border-[#2E2E35] cursor-pointer transition-colors flex items-center justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-xs text-[#ECECEE]">{contact.name}</span>
                          <span
                            className={`text-[10px] font-mono px-2 py-0.2 rounded capitalize ${
                              contact.status === "new"
                                ? "bg-rose-500/20 text-rose-300"
                                : contact.status === "booked"
                                ? "bg-emerald-500/20 text-emerald-300"
                                : "bg-amber-500/20 text-amber-300"
                            }`}
                          >
                            {contact.status}
                          </span>
                        </div>
                        <p className="text-xs text-[#8E8E93] line-clamp-1 mt-0.5">{contact.message}</p>
                      </div>
                      <span className="text-[11px] text-[#8E8E93] font-mono shrink-0 ml-2">
                        {contact.date || "Date TBD"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Monthly SEO Report Brief */}
              <div className="p-5 rounded-xl bg-[#121214] border border-[#1F1F24]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif font-bold text-sm text-[#ECECEE]">Monthly SEO Status</h3>
                  <button
                    onClick={() => setActiveTab("seo")}
                    className="text-xs text-[#D4AF37] font-mono hover:underline flex items-center gap-1"
                  >
                    SEO Section &rarr;
                  </button>
                </div>

                {seo?.monthlyReports[0] && (
                  <div className="p-3.5 rounded-lg bg-[#0B0B0C] border border-[#1F1F24] mb-4">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-mono text-[#D4AF37] font-bold">
                        {seo.monthlyReports[0].month}
                      </span>
                      <span className="text-xs text-emerald-400 font-mono">
                        {seo.monthlyReports[0].organicTrafficGrowth} Growth
                      </span>
                    </div>
                    <p className="text-xs text-[#8E8E93]">{seo.monthlyReports[0].summary}</p>
                  </div>
                )}

                <div className="space-y-2">
                  <span className="text-[11px] font-mono text-[#8E8E93] uppercase block">
                    Action Checklist Items
                  </span>
                  {seo?.checklist.slice(0, 3).map(chk => (
                    <div
                      key={chk.id}
                      onClick={() => handleToggleChecklist(chk.id, chk.status)}
                      className="p-3 rounded-lg bg-[#0B0B0C] border border-[#1F1F24] hover:border-[#2E2E35] cursor-pointer flex items-center justify-between text-xs font-sans"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2
                          className={`w-3.5 h-3.5 ${
                            chk.status === "completed" ? "text-emerald-400" : "text-[#8E8E93]/40"
                          }`}
                        />
                        <span className={chk.status === "completed" ? "line-through text-[#8E8E93]" : "text-[#ECECEE]"}>
                          {chk.task}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-[#8E8E93] capitalize">
                        {chk.status.replace("_", " ")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 2: WEBSITE VIEWS & ANALYTICS ================= */}
        {activeTab === "analytics" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1F1F24] pb-4">
              <div>
                <h2 className="text-xl font-serif font-bold text-[#ECECEE]">Real Website Views & Traffic</h2>
                <p className="text-xs text-[#8E8E93] font-mono">
                  Counts every page load, user refresh, and unique visitor session
                </p>
              </div>
              <div className="text-xs font-mono text-[#D4AF37] bg-[#121214] border border-[#1F1F24] px-3 py-1.5 rounded-lg">
                Total Views: {analytics?.totalViews || 0}
              </div>
            </div>

            {/* Metrics Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-[#121214] border border-[#1F1F24]">
                <span className="text-xs font-mono text-[#8E8E93] uppercase block mb-1">Total Page Views</span>
                <span className="text-2xl font-serif font-bold text-[#ECECEE]">{analytics?.totalViews || 0}</span>
                <p className="text-[11px] text-[#8E8E93] font-mono mt-1">Raw page loads & refreshes</p>
              </div>

              <div className="p-4 rounded-xl bg-[#121214] border border-[#1F1F24]">
                <span className="text-xs font-mono text-[#8E8E93] uppercase block mb-1">Page Refreshes</span>
                <span className="text-2xl font-serif font-bold text-[#D4AF37]">{analytics?.refreshCount || 0}</span>
                <p className="text-[11px] text-[#8E8E93] font-mono mt-1">User browser reloads</p>
              </div>

              <div className="p-4 rounded-xl bg-[#121214] border border-[#1F1F24]">
                <span className="text-xs font-mono text-[#8E8E93] uppercase block mb-1">Unique Visitors</span>
                <span className="text-2xl font-serif font-bold text-emerald-400">{analytics?.uniqueVisitors || 0}</span>
                <p className="text-[11px] text-[#8E8E93] font-mono mt-1">Unique device sessions</p>
              </div>

              <div className="p-4 rounded-xl bg-[#121214] border border-[#1F1F24]">
                <span className="text-xs font-mono text-[#8E8E93] uppercase block mb-1">Views Today</span>
                <span className="text-2xl font-serif font-bold text-[#ECECEE]">{analytics?.viewsToday || 0}</span>
                <p className="text-[11px] text-[#8E8E93] font-mono mt-1">Live pings today</p>
              </div>
            </div>

            {/* Top Visited Pages Breakdown */}
            <div className="p-5 rounded-xl bg-[#121214] border border-[#1F1F24]">
              <h3 className="font-serif text-base font-bold text-[#ECECEE] mb-4">Top Visited Pages (Real Data)</h3>
              <div className="space-y-3">
                {Object.entries(analytics?.pageViews || {})
                  .sort(([, a], [, b]) => b - a)
                  .map(([path, count], i) => {
                    const total = analytics?.totalViews || 1;
                    const pct = Math.round((count / total) * 100);
                    return (
                      <div key={path} className="p-3.5 rounded-lg bg-[#0B0B0C] border border-[#1F1F24] space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-mono text-[#ECECEE] font-bold">
                            {i + 1}. {path}
                          </span>
                          <span className="font-mono text-[#D4AF37]">
                            {count} views ({pct}%)
                          </span>
                        </div>
                        <div className="w-full h-1.5 bg-[#121214] rounded-full overflow-hidden border border-[#1F1F24]">
                          <div style={{ width: `${pct}%` }} className="h-full bg-[#D4AF37] rounded-full" />
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 3: CONTACT FORM ENQUIRIES ================= */}
        {activeTab === "contacts" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1F1F24] pb-4">
              <div>
                <h2 className="text-xl font-serif font-bold text-[#ECECEE]">Contact Form Enquiries</h2>
                <p className="text-xs text-[#8E8E93] font-mono">
                  Submitted enquiries from website contact form ({contacts.length} total)
                </p>
              </div>

              <button
                onClick={downloadCSV}
                className="px-4 py-2 rounded-lg bg-[#D4AF37] text-[#0B0B0C] font-bold text-xs font-mono uppercase tracking-wider hover:bg-[#E5BE48] transition-colors flex items-center gap-2 self-start sm:self-auto"
              >
                <Download className="w-4 h-4" />
                <span>Export CSV</span>
              </button>
            </div>

            {/* Filter & Search */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 p-3 rounded-xl bg-[#121214] border border-[#1F1F24]">
              <div className="relative w-full md:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8E8E93]" />
                <input
                  type="text"
                  value={contactSearch}
                  onChange={e => setContactSearch(e.target.value)}
                  placeholder="Search leads..."
                  className="w-full bg-[#0B0B0C] border border-[#1F1F24] focus:border-[#D4AF37] text-xs text-[#ECECEE] pl-9 pr-3 py-2 rounded-lg outline-none"
                />
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 text-xs font-mono">
                {["all", "unread", "wedding", "corporate", "concert", "booked"].map(f => (
                  <button
                    key={f}
                    onClick={() => setContactFilter(f)}
                    className={`px-3 py-1 rounded-md capitalize transition-colors shrink-0 ${
                      contactFilter === f
                        ? "bg-[#D4AF37] text-[#0B0B0C] font-bold"
                        : "bg-[#0B0B0C] border border-[#1F1F24] text-[#8E8E93] hover:text-[#ECECEE]"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Submissions List */}
            <div className="space-y-4">
              {filteredContacts.length === 0 ? (
                <div className="p-8 text-center rounded-xl bg-[#121214] border border-[#1F1F24]">
                  <MessageSquare className="w-6 h-6 text-[#8E8E93]/40 mx-auto mb-2" />
                  <p className="text-xs font-mono text-[#8E8E93]">No enquiries found matching filter.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-3">
                  {filteredContacts.map(contact => (
                    <div
                      key={contact.id}
                      className="p-4 sm:p-5 rounded-xl bg-[#121214] border border-[#1F1F24] space-y-3"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1F1F24] pb-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-serif font-bold text-sm text-[#ECECEE]">{contact.name}</h3>
                            <span
                              className={`text-[10px] font-mono px-2 py-0.5 rounded capitalize ${
                                contact.status === "new"
                                  ? "bg-rose-500/20 text-rose-300"
                                  : contact.status === "booked"
                                  ? "bg-emerald-500/20 text-emerald-300"
                                  : "bg-amber-500/20 text-amber-300"
                              }`}
                            >
                              {contact.status}
                            </span>
                          </div>
                          <p className="text-[11px] text-[#8E8E93] font-mono mt-0.5">
                            Received {new Date(contact.timestamp).toLocaleDateString()} &bull; Event Date: {contact.date || "TBD"}
                          </p>
                        </div>

                        <select
                          value={contact.status}
                          onChange={e =>
                            handleUpdateContactStatus(
                              contact.id,
                              e.target.value as ContactSubmission["status"],
                              contact.notes
                            )
                          }
                          className="bg-[#0B0B0C] border border-[#1F1F24] text-xs font-mono text-[#D4AF37] px-2 py-1 rounded outline-none"
                        >
                          <option value="new">Mark New</option>
                          <option value="contacted">Mark Contacted</option>
                          <option value="booked">Mark Booked</option>
                          <option value="archived">Archive</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono text-[#8E8E93]">
                        <div>Phone: <a href={`tel:${contact.phone}`} className="text-[#D4AF37] underline">{contact.phone}</a></div>
                        <div className="truncate">Email: <a href={`mailto:${contact.email}`} className="text-[#D4AF37] underline">{contact.email}</a></div>
                        <div>Type: <span className="uppercase text-[#ECECEE]">{contact.type}</span></div>
                      </div>

                      <p className="p-3 rounded-lg bg-[#0B0B0C] border border-[#1F1F24] text-xs text-[#ECECEE] font-sans">
                        &quot;{contact.message}&quot;
                      </p>

                      {contact.notes && (
                        <p className="text-xs text-amber-300/90 font-mono">
                          <strong>Admin Note:</strong> {contact.notes}
                        </p>
                      )}

                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        <a
                          href={`tel:${contact.phone}`}
                          className="px-2.5 py-1 rounded bg-[#0B0B0C] border border-[#1F1F24] text-xs font-mono text-[#D4AF37] hover:bg-[#1F1F24] flex items-center gap-1"
                        >
                          <Phone className="w-3 h-3" /> Call
                        </a>
                        <a
                          href={`mailto:${contact.email}`}
                          className="px-2.5 py-1 rounded bg-[#0B0B0C] border border-[#1F1F24] text-xs font-mono text-[#D4AF37] hover:bg-[#1F1F24] flex items-center gap-1"
                        >
                          <Mail className="w-3 h-3" /> Email
                        </a>
                        <a
                          href={`https://wa.me/${contact.phone.replace(/[^0-9]/g, "")}`}
                          target="_blank"
                          rel="noreferrer"
                          className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 flex items-center gap-1"
                        >
                          <MessageSquare className="w-3 h-3" /> WhatsApp
                        </a>

                        <button
                          onClick={() => setSelectedContact(contact)}
                          className="ml-auto text-xs font-mono text-[#D4AF37] hover:underline"
                        >
                          Edit Notes &rarr;
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================= TAB 4: DEDICATED MONTHLY SEO PORTAL ================= */}
        {activeTab === "seo" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1F1F24] pb-4">
              <div>
                <h2 className="text-xl font-serif font-bold text-[#ECECEE]">Monthly SEO Management</h2>
                <p className="text-xs text-[#8E8E93] font-mono">
                  Monthly SEO task checklist, keyword rankings tracker & page metadata audit
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowAddReportModal(true)}
                  className="px-3 py-1.5 rounded-lg bg-[#D4AF37] text-[#0B0B0C] font-bold text-xs font-mono uppercase tracking-wider hover:bg-[#E5BE48] flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" /> + Report
                </button>

                <button
                  onClick={() => setShowAddKeywordModal(true)}
                  className="px-3 py-1.5 rounded-lg bg-[#121214] border border-[#1F1F24] text-[#D4AF37] font-bold text-xs font-mono uppercase tracking-wider hover:border-[#2E2E35] flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" /> + Keyword
                </button>
              </div>
            </div>

            {/* SEO Health Summary */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 font-mono text-xs text-center">
              <div className="p-3.5 rounded-xl bg-[#121214] border border-[#1F1F24]">
                <span className="text-[#8E8E93] block text-[10px] uppercase">SEO Score</span>
                <span className="text-xl font-serif font-bold text-emerald-400">{seo?.healthScore || 94}%</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#121214] border border-[#1F1F24]">
                <span className="text-[#8E8E93] block text-[10px] uppercase">Page Speed</span>
                <span className="text-xl font-serif font-bold text-[#D4AF37]">{seo?.speedScore || 96}%</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#121214] border border-[#1F1F24]">
                <span className="text-[#8E8E93] block text-[10px] uppercase">Technical SEO</span>
                <span className="text-xl font-serif font-bold text-emerald-400">{seo?.technicalHealth || 98}%</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#121214] border border-[#1F1F24]">
                <span className="text-[#8E8E93] block text-[10px] uppercase">Mobile UX</span>
                <span className="text-xl font-serif font-bold text-[#D4AF37]">{seo?.mobileScore || 95}%</span>
              </div>
              <div className="col-span-2 sm:col-span-1 p-3.5 rounded-xl bg-[#121214] border border-[#1F1F24]">
                <span className="text-[#8E8E93] block text-[10px] uppercase">Backlinks</span>
                <span className="text-xl font-serif font-bold text-[#ECECEE]">{seo?.backlinksCount || 340}</span>
              </div>
            </div>

            {/* Target Keyword Ranks */}
            <div className="p-5 rounded-xl bg-[#121214] border border-[#1F1F24]">
              <h3 className="font-serif font-bold text-sm text-[#ECECEE] mb-3">Google Search Ranking Tracker</h3>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-[#1F1F24] text-[#8E8E93] uppercase">
                      <th className="py-2.5 px-3">Keyword</th>
                      <th className="py-2.5 px-3">Target Page</th>
                      <th className="py-2.5 px-3">Current Rank</th>
                      <th className="py-2.5 px-3">Change</th>
                      <th className="py-2.5 px-3">Monthly Volume</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1F1F24]">
                    {seo?.keywords.map(kw => (
                      <tr key={kw.id}>
                        <td className="py-2.5 px-3 font-bold text-[#ECECEE]">{kw.keyword}</td>
                        <td className="py-2.5 px-3 text-[#D4AF37]">{kw.targetUrl}</td>
                        <td className="py-2.5 px-3 font-bold text-emerald-400">#{kw.currentRank}</td>
                        <td className="py-2.5 px-3 text-[#8E8E93]">{kw.change}</td>
                        <td className="py-2.5 px-3 text-[#8E8E93]">{kw.searchVolume}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Real Route Meta Audit */}
            <div className="p-5 rounded-xl bg-[#121214] border border-[#1F1F24]">
              <h3 className="font-serif font-bold text-sm text-[#ECECEE] mb-1">Website Pages Metadata Audit</h3>
              <p className="text-xs text-[#8E8E93] font-mono mb-4">Real Meta Title, H1 & Schema markup inspection</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                {metaAudit.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg bg-[#0B0B0C] border border-[#1F1F24] space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[#D4AF37] font-bold">{item.route}</span>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.2 rounded">
                        {item.status}
                      </span>
                    </div>
                    <p className="text-[#ECECEE] font-sans font-medium line-clamp-1">{item.title}</p>
                    <p className="text-[11px] text-[#8E8E93] line-clamp-1">&quot;{item.description}&quot;</p>
                    <p className="text-[10px] text-[#8E8E93]">Schema: {item.schema}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Monthly Reports & Action Checklist */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-3">
                <h3 className="font-serif font-bold text-sm text-[#ECECEE]">Monthly Reports History</h3>
                {seo?.monthlyReports.map(rep => (
                  <div key={rep.id} className="p-4 rounded-xl bg-[#121214] border border-[#1F1F24] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-[#D4AF37] font-bold">{rep.month}</span>
                      <span className="text-xs font-mono text-emerald-400">{rep.organicTrafficGrowth}</span>
                    </div>
                    <p className="text-xs text-[#ECECEE]">{rep.summary}</p>
                    <ul className="space-y-1 text-xs text-[#8E8E93]">
                      {rep.achievements.map((ach, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-[#121214] border border-[#1F1F24] h-fit space-y-3">
                <h3 className="font-serif font-bold text-sm text-[#ECECEE]">Monthly SEO Action Checklist</h3>
                <div className="space-y-2">
                  {seo?.checklist.map(chk => (
                    <div
                      key={chk.id}
                      onClick={() => handleToggleChecklist(chk.id, chk.status)}
                      className="p-3 rounded-lg bg-[#0B0B0C] border border-[#1F1F24] hover:border-[#2E2E35] cursor-pointer flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2
                          className={`w-3.5 h-3.5 shrink-0 ${
                            chk.status === "completed" ? "text-emerald-400" : "text-[#8E8E93]/40"
                          }`}
                        />
                        <span className={chk.status === "completed" ? "line-through text-[#8E8E93]" : "text-[#ECECEE]"}>
                          {chk.task}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-[#8E8E93] capitalize">
                        {chk.status.replace("_", " ")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 5: OFFER POP-UP MANAGER ================= */}
        {activeTab === "popup" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1F1F24] pb-4">
              <div>
                <h2 className="text-xl font-serif font-bold text-[#ECECEE]">Festive & Exclusive Offer Pop-Up Manager</h2>
                <p className="text-xs text-[#8E8E93] font-mono">
                  Control the announcement popup modal, promo codes & animated flakes shown to website visitors
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${popupConfig.enabled ? "bg-emerald-400 animate-pulse" : "bg-rose-500"}`} />
                <span className="text-xs font-mono text-[#8E8E93]">
                  {popupConfig.enabled ? "Pop-Up Active on Website" : "Pop-Up Paused"}
                </span>
              </div>
            </div>

            {popupSaveMessage && (
              <div className={`p-3.5 rounded-xl border text-xs font-mono flex items-center gap-2 ${
                popupSaveMessage.includes("successfully")
                  ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                  : "bg-rose-500/10 border-rose-500/30 text-rose-300"
              }`}>
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{popupSaveMessage}</span>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Form Settings */}
              <div className="lg:col-span-7 space-y-5 bg-[#121214] border border-[#1F1F24] p-5 sm:p-6 rounded-xl">
                <form onSubmit={handleSavePopupConfig} className="space-y-4 text-xs font-mono">
                  {/* Enable / Disable Switch */}
                  <div className="p-4 rounded-xl bg-[#0B0B0C] border border-[#1F1F24] flex items-center justify-between">
                    <div>
                      <span className="text-sm font-serif font-bold text-[#ECECEE] block">Pop-Up Status</span>
                      <span className="text-[11px] text-[#8E8E93]">Show pop-up to new visitors when they open the site</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setPopupConfig({ ...popupConfig, enabled: !popupConfig.enabled })}
                      className={`px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors ${
                        popupConfig.enabled
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                          : "bg-rose-500/20 text-rose-300 border border-rose-500/40"
                      }`}
                    >
                      {popupConfig.enabled ? "ENABLED" : "DISABLED"}
                    </button>
                  </div>

                  {/* Flake / Particle Effect Picker */}
                  <div>
                    <label className="block text-[#8E8E93] mb-1.5 font-bold uppercase text-[11px]">
                      Occasion Flake Effect (Animated Canvas)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: "gold-flakes", label: "🪙 Gold Flakes", desc: "Grand Festive & Wedding" },
                        { id: "snow-flakes", label: "❄️ Snow Flakes", desc: "Winter & New Year" },
                        { id: "sparkles", label: "✨ Starlight Sparkles", desc: "Luxury & VIP" },
                        { id: "petals", label: "🌸 Flower Petals", desc: "Spring & Floral Wedding" }
                      ].map(effect => (
                        <button
                          key={effect.id}
                          type="button"
                          onClick={() =>
                            setPopupConfig({
                              ...popupConfig,
                              effectStyle: effect.id as PopupOfferConfig["effectStyle"]
                            })
                          }
                          className={`p-3 rounded-lg border text-left transition-all ${
                            popupConfig.effectStyle === effect.id
                              ? "bg-[#D4AF37]/15 border-[#D4AF37] text-[#ECECEE]"
                              : "bg-[#0B0B0C] border-[#1F1F24] text-[#8E8E93] hover:border-[#2E2E35]"
                          }`}
                        >
                          <span className="font-bold text-xs block">{effect.label}</span>
                          <span className="text-[10px] text-[#8E8E93] block mt-0.5">{effect.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Title & Badge */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[#8E8E93] mb-1">Pop-Up Title</label>
                      <input
                        type="text"
                        required
                        value={popupConfig.title}
                        onChange={e => setPopupConfig({ ...popupConfig, title: e.target.value })}
                        placeholder="Grand Wedding Season Offer"
                        className="w-full bg-[#0B0B0C] border border-[#1F1F24] focus:border-[#D4AF37] text-[#ECECEE] p-3 rounded-lg outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[#8E8E93] mb-1">Top Badge Tag</label>
                      <input
                        type="text"
                        required
                        value={popupConfig.badge}
                        onChange={e => setPopupConfig({ ...popupConfig, badge: e.target.value })}
                        placeholder="EXCLUSIVE ONLINE PERK"
                        className="w-full bg-[#0B0B0C] border border-[#1F1F24] focus:border-[#D4AF37] text-[#ECECEE] p-3 rounded-lg outline-none uppercase"
                      />
                    </div>
                  </div>

                  {/* Subtitle / Occasion Tag */}
                  <div>
                    <label className="block text-[#8E8E93] mb-1">Subtitle / Occasion Tag</label>
                    <input
                      type="text"
                      value={popupConfig.subtitle}
                      onChange={e => setPopupConfig({ ...popupConfig, subtitle: e.target.value })}
                      placeholder="Lonavla, Pune & Goa Luxury Packages"
                      className="w-full bg-[#0B0B0C] border border-[#1F1F24] focus:border-[#D4AF37] text-[#ECECEE] p-3 rounded-lg outline-none"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-[#8E8E93] mb-1">Offer Details / Description</label>
                    <textarea
                      required
                      value={popupConfig.description}
                      onChange={e => setPopupConfig({ ...popupConfig, description: e.target.value })}
                      rows={3}
                      placeholder="Book your luxury event & get complimentary setup..."
                      className="w-full bg-[#0B0B0C] border border-[#1F1F24] focus:border-[#D4AF37] text-[#ECECEE] p-3 rounded-lg outline-none resize-none"
                    />
                  </div>

                  {/* Direct Contact Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[#8E8E93] mb-1">WhatsApp / Contact Phone</label>
                      <input
                        type="text"
                        value={popupConfig.phone || "+91 99235 90038"}
                        onChange={e => setPopupConfig({ ...popupConfig, phone: e.target.value })}
                        placeholder="+91 99235 90038"
                        className="w-full bg-[#0B0B0C] border border-[#1F1F24] focus:border-[#D4AF37] text-[#ECECEE] p-3 rounded-lg outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[#8E8E93] mb-1">Official Email</label>
                      <input
                        type="text"
                        value={popupConfig.email || "info@westendevent.com"}
                        onChange={e => setPopupConfig({ ...popupConfig, email: e.target.value })}
                        placeholder="info@westendevent.com"
                        className="w-full bg-[#0B0B0C] border border-[#1F1F24] focus:border-[#D4AF37] text-[#ECECEE] p-3 rounded-lg outline-none"
                      />
                    </div>
                  </div>

                  {/* Button Text & Target Link */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[#8E8E93] mb-1">Main Action Button Text</label>
                      <input
                        type="text"
                        required
                        value={popupConfig.buttonText}
                        onChange={e => setPopupConfig({ ...popupConfig, buttonText: e.target.value })}
                        placeholder="Plan Your Event"
                        className="w-full bg-[#0B0B0C] border border-[#1F1F24] focus:border-[#D4AF37] text-[#ECECEE] p-3 rounded-lg outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[#8E8E93] mb-1">Button Target Link</label>
                      <input
                        type="text"
                        required
                        value={popupConfig.buttonLink}
                        onChange={e => setPopupConfig({ ...popupConfig, buttonLink: e.target.value })}
                        placeholder="#contact or /collection"
                        className="w-full bg-[#0B0B0C] border border-[#1F1F24] focus:border-[#D4AF37] text-[#ECECEE] p-3 rounded-lg outline-none"
                      />
                    </div>
                  </div>

                  {/* Popup Delay & Font Style Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[#8E8E93] mb-1">Popup & Site Title Font Style</label>
                      <select
                        value={popupConfig.fontFamily || "Cormorant Garamond"}
                        onChange={e => {
                          const val = e.target.value;
                          setPopupConfig({ ...popupConfig, fontFamily: val });
                          window.dispatchEvent(new CustomEvent("themeFontChange", { detail: val }));
                        }}
                        className="w-full bg-[#0B0B0C] border border-[#1F1F24] focus:border-[#D4AF37] text-[#ECECEE] p-3 rounded-lg outline-none cursor-pointer font-serif"
                      >
                        <option value="Cormorant Garamond">Cormorant Garamond (Ultra Luxury Fashion Serif)</option>
                        <option value="Playfair Display">Playfair Display (Royal Classic Serif)</option>
                        <option value="Cinzel">Cinzel (Regal Roman Architectural Serif)</option>
                        <option value="Bodoni Moda">Bodoni Moda (Vogue Fashion Luxury)</option>
                        <option value="Great Vibes">Great Vibes (Romantic Cursive Calligraphy)</option>
                        <option value="Montserrat">Montserrat (Clean Architectural Serif/Sans)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[#8E8E93] mb-1">Popup Delay (Seconds)</label>
                      <input
                        type="number"
                        step="0.5"
                        min="0.5"
                        max="10"
                        required
                        value={popupConfig.showDelaySeconds}
                        onChange={e => setPopupConfig({ ...popupConfig, showDelaySeconds: parseFloat(e.target.value) || 1 })}
                        className="w-full bg-[#0B0B0C] border border-[#1F1F24] focus:border-[#D4AF37] text-[#ECECEE] p-3 rounded-lg outline-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={popupSaving}
                      className="w-full py-3.5 rounded-xl bg-[#D4AF37] text-[#0B0B0C] font-bold text-xs uppercase tracking-wider hover:bg-[#E5BE48] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>{popupSaving ? "Publishing..." : "Publish Offer Pop-Up Changes"}</span>
                    </button>
                  </div>
                </form>
              </div>

              {/* Right Column: Live Interactive Preview */}
              <div className="lg:col-span-5 space-y-3">
                <span className="text-xs font-mono text-[#8E8E93] uppercase block">
                  Live Preview (Compact Mobile View)
                </span>

                <div className="relative max-w-[340px] mx-auto bg-[#0E0B08] border border-[#D4AF37]/40 rounded-2xl p-5 shadow-xl text-center space-y-3 overflow-hidden">
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-mono font-semibold tracking-wider uppercase">
                    <Sparkles className="w-3 h-3" />
                    <span>{popupConfig.badge || "EXCLUSIVE FESTIVE OFFER"}</span>
                  </div>

                  <div>
                    <h3 className="text-lg font-serif font-bold text-[#F4E8D6]">
                      {popupConfig.title || "Your Offer Title"}
                    </h3>
                    {popupConfig.subtitle && (
                      <p className="text-[11px] text-[#D4AF37] font-serif italic mt-0.5">
                        {popupConfig.subtitle}
                      </p>
                    )}
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#16120E] border border-[#2E261D] text-left space-y-1 text-[11px] text-[#FFE0B2]">
                    <div>&bull; 100% In-House Production: Stage, Décor</div>
                    <div>&bull; Free VRX Sound & Stage Pyros Setup</div>
                  </div>

                  <div className="pt-1 space-y-1.5">
                    <div className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs flex items-center justify-center gap-2 font-mono">
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>WhatsApp Direct: {popupConfig.phone || "+91 99235 90038"}</span>
                    </div>

                    <div className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#FFD700] to-[#FF8F00] text-[#0E0B08] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5">
                      <span>{popupConfig.buttonText || "Plan Your Event"}</span>
                    </div>
                  </div>

                  <div className="text-[10px] font-mono text-[#8E8E93] pt-1">
                    Effect Active: <span className="text-[#D4AF37] capitalize">{popupConfig.effectStyle.replace("-", " ")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>


      {/* Note Modal */}
      <AnimatePresence>
        {selectedContact && (
          <div className="fixed inset-0 z-50 bg-[#0B0B0C]/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="w-full max-w-lg bg-[#121214] border border-[#1F1F24] rounded-xl p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-[#1F1F24] pb-3">
                <h3 className="font-serif font-bold text-base text-[#ECECEE]">{selectedContact.name}</h3>
                <button onClick={() => setSelectedContact(null)} className="text-[#8E8E93] hover:text-[#ECECEE]">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="text-xs font-mono space-y-1 text-[#8E8E93]">
                <p>Phone: <a href={`tel:${selectedContact.phone}`} className="text-[#D4AF37] underline">{selectedContact.phone}</a></p>
                <p>Email: <a href={`mailto:${selectedContact.email}`} className="text-[#D4AF37] underline">{selectedContact.email}</a></p>
                <p>Event Date: {selectedContact.date || "TBD"} &bull; Type: {selectedContact.type}</p>
              </div>

              <div className="p-3 rounded-lg bg-[#0B0B0C] border border-[#1F1F24] text-xs text-[#ECECEE]">
                &quot;{selectedContact.message}&quot;
              </div>

              <div>
                <label className="block text-xs font-mono text-[#8E8E93] mb-1">Admin Notes:</label>
                <textarea
                  defaultValue={selectedContact.notes || ""}
                  onChange={e => setEditingNote(e.target.value)}
                  className="w-full bg-[#0B0B0C] border border-[#1F1F24] focus:border-[#D4AF37] text-xs text-[#ECECEE] p-3 rounded-lg outline-none h-20 resize-none"
                />
              </div>

              <button
                onClick={() => {
                  handleUpdateContactStatus(selectedContact.id, selectedContact.status, editingNote || selectedContact.notes);
                  setSelectedContact(null);
                }}
                className="w-full py-2.5 rounded-lg bg-[#D4AF37] text-[#0B0B0C] font-bold text-xs uppercase font-mono tracking-wider hover:bg-[#E5BE48]"
              >
                Save Notes
              </button>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* SEO Modals */}
      <AnimatePresence>
        {showAddReportModal && (
          <div className="fixed inset-0 z-50 bg-[#0B0B0C]/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-[#121214] border border-[#1F1F24] rounded-xl p-6 space-y-4 text-xs font-mono">
              <div className="flex items-center justify-between border-b border-[#1F1F24] pb-3">
                <h3 className="font-serif font-bold text-base text-[#ECECEE]">Add Monthly SEO Report</h3>
                <button onClick={() => setShowAddReportModal(false)} className="text-[#8E8E93]">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleAddSeoReport} className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Month & Year (e.g. September 2026)"
                  value={newReportMonth}
                  onChange={e => setNewReportMonth(e.target.value)}
                  className="w-full bg-[#0B0B0C] border border-[#1F1F24] p-2.5 rounded-lg text-[#ECECEE] outline-none"
                />
                <textarea
                  required
                  rows={2}
                  placeholder="Monthly Focus Summary..."
                  value={newReportSummary}
                  onChange={e => setNewReportSummary(e.target.value)}
                  className="w-full bg-[#0B0B0C] border border-[#1F1F24] p-2.5 rounded-lg text-[#ECECEE] outline-none resize-none"
                />
                <textarea
                  rows={3}
                  placeholder="Achievements (one per line)..."
                  value={newReportAchievements}
                  onChange={e => setNewReportAchievements(e.target.value)}
                  className="w-full bg-[#0B0B0C] border border-[#1F1F24] p-2.5 rounded-lg text-[#ECECEE] outline-none resize-none"
                />
                <input
                  type="text"
                  placeholder="Growth (e.g. +15% MoM)"
                  value={newReportTraffic}
                  onChange={e => setNewReportTraffic(e.target.value)}
                  className="w-full bg-[#0B0B0C] border border-[#1F1F24] p-2.5 rounded-lg text-[#ECECEE] outline-none"
                />
                <input
                  type="text"
                  placeholder="Agency Notes..."
                  value={newReportNotes}
                  onChange={e => setNewReportNotes(e.target.value)}
                  className="w-full bg-[#0B0B0C] border border-[#1F1F24] p-2.5 rounded-lg text-[#ECECEE] outline-none"
                />

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg bg-[#D4AF37] text-[#0B0B0C] font-bold text-xs uppercase tracking-wider"
                >
                  Save Monthly Report
                </button>
              </form>
            </div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showAddKeywordModal && (
          <div className="fixed inset-0 z-50 bg-[#0B0B0C]/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="w-full max-w-sm bg-[#121214] border border-[#1F1F24] rounded-xl p-6 space-y-4 text-xs font-mono">
              <div className="flex items-center justify-between border-b border-[#1F1F24] pb-3">
                <h3 className="font-serif font-bold text-base text-[#ECECEE]">Track Keyword</h3>
                <button onClick={() => setShowAddKeywordModal(false)} className="text-[#8E8E93]">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleAddKeyword} className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Keyword..."
                  value={newKwKeyword}
                  onChange={e => setNewKwKeyword(e.target.value)}
                  className="w-full bg-[#0B0B0C] border border-[#1F1F24] p-2.5 rounded-lg text-[#ECECEE] outline-none"
                />
                <input
                  type="text"
                  required
                  placeholder="Target URL Path (/destinations)"
                  value={newKwTargetUrl}
                  onChange={e => setNewKwTargetUrl(e.target.value)}
                  className="w-full bg-[#0B0B0C] border border-[#1F1F24] p-2.5 rounded-lg text-[#ECECEE] outline-none"
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    required
                    placeholder="Current Rank (#)"
                    value={newKwRank}
                    onChange={e => setNewKwRank(e.target.value)}
                    className="w-full bg-[#0B0B0C] border border-[#1F1F24] p-2.5 rounded-lg text-[#ECECEE] outline-none"
                  />
                  <input
                    type="number"
                    required
                    placeholder="Prev Rank (#)"
                    value={newKwPrevRank}
                    onChange={e => setNewKwPrevRank(e.target.value)}
                    className="w-full bg-[#0B0B0C] border border-[#1F1F24] p-2.5 rounded-lg text-[#ECECEE] outline-none"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Search Volume (e.g. 3,500 / mo)"
                  value={newKwVolume}
                  onChange={e => setNewKwVolume(e.target.value)}
                  className="w-full bg-[#0B0B0C] border border-[#1F1F24] p-2.5 rounded-lg text-[#ECECEE] outline-none"
                />

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg bg-[#D4AF37] text-[#0B0B0C] font-bold text-xs uppercase tracking-wider"
                >
                  Save Keyword
                </button>
              </form>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
