import { useEffect, useState } from 'react';
import style from './../Style/style';
import * as Location from "expo-location";
import {
  Text,
  View,
  Button,
  Alert
} from "react-native";

export function HomeScreen() { 
  const [location, setLocation] = useState<any>({});
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [locations, setLocations] = useState<Array<any>>([]);
  const [text, setText] = useState<string>('');

  useEffect(() => {

  }, [location])

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('Permission to access location was denied');
    } else {
      const currentLocation = await Location.getCurrentPositionAsync({});
      const address = Location.reverseGeocodeAsync(currentLocation.coords);

      const position = {
        latitude: `${currentLocation?.coords.latitude || ''}`,
        longitude: `${currentLocation?.coords.longitude  || ''}`
      }

      setLocations(oldArray => [...oldArray, position])
      Location.getLastKnownPositionAsync()
        .then(item => {
          
        })
        .catch(error => {
          Alert.alert(error);
        })
    }
  }
  
  return (
    <View style={style.container}>
      <Button
        title="LOCATION NOW"
        onPress={() => getLocation()}
      />

      {locations.map((item, index) => {
        return (
          <View>
            <Text style={style.number}>Position no. {index + 1}</Text>
            <Text style={style.title}>
              Latitud: <Text style={style.text}>{item.latitude}</Text>
            </Text>
            <Text style={style.title}>
              Longitud: <Text style={style.text}>{item.longitude}</Text>
            </Text>
          </View>
        );
      })}
    </View>
  );
}
