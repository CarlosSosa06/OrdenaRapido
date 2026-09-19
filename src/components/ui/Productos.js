import { Link } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Productos({ item }) {
  return (
    <Link href={{ pathname: `/restaurant/${item.id}`, params: item }} asChild>
      <TouchableOpacity style={styles.card} activeOpacity={0.7}>
        <View style={styles.logoPlaceholder}>
          <Text style={styles.logoText}>Logo/Img</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.ratingText}>{item.rating} {item.stars}</Text>
          <Text style={styles.detailsText}>{item.distance}   {item.category}</Text>
          <Text style={styles.priceText}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderWidth: 1.5,
    borderColor: '#000',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#fff'
  },
  logoPlaceholder: {
    width: 60, height: 60, borderRadius: 30, borderWidth: 1, 
    justifyContent: 'center', alignItems: 'center', marginRight: 15
  },
  logoText: { fontSize: 9, textAlign: 'center' },
  infoContainer: { flex: 1, justifyContent: 'center' },
  title: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  ratingText: { fontSize: 14, marginBottom: 2 },
  detailsText: { fontSize: 14, color: '#555', marginBottom: 2 },
  priceText: { fontSize: 14, fontWeight: 'bold' }
});