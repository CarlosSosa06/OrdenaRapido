import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import Navegacion from '../components/ui/Navegacion';
import Productos from '../components/ui/Productos';

const mockData = [
  { 
    id: '1', name: 'La Taquería', distance: '50mts', rating: '4.0', stars: '★★★★☆', price: '$', category: 'Mexican Food',
    description: 'Los mejores tacos al pastor de la zona, con tortillas hechas a mano y salsas tradicionales.'
  },
  { 
    id: '2', name: 'Dragon Dorado', distance: '40mts', rating: '4.5', stars: '★★★★☆', price: '$$', category: 'Chinese Food',
    description: 'Comida china auténtica. Especialidad en pato laqueado y arroz frito estilo Cantón.'
  },
  { 
    id: '3', name: 'Thai Express', distance: '80mts', rating: '4.8', stars: '★★★★★', price: '$$$', category: 'Thai Food',
    description: 'Exquisita comida tailandesa. Prueba nuestro tradicional Pad Thai picante.'
  },
];

export default function InicioScreen() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.content}>
        <Text style={styles.headerTitle}>Food Review App</Text>
        
        <TextInput style={styles.searchInput} placeholder="🔍 Buscar..." />

        <View style={styles.filtersContainer}>
          <View style={styles.filterBox}><Text>Category ▾</Text></View>
          <View style={styles.filterBox}><Text>~ ▾</Text></View>
          <View style={styles.filterBox}><Text>▾</Text></View>
        </View>

        <FlatList 
          data={mockData}
          renderItem={({ item }) => <Productos item={item} />}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>

      <Navegacion />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, paddingHorizontal: 16, paddingTop: 50 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 15 },
  searchInput: { borderWidth: 1.5, borderColor: '#000', borderRadius: 8, padding: 10, marginBottom: 15 },
  filtersContainer: { flexDirection: 'row', justifyContent: 'flex-start', marginBottom: 20, gap: 10 },
  filterBox: { borderWidth: 1.5, borderColor: '#000', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 4 },
});