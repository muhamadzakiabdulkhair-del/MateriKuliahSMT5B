// ============================================
// IMPORT LIBRARY
// ============================================
import React, { useState, useEffect, useRef } from "react";
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  SectionList,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
  Switch,
  Modal,
  ActivityIndicator,
  StyleSheet,
  Alert,
  Animated,
  KeyboardAvoidingView,
  Platform,
  Linking,
} from "react-native";

// ============================================
// PALET WARNA (dark theme)
// ============================================
const COLORS = {
  bg: "#0F0F0F",
  card: "#1A1A16",
  purple: "#8B5CF6",
  purpleDark: "#6D28D9",
  text: "#FFFFFF",
  textMuted: "#9CA3AF",
  success: "#22C55E",
  border: "#2A2A26",
  skillTeal: "#22D3EE",
  skillBlue: "#3B82F6",
  danger: "#EF4444",
};

// ============================================
// DATA PROFIL
// ============================================
const PROFILE = {
  name: "Muhamad Zaki Abdul Khair",
  title: "Full Stack Website Developer",
  email: "muhamadzakiabdulkhair@gmail.com",
  phone: "081249040161",
  location: "Majalengka, Jawa Barat",
  bio: "Saya adalah mahasiswa Teknik Informatika di UIN Siber Syekh Nurjati Cirebon dengan fokus pembelajaran pada basis data, kriptografi, jaringan komputer, IoT, dan pengembangan web. Saya tertarik membangun sistem aplikasi yang fungsional dan efisien.",
  avatarUrl: "https://i.imgur.com/ei0auFo.jpeg",
  social: [
    {
      id: "s1",
      label: "Github",
      emoji: "🏅",
      url: "https://github.com/muhamadzakiabdulkhair-del/",
    },
    {
      id: "s2",
      label: "LinkedIn",
      emoji: "💼",
      url: "https://linkedin.com/in/muhamad-zaki-abdul-khair-392491421",
    },
    {
      id: "s3",
      label: "Instagram",
      emoji: "📹",
      url: "https://www.instagram.com/zaki.ak05?stkn=Z2dvN3Fza3YycmU1",
    },
  ],
};

// ============================================
// DATA SKILLS
// ============================================
const SKILLS = [
  { id: "sk1", name: "JavaScript", level: 88, color: COLORS.skillBlue },
  { id: "sk2", name: "React Native", level: 75, color: COLORS.skillTeal },
  { id: "sk3", name: "PHP", level: 80, color: "#A78BFA" },
  { id: "sk4", name: "MySQL", level: 78, color: "#38BDF8" },
  { id: "sk5", name: "Laravel", level: 65, color: "#F472B6" },
  { id: "sk6", name: "Git & GitHub", level: 70, color: "#FB923C" },
];

// ============================================
// DATA RIWAYAT
// ============================================
const HISTORY_SECTIONS = [
  {
    title: "Pengalaman",
    data: [
      {
        id: "exp1",
        heading: "Freelance Web Developer",
        subheading: "Z Webby05 · 2024 - Sekarang",
        detail:
          "Membangun platform layanan pengembangan web untuk klien, mulai dari landing page hingga sistem informasi sederhana.",
      },
      {
        id: "exp2",
        heading: "Sistem Marketing BTQ Plus Institute",
        subheading: "Aplikasi Web PHP Native · 2026",
        detail:
          "Membangun aplikasi web untuk mengelola marketing dan kartu anggota berbasis QR Code, termasuk transaksi produk/jasa, perhitungan keuntungan, saldo, dan laporan bulanan.",
      },
      {
        id: "exp3",
        heading: "SignDoc",
        subheading: "Proyek Akhir Mata Kuliah Kriptografi Modern",
        detail:
          "Mengembangkan sistem tanda tangan digital berbasis PHP Native yang mengimplementasikan RSA-2048, SHA-256, dan AES-256-CBC untuk menjamin keaslian dan keamanan dokumen.",
      },
    ],
  },
  {
    title: "Pendidikan",
    data: [
      {
        id: "edu1",
        heading: "S1 Teknik Informatika",
        subheading: "UIN Siber Syekh Nurjati Cirebon · 2023 - Sekarang",
        detail:
          "Fokus pembelajaran pada basis data, kriptografi, jaringan komputer, IoT, dan pengembangan web.",
      },
      {
        id: "edu2",
        heading: "MAS Al-fatah Temboro",
        subheading: "Magetan-Temboro, Jawa Timur",
        detail:
          "Menyelesaikan pendidikan menengah atas sebelum melanjutkan ke perguruan tinggi.",
      },
    ],
  },
];

