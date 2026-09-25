import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function DetalleRestScreen() {
  const { id, name, distance, rating, stars, category, price, description } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.logoPlaceholder} />
        <View style={styles.infoSection}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.detailsText}>{distance}   {rating} {stars}</Text>
          <Text style={styles.detailsText}>{category}</Text>
          <Text style={styles.priceText}>{price}</Text>
        </View>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.descText}>{description}</Text>
        
        <View style={styles.line} />
        <View style={styles.line} />
        <View style={styles.line} />
        <Text style={styles.descLabel}>desc.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  topSection: { flexDirection: 'row', marginBottom: 30 },
  logoPlaceholder: { width: 80, height: 80, borderRadius: 40, borderWidth: 1.5, borderColor: '#000', marginRight: 20 },
  infoSection: { flex: 1, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
  detailsText: { fontSize: 16, color: '#444', marginBottom: 4 },
  priceText: { fontSize: 16, fontWeight: 'bold', marginTop: 4 },
  descriptionContainer: { marginTop: 20 },
  descText: { fontSize: 16, color: '#333', marginBottom: 20, lineHeight: 22 },
  line: { height: 1.5, backgroundColor: '#000', marginBottom: 15, width: '100%' },
  descLabel: { alignSelf: 'flex-end', fontSize: 14, fontStyle: 'italic', color: '#666' }
});