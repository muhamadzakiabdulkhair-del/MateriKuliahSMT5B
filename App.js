import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>CURRICULUM VITAE</Text>

        <Text style={styles.name}>Muhamad Zaki Abdul Khair</Text>

        <View style={styles.divider} />

        <View style={styles.section}>
          <Text style={styles.label}>NIM</Text>
          <Text style={styles.value}>2488010053</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Asal Sekolah</Text>
          <Text style={styles.value}>UIN Syekh Nurjati Cirebon</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Cita-cita</Text>
          <Text style={styles.value}>
            Menjadi seorang programmer dan mengembangkan teknologi yang
            bermanfaat bagi masyarakat.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Rencana Menggapai Cita-cita</Text>

          <Text style={styles.value}>
            1. Memperdalam ilmu pemrograman.
            {"\n\n"}
            2. Mempelajari berbagai teknologi pengembangan aplikasi.
            {"\n\n"}
            3. Membuat berbagai proyek untuk meningkatkan pengalaman.
            {"\n\n"}
            4. Terus belajar dan mengikuti perkembangan teknologi.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f2f2f2",
    padding: 20,
    justifyContent: "center",
  },

  card: {
    backgroundColor: "#ffffff",
    padding: 25,
    borderRadius: 15,
    elevation: 5,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },

  divider: {
    height: 1,
    backgroundColor: "#cccccc",
    marginVertical: 20,
  },

  section: {
    marginBottom: 20,
  },

  label: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 5,
  },

  value: {
    fontSize: 16,
    lineHeight: 24,
  },
});
