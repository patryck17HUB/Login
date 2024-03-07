import React, {useState, useEffect} from "react";
import {View, Image, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native";

export default App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = 'a23bf645270444bcb14231608241902';

  const getWeather = async () => { // async function funciona en torno a una accion
    try {
      const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&days=1&aqi=yes&alerts=no`);
      const data = await res.json();
        if (data.error) {
            setError(data.error.message);
        } else {
            setWeatherData(data);
        }   
    } catch (err) {
        setError('Error finding weather data');
    }
    };

    useEffect(() => {
        city ? getWeather : setWeatherData(null);
    }, [city]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to weather app</Text>
      <TextInput 
        style={styles.input}
        placeholder="Enter city name"
        value={city}
        onChangeText={(text) => setCity(text)}
        />
      <TouchableOpacity style={styles.button} onPress={getWeather}>
        <Text style={styles.buttonText}>Get Weather</Text>
      </TouchableOpacity>
      {error && <Text>{error}</Text>}
      {weatherData && (
        <View style={styles.weatherData}>
        <View style={styles.weatherDataInt}>

          <Text style={styles.weatherRow}>
            <Text style={styles.weatherLabelText}>City:</Text>
            <Text style={styles.weatherText}> {weatherData.location.name}</Text>
          </Text>

          <Text style={styles.weatherRow}>
            <Text style={styles.weatherLabelText}>Country:</Text>
            <Text style={styles.weatherText}> {weatherData.location.country}</Text>
          </Text>

          <Text style={styles.weatherRow}>
            <Text style={styles.weatherLabelText}>Temperature:</Text>
            <Text style={styles.weatherText}> {weatherData.current.temp_c}</Text>
          </Text>

          <Text style={styles.weatherRow}>
            <Text style={styles.weatherLabelText}>Condition:</Text>
            <Text style={styles.weatherText}> {weatherData.current.condition.text}</Text>
          </Text>

          <Image
            style={styles.weatherImage}
            source={{uri: `https:${weatherData.current.condition.icon}`}  }
        />

        </View>
        </View>       
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
    justifyContent: "top",
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "#FAFAFA",
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
  },
  buttonText: {
    color: "white",
  },
  weatherData: {
    marginTop: 20, 
    height: "74%",
    width: "85%",
  },
  weatherDataInt: {
    margin: 12,
  },
  weatherText: {
    fontSize: 20,
    color:"#FAFAFA",
  },
  weatherLabelText: {
    fontSize: 20,
    fontWeight: "bold",
    color:"#FAFAFA",
  },
  weatherRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  weatherImage: {
    width: "auto",
    height: 300,
  },
});