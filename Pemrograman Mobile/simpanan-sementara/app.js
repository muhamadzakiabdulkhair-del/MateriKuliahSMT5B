// Import Library
import React, { useState } from "react";
import {
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
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Alert,
  Platform,
} from "react-native";

// Foto cadangan lokal (taruh file-nya di assets/photo.jpeg)
import fotoLokal from "./assets/photo.jpeg";

const PROFILE = {
  name: "Muhamad Zaki Abdul Khair",
  title: "Full Stack Website Developer",
  email: "muhamadzakiabdulkhair@gmail.com",
  phone: "081249040161",
  location: "Majalengka, Jawa Barat",
  bio: "Saya adalah mahasiswa Teknik Informatika di UIN Siber Syekh Nurjati Cirebon dengan fokus pembelajaran pada basis data, kriptografi, jaringan komputer, IoT, dan pengembangan web. Saya tertarik membangun sistem aplikasi yang fungsional dan efisien.",
  avatarUrl: "https://i.imgur.com/ei0auFo.jpeg",
};

export default function App() {
  // Kalau foto online gagal dimuat, pindah otomatis ke foto lokal
  const [avatarFailed, setAvatarFailed] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={avatarFailed ? fotoLokal : { uri: PROFILE.avatarUrl }}
          style={styles.avatar}
          onError={() => setAvatarFailed(true)}
        />

        <Text style={styles.name}>{PROFILE.name}</Text>
        <Text style={styles.title}>{PROFILE.title}</Text>

        <View style={styles.card}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>{PROFILE.email}</Text>

          <Text style={styles.label}>No. HP</Text>
          <Text style={styles.value}>{PROFILE.phone}</Text>

          <Text style={styles.label}>Lokasi</Text>
          <Text style={styles.value}>{PROFILE.location}</Text>

          <Text style={styles.label}>Bio</Text>
          <Text style={styles.value}>{PROFILE.bio}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    padding: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 20,
    marginBottom: 16,
    backgroundColor: "#ddd",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    fontSize: 14,
    color: "#555",
    marginBottom: 16,
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
    fontSize: 13,
    fontWeight: "bold",
    color: "#555",
    marginTop: 10,
  },
  value: {
    fontSize: 15,
    color: "#000",
    marginBottom: 5,
  },
});
