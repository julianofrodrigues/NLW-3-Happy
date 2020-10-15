import React from 'react';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import mapMarker from '../images/map-marker.png';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function OrphanagesMap(){
    const navigation = useNavigation();

    function handleNavigateToOrphanageDetails(){
      navigation.navigate('OrphanageDetails')
    }

    return(
        <View style={styles.container}>
      <MapView 
        provider={PROVIDER_GOOGLE}
        style={styles.map} 
        initialRegion={{
          latitude: -22.546276,
          longitude: -44.071024,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
      }}>
        <Marker 
          calloutAnchor={{
            x: 2.7,
            y: 0.8,
          }}
          icon={mapMarker}
          coordinate={{
            latitude: -22.546276,
            longitude: -44.071024,
          }}
        >
          <Callout tooltip={true} onPress={handleNavigateToOrphanageDetails}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Teste orphanato</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>2 orfanatos encontrados</Text>
        <TouchableOpacity style={styles.createOrphanageButton} onPress={()=>{alert('teste')}}>
          <Feather name="plus" color={'#FFF'} />
        </TouchableOpacity>
      </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,  
    },
    map:{
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    calloutContainer:{
      width: 160,
      height: 46,
      paddingHorizontal: 16,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: 16,
      justifyContent: 'center',
    },
    calloutText:{
      color: '#0089A5',
      fontSize: 14,
      fontFamily: 'Nunito_700Bold',
    },
    footer:{
      position: 'absolute',
      left: 24,
      right: 24,
      bottom: 32,
  
      backgroundColor: '#FFF',
      borderRadius: 20,
      height: 56,
      paddingLeft: 24,
  
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      elevation: 3,
    },
    footerText:{
      fontFamily: 'Nunito_700Bold',
      color: '#8FA7B3'
    },
    createOrphanageButton:{
      width: 56,
      height: 56,
      backgroundColor: '#15C3D6',
      borderRadius: 20,
  
      justifyContent: 'center',
      alignItems: 'center'
    }
  });