// ============================================
// TAB NAVIGASI
// ============================================
const TABS = [
  { key: "info", label: "Info" },
  { key: "skills", label: "Skills" },
  { key: "kontak", label: "Kontak" },
];

// ============================================
// SUB-COMPONENT: SkillCard
// ============================================
function SkillCard({ skill }) {
  return (
    <View style={styles.skillCard}>
      <View style={styles.skillTopRow}>
        <Text style={styles.skillName}>{skill.name}</Text>
        <Text style={styles.skillPercent}>{skill.level}%</Text>
      </View>
      <View style={styles.skillBarTrack}>
        <View
          style={[
            styles.skillBarFill,
            { width: `${skill.level}%`, backgroundColor: skill.color },
          ]}
        />
      </View>
    </View>
  );
}

// ============================================
// SUB-COMPONENT: TimelineCard
// ============================================
function TimelineCard({ item, onPress }) {
  return (
    <Pressable
      onPress={() => onPress(item)}
      style={({ pressed }) => [
        styles.timelineCard,
        pressed && { opacity: 0.6 },
      ]}
    >
      <Text style={styles.timelineHeading}>{item.heading}</Text>
      <Text style={styles.timelineSubheading}>{item.subheading}</Text>
    </Pressable>
  );
}

// ============================================
// KOMPONEN UTAMA: App
// ============================================
export default function App() {
  const [isAvailable, setIsAvailable] = useState(true);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeTab, setActiveTab] = useState("info");

  // ── Animated: efek "berdenyut" pelan di avatar ──
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.06,
          duration: 900,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 900,
          useNativeDriver: true,
        }),
      ]),
    );
    loop.start();
    return () => loop.stop();
  }, [pulseAnim]);

  const handleSend = () => {
    if (!name.trim() || !message.trim()) {
      Alert.alert("Peringatan", "Nama dan pesan tidak boleh kosong.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert("Berhasil", "Pesan kamu sudah terkirim!");
      setName("");
      setMessage("");
    }, 2000);
  };

  const openDetail = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const openLink = async (url) => {
    try {
      await Linking.openURL(url);
    } catch (err) {
      Alert.alert("Gagal membuka link", String(err));
    }
  };

  // Tekan ikon → muncul dialog konfirmasi berisi link → tekan "Buka" untuk lanjut
  const handleSocialPress = (item) => {
    Alert.alert(item.label, item.url, [
      { text: "Batal", style: "cancel" },
      { text: "Buka", onPress: () => openLink(item.url) },
    ]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.bg} />

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>📄 Curriculum Vitae</Text>
        <View style={styles.headerRight}>
          {isAvailable && (
            <View style={styles.statusPill}>
              <View style={styles.statusDot} />
              <Text style={styles.statusText}>Open</Text>
            </View>
          )}
          <Switch
            value={isAvailable}
            onValueChange={setIsAvailable}
            trackColor={{ false: "#3F3F3F", true: COLORS.success }}
            thumbColor={COLORS.text}
          />
        </View>
      </View>

      {/* TAB NAVIGASI */}
      <View style={styles.tabBar}>
        {TABS.map((tab) => (
          <TouchableOpacity
            key={tab.key}
            style={[
              styles.tabItem,
              activeTab === tab.key && styles.tabItemActive,
            ]}
            onPress={() => setActiveTab(tab.key)}
          >
            <Text
              style={[
                styles.tabLabel,
                activeTab === tab.key && styles.tabLabelActive,
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* ══════════ TAB: INFO ══════════ */}
      {activeTab === "info" && (
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.profileSection}>
            <Animated.View
              style={[styles.avatarRing, { transform: [{ scale: pulseAnim }] }]}
            >
              <Image
                source={{ uri: PROFILE.avatarUrl }}
                style={styles.avatar}
              />
            </Animated.View>

            <View style={styles.availableBadge}>
              <Text style={styles.availableBadgeText}>✅ Open to Work</Text>
            </View>

            <Text style={styles.name}>{PROFILE.name}</Text>
            <Text style={styles.title}>{PROFILE.title}</Text>
            <Text style={styles.bio}>{PROFILE.bio}</Text>

            <View style={styles.contactRow}>
              <Text style={styles.contactText}>✉️ {PROFILE.email}</Text>
            </View>
            <View style={styles.contactRow}>
              <Text style={styles.contactText}>📍 {PROFILE.location}</Text>
            </View>
            <View style={styles.contactRow}>
              <Text style={styles.contactText}>📱 {PROFILE.phone}</Text>
            </View>

            <View style={styles.socialRow}>
              {PROFILE.social.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.socialItem}
                  onPress={() => handleSocialPress(item)}
                >
                  <Text style={styles.socialEmoji}>{item.emoji}</Text>
                  <Text style={styles.socialLabel}>{item.label}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <Pressable
              onPress={() => Alert.alert("Download CV", "Mengunduh file CV...")}
              style={({ pressed }) => [
                styles.downloadButton,
                pressed && { backgroundColor: COLORS.purpleDark },
              ]}
            >
              <Text style={styles.downloadButtonText}>
                ⬇️ Download CV (PDF)
              </Text>
            </Pressable>
          </View>

          <View style={styles.divider} />

          <View style={styles.sectionBox}>
            <Text style={styles.sectionListHeader}>🕘 Riwayat</Text>
            <SectionList
              sections={HISTORY_SECTIONS}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TimelineCard item={item} onPress={openDetail} />
              )}
              renderSectionHeader={({ section }) => (
                <Text style={styles.subSectionHeader}>{section.title}</Text>
              )}
              ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
              scrollEnabled={false}
            />
          </View>
        </ScrollView>
      )}

      {/* ══════════ TAB: SKILLS ══════════ */}
      {activeTab === "skills" && (
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.sectionBox}>
            <Text style={styles.sectionListHeader}>🛠️ Keahlian</Text>
            <Text style={styles.sectionSubNote}>
              Komponen: FlatList — menampilkan daftar skill secara efisien
            </Text>
            <FlatList
              data={SKILLS}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <SkillCard skill={item} />}
              ItemSeparatorComponent={() => <View style={{ height: 14 }} />}
              scrollEnabled={false}
            />
          </View>
        </ScrollView>
      )}

      {/* ══════════ TAB: KONTAK ══════════ */}
      {activeTab === "kontak" && (
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.sectionBox}>
              <Text style={styles.sectionListHeader}>💬 Hubungi Saya</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Nama kamu"
                placeholderTextColor={COLORS.textMuted}
                value={name}
                onChangeText={setName}
              />
              <TextInput
                style={[
                  styles.textInput,
                  { height: 90, textAlignVertical: "top" },
                ]}
                placeholder="Tulis pesan..."
                placeholderTextColor={COLORS.textMuted}
                value={message}
                onChangeText={setMessage}
                multiline
              />
              {loading ? (
                <View style={styles.loadingRow}>
                  <ActivityIndicator size="small" color={COLORS.purple} />
                  <Text style={{ marginLeft: 8, color: COLORS.textMuted }}>
                    Mengirim pesan...
                  </Text>
                </View>
              ) : (
                <Button
                  title="Kirim Pesan"
                  color={COLORS.purple}
                  onPress={handleSend}
                />
              )}
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      )}

      {/* MODAL */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedItem && (
              <>
                <Text style={styles.modalHeading}>{selectedItem.heading}</Text>
                <Text style={styles.modalSubheading}>
                  {selectedItem.subheading}
                </Text>
                <Text style={styles.modalDetail}>{selectedItem.detail}</Text>
              </>
            )}
            <Button
              title="Tutup"
              color={COLORS.danger}
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

