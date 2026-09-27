import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Curriculum Vitae</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Nama Lengkap</Text>
        <Text style={styles.value}>Muhamad Zaki Abdul Khair</Text>

        <Text style={styles.label}>NIM</Text>
        <Text style={styles.value}>2488010053</Text>

        <Text style={styles.label}>Asal Sekolah</Text>
        <Text style={styles.value}>MAS Al-fatah Temboro</Text>

        <Text style={styles.label}>Cita-cita</Text>
        <Text style={styles.value}>Menjadi Software Engineer profesional</Text>

        <Text style={styles.label}>Rencana Menggapai Cita-cita</Text>
        <Text style={styles.value}>
          Belajar pemrograman secara konsisten, mengikuti pelatihan/sertifikasi,
          membangun portofolio proyek, serta aktif mengikuti kegiatan organisasi
          dan magang di bidang teknologi.
        </Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#555",
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    color: "#000",
    marginBottom: 5,
  },
});
