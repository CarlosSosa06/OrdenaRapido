import { Link } from 'expo-router';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Navegacion() {
  const mostrarAviso = () => {
    Alert.alert("No disponible");
  };

  return (
    <View style={styles.container}>
      <Link href="/" asChild>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.text}>Inicio</Text>
        </TouchableOpacity>
      </Link>

      <View style={styles.divider} />

      {/* Botón visual sin ruta */}
      <TouchableOpacity style={styles.tab} onPress={mostrarAviso}>
        <Text style={styles.textInactive}>Mapa</Text>
      </TouchableOpacity>

      <View style={styles.divider} />

      {/* Botón visual sin ruta */}
      <TouchableOpacity style={styles.tab} onPress={mostrarAviso}>
        <Text style={styles.textInactive}>Config.</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1.5,
    borderColor: '#000',
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingBottom: 25, 
  },
  tab: { flex: 1, alignItems: 'center', paddingVertical: 5 },
  divider: { width: 1.5, height: '80%', backgroundColor: '#000' },
  text: { fontSize: 16, fontWeight: 'bold' },
  textInactive: { fontSize: 16, fontWeight: '400', color: '#666' }
});