// ============================================
// STYLESHEET
// ============================================
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.bg },
  scrollContent: { paddingBottom: 40 },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  headerTitle: { color: COLORS.text, fontSize: 18, fontWeight: "bold" },
  headerRight: { flexDirection: "row", alignItems: "center" },
  statusPill: { flexDirection: "row", alignItems: "center", marginRight: 10 },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.success,
    marginRight: 5,
  },
  statusText: { color: COLORS.text, fontSize: 13 },

  // ── TAB BAR ────────────────────────────────
  tabBar: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginBottom: 10,
    backgroundColor: COLORS.card,
    borderRadius: 10,
    padding: 4,
  },
  tabItem: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 8,
  },
  tabItemActive: {
    backgroundColor: COLORS.purple,
  },
  tabLabel: { color: COLORS.textMuted, fontWeight: "600", fontSize: 13 },
  tabLabelActive: { color: COLORS.text },

  profileSection: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  avatarRing: {
    borderWidth: 3,
    borderColor: COLORS.purple,
    borderRadius: 65,
    padding: 3,
    marginBottom: 14,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: COLORS.border,
  },

  availableBadge: {
    backgroundColor: "rgba(34,197,94,0.15)",
    borderWidth: 1,
    borderColor: COLORS.success,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 6,
    marginBottom: 14,
  },
  availableBadgeText: {
    color: COLORS.success,
    fontWeight: "700",
    fontSize: 13,
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.text,
    textAlign: "center",
  },
  title: {
    fontSize: 15,
    color: COLORS.purple,
    fontWeight: "600",
    marginTop: 4,
    marginBottom: 12,
  },
  bio: {
    fontSize: 13,
    color: COLORS.textMuted,
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 14,
  },

  contactRow: { marginBottom: 4 },
  contactText: { color: COLORS.textMuted, fontSize: 13 },

  socialRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 18,
    marginBottom: 20,
  },
  socialItem: { alignItems: "center", marginHorizontal: 18 },
  socialEmoji: { fontSize: 26, marginBottom: 4 },
  socialLabel: { color: COLORS.text, fontSize: 13, fontWeight: "600" },

  downloadButton: {
    backgroundColor: COLORS.purple,
    paddingHorizontal: 30,
    paddingVertical: 14,
    borderRadius: 30,
    marginBottom: 10,
  },
  downloadButtonText: { color: COLORS.text, fontWeight: "bold", fontSize: 15 },

  divider: {
    height: 1,
    backgroundColor: COLORS.purple,
    marginVertical: 20,
    marginHorizontal: 20,
    opacity: 0.4,
  },

  sectionBox: { paddingHorizontal: 20, marginBottom: 24 },
  sectionListHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.text,
    marginBottom: 6,
  },
  sectionSubNote: { fontSize: 12, color: COLORS.textMuted, marginBottom: 16 },
  subSectionHeader: {
    fontSize: 13,
    fontWeight: "700",
    color: COLORS.purple,
    marginTop: 12,
    marginBottom: 8,
    textTransform: "uppercase",
  },

  skillCard: {},
  skillTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  skillName: { color: COLORS.text, fontSize: 15, fontWeight: "600" },
  skillPercent: { color: COLORS.text, fontSize: 14, fontWeight: "600" },
  skillBarTrack: {
    height: 6,
    backgroundColor: COLORS.border,
    borderRadius: 3,
    overflow: "hidden",
  },
  skillBarFill: { height: 6, borderRadius: 3 },

  timelineCard: {
    backgroundColor: COLORS.card,
    borderRadius: 8,
    padding: 12,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.purple,
  },
  timelineHeading: { fontSize: 14, fontWeight: "700", color: COLORS.text },
  timelineSubheading: { fontSize: 12, color: COLORS.textMuted, marginTop: 2 },

  textInput: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: COLORS.text,
    marginBottom: 12,
    backgroundColor: COLORS.card,
  },
  loadingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: COLORS.card,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 24,
  },
  modalHeading: {
    fontSize: 17,
    fontWeight: "bold",
    color: COLORS.text,
    marginBottom: 4,
  },
  modalSubheading: { fontSize: 13, color: COLORS.purple, marginBottom: 10 },
  modalDetail: {
    fontSize: 14,
    color: COLORS.textMuted,
    lineHeight: 20,
    marginBottom: 18,
  },
});
