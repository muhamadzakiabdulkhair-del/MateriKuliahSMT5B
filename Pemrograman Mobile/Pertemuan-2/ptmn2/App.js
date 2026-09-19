import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function App() {
  return (
    <ScrollView style={styles.background}>
      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>MZ</Text>
          </View>

          <View style={styles.headerText}>
            <Text style={styles.greeting}>HELLO, I'M</Text>
            <Text style={styles.name}>Muhamad Zaki Abdul Khair</Text>
            <Text style={styles.subtitle}>
              Informatics Student • UIN Syekh Nurjati Cirebon
            </Text>
          </View>
        </View>

        {/* DATA DIRI */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>👤 Data Diri</Text>

          <View style={styles.infoItem}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>🎓</Text>
            </View>

            <View>
              <Text style={styles.label}>NIM</Text>
              <Text style={styles.value}>2488010053</Text>
            </View>
          </View>

          <View style={styles.infoItem}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>🏫</Text>
            </View>

            <View>
              <Text style={styles.label}>Asal Sekolah</Text>
              <Text style={styles.value}>UIN Syekh Nurjati Cirebon</Text>
            </View>
          </View>
        </View>

        {/* CITA-CITA */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>🚀 Cita-cita</Text>

          <Text style={styles.description}>
            Menjadi seorang programmer dan mengembangkan teknologi yang
            bermanfaat bagi masyarakat.
          </Text>
        </View>

        {/* RENCANA */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>📌 Rencana Menggapai Cita-cita</Text>

          <View style={styles.plan}>
            <Text style={styles.number}>01</Text>
            <Text style={styles.planText}>Memperdalam ilmu pemrograman.</Text>
          </View>

          <View style={styles.plan}>
            <Text style={styles.number}>02</Text>
            <Text style={styles.planText}>
              Mempelajari berbagai teknologi pengembangan aplikasi.
            </Text>
          </View>

          <View style={styles.plan}>
            <Text style={styles.number}>03</Text>
            <Text style={styles.planText}>
              Membuat berbagai proyek untuk meningkatkan pengalaman.
            </Text>
          </View>

          <View style={styles.plan}>
            <Text style={styles.number}>04</Text>
            <Text style={styles.planText}>
              Terus belajar dan mengikuti perkembangan teknologi.
            </Text>
          </View>
        </View>

        {/* FOOTER */}
        <Text style={styles.footer}>Curriculum Vitae • Pemrograman Mobile</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#eef3f8",
  },

  container: {
    width: "100%",
    maxWidth: 900,
    alignSelf: "center",
    padding: 25,
  },

  /* HEADER */
  header: {
    backgroundColor: "#172a46",
    borderRadius: 24,
    padding: 30,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  avatar: {
    width: 95,
    height: 95,
    borderRadius: 48,
    backgroundColor: "#3b82f6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 25,
  },

  avatarText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
  },

  headerText: {
    flex: 1,
  },

  greeting: {
    color: "#93c5fd",
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 2,
    marginBottom: 5,
  },

  name: {
    color: "#ffffff",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 8,
  },

  subtitle: {
    color: "#cbd5e1",
    fontSize: 16,
  },

  /* CARD */
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 25,
    marginBottom: 18,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,

    elevation: 3,
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#172a46",
    marginBottom: 22,
  },

  /* DATA DIRI */
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  iconBox: {
    width: 58,
    height: 58,
    borderRadius: 16,
    backgroundColor: "#e8f1ff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 18,
  },

  icon: {
    fontSize: 25,
  },

  label: {
    fontSize: 14,
    color: "#64748b",
    marginBottom: 4,
  },

  value: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#172a46",
  },

  /* CITA-CITA */
  description: {
    fontSize: 17,
    lineHeight: 28,
    color: "#475569",
  },

  /* RENCANA */
  plan: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 18,
  },

  number: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#172a46",
    color: "#ffffff",
    textAlign: "center",
    paddingTop: 11,
    fontWeight: "bold",
    marginRight: 15,
  },

  planText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 25,
    color: "#475569",
    paddingTop: 7,
  },

  footer: {
    textAlign: "center",
    color: "#64748b",
    fontSize: 13,
    marginTop: 5,
    marginBottom: 20,
  },
});
