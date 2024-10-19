import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";

import RNPickerSelect from "react-native-picker-select";

const Stack = createNativeStackNavigator();

// Landing Page Component
const LandingPage = ({ navigation }) => {
  return (
    <View className="flex-1 items-center justify-center bg-gradient-to-b from-green-200 to-green-400 px-6">
      <Text className="text-5xl font-bold text-gray-900 mb-6">
        Carbon Counter
      </Text>
      <Text className="text-lg text-center text-gray-700 mb-12 px-4 leading-7">
        Calculate your carbon emissions easily and start making a positive
        impact on the environment.
      </Text>
      <TouchableOpacity
        className="bg-green-700 py-4 px-10 rounded-full shadow-lg"
        onPress={() => navigation.navigate("Calculator")}
      >
        <Text className="text-white text-lg">Go to Calculator</Text>
      </TouchableOpacity>
    </View>
  );
};

const CarbonCalculator = () => {
  const [distance, setDistance] = useState("");
  const [electricity, setElectricity] = useState("");
  const [diet, setDiet] = useState("average");
  const [shoppingFrequency, setShoppingFrequency] = useState("monthly");
  const [publicTransport, setPublicTransport] = useState("rarely");
  const [carbonFootprint, setCarbonFootprint] = useState(null);

  const calculateCarbon = () => {
    // Basic Carbon Emission Calculation
    const carbonFromTravel = parseFloat(distance) * 0.21; // 0.21 kg CO2 per km
    const carbonFromElectricity = parseFloat(electricity) * 0.7; // 0.7 kg CO2 per kWh

    // Diet CO2 (kg CO2 per day based on diet type)
    let carbonFromDiet = 0;
    if (diet === "heavy") carbonFromDiet = 7;
    else if (diet === "average") carbonFromDiet = 5;
    else if (diet === "vegetarian") carbonFromDiet = 3;
    else if (diet === "vegan") carbonFromDiet = 2;

    // Shopping Frequency CO2 multiplier
    let shoppingMultiplier = 1;
    if (shoppingFrequency === "weekly") shoppingMultiplier = 1.5;
    else if (shoppingFrequency === "monthly") shoppingMultiplier = 1;

    // Public Transport Frequency CO2
    let carbonFromTransport = 0;
    if (publicTransport === "daily")
      carbonFromTransport = 0.05 * 30; // Assuming 0.05 kg per day
    else if (publicTransport === "often") carbonFromTransport = 0.05 * 15;
    else if (publicTransport === "rarely") carbonFromTransport = 0.05 * 5;

    const totalCarbon =
      carbonFromTravel +
      carbonFromElectricity +
      carbonFromDiet * 30 + // Diet CO2 for a month
      carbonFromTransport * shoppingMultiplier; // Public Transport CO2 adjusted by shopping frequency

    setCarbonFootprint(totalCarbon.toFixed(2));
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 16,
      }}
    >
      <View className="w-full mb-6 mt-10">
        <Text className="text-lg text-gray-700 mb-2">
          Distance Traveled (in km)
        </Text>
        <TextInput
          className="bg-white px-4 py-3 rounded-lg border border-gray-300 text-lg"
          keyboardType="numeric"
          placeholder="Enter distance"
          value={distance}
          onChangeText={setDistance}
        />
      </View>

      <View className="w-full mb-6">
        <Text className="text-lg text-gray-700 mb-2">
          Electricity Usage (in kWh)
        </Text>
        <TextInput
          className="bg-white px-4 py-3 rounded-lg border border-gray-300 text-lg"
          keyboardType="numeric"
          placeholder="Enter usage"
          value={electricity}
          onChangeText={setElectricity}
        />
      </View>

      {/* Diet Picker */}
      <View className="w-full mb-6">
        <Text className="text-lg text-gray-700 mb-2">Diet Type</Text>
        <RNPickerSelect
          onValueChange={(value) => setDiet(value)}
          items={[
            { label: "Heavy Meat Diet", value: "heavy" },
            { label: "Average Diet", value: "average" },
            { label: "Vegetarian", value: "vegetarian" },
            { label: "Vegan", value: "vegan" },
          ]}
          value={diet}
          style={{
            inputIOS: {
              fontSize: 16,
              paddingVertical: 12,
              paddingHorizontal: 10,
              borderWidth: 1,
              borderColor: "gray",
              borderRadius: 4,
              color: "black",
              paddingRight: 30,
            },
            inputAndroid: {
              fontSize: 16,
              paddingHorizontal: 10,
              paddingVertical: 8,
              borderWidth: 1,
              borderColor: "gray",
              borderRadius: 4,
              color: "black",
            },
          }}
          Icon={() => {
            return <Text style={{ fontSize: 20 }}>▼</Text>;
          }}
        />
      </View>

      {/* Shopping Frequency Picker */}
      <View className="w-full mb-6">
        <Text className="text-lg text-gray-700 mb-2">Shopping Frequency</Text>
        <RNPickerSelect
          onValueChange={(value) => setShoppingFrequency(value)}
          items={[
            { label: "Weekly", value: "weekly" },
            { label: "Monthly", value: "monthly" },
          ]}
          value={shoppingFrequency}
          style={{
            inputIOS: {
              fontSize: 16,
              paddingVertical: 12,
              paddingHorizontal: 10,
              borderWidth: 1,
              borderColor: "gray",
              borderRadius: 4,
              color: "black",
              paddingRight: 30,
            },
            inputAndroid: {
              fontSize: 16,
              paddingHorizontal: 10,
              paddingVertical: 8,
              borderWidth: 1,
              borderColor: "gray",
              borderRadius: 4,
              color: "black",
            },
          }}
          Icon={() => {
            return <Text style={{ fontSize: 20 }}>▼</Text>;
          }}
        />
      </View>

      {/* Public Transport Frequency Picker */}
      <View className="w-full mb-6">
        <Text className="text-lg text-gray-700 mb-2">
          Public Transport Usage
        </Text>
        <RNPickerSelect
          onValueChange={(value) => setPublicTransport(value)}
          items={[
            { label: "Daily", value: "daily" },
            { label: "Often", value: "often" },
            { label: "Rarely", value: "rarely" },
          ]}
          value={publicTransport}
          style={{
            inputIOS: {
              fontSize: 16,
              paddingVertical: 12,
              paddingHorizontal: 10,
              borderWidth: 1,
              borderColor: "gray",
              borderRadius: 4,
              color: "black",
              paddingRight: 30,
            },
            inputAndroid: {
              fontSize: 16,
              paddingHorizontal: 10,
              paddingVertical: 8,
              borderWidth: 1,
              borderColor: "gray",
              borderRadius: 4,
              color: "black",
            },
          }}
          Icon={() => {
            return <Text style={{ fontSize: 20 }}>▼</Text>;
          }}
        />
      </View>

      <TouchableOpacity
        className="bg-green-700 py-4 px-10 rounded-full shadow-lg mb-6"
        onPress={calculateCarbon}
        activeOpacity={0.8}
      >
        <Text className="text-white text-lg">Calculate</Text>
      </TouchableOpacity>

      {carbonFootprint !== null && (
        <View className="bg-white p-4 mb-10 rounded-lg shadow-lg">
          <Text className="text-xl text-gray-900">Your Carbon Footprint:</Text>
          <Text className="text-2xl text-green-700 font-bold mt-2">
            {carbonFootprint} kg CO2
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

const HomeScreen = () => {
  // code for Home screen
};

// Sample Leaderboard Data
const leaderboardData = [
  { name: "Chris", rank: 1, carbonEmission: 120 },
  { name: "Harsh", rank: 2, carbonEmission: 135 },
  { name: "Reniyas", rank: 3, carbonEmission: 145 },
  { name: "Russel", rank: 4, carbonEmission: 160 },
  { name: "Rohan", rank: 5, carbonEmission: 180 },
];

// Leaderboard Component
const Leaderboard = () => {
  return (
    <View className="flex-1 px-6 py-4 bg-gradient-to-b from-green-200 to-green-400">
      <Text className="text-4xl font-bold text-gray-900 mb-6 text-center">
        Leaderboard
      </Text>

      <FlatList
        data={leaderboardData}
        keyExtractor={(item) => item.rank.toString()}
        renderItem={({ item }) => (
          <View className="flex-row justify-between items-center bg-white p-4 mb-3 rounded-lg shadow-lg">
            <Text className="text-lg text-gray-900">
              {item.rank}. {item.name}
            </Text>
            <Text className="text-lg text-gray-700">
              {item.carbonEmission} kg CO2
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const Tab = createBottomTabNavigator();
// Main App Component with Navigation
const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="Calculator"
          component={CarbonCalculator}
          options={{ title: "Carbon Calculator" }}
        />
      </Stack.Navigator> */}

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Leaderboard") {
              iconName = focused ? "stats-chart" : "stats-chart-outline";
            } else if (route.name === "Calculator") {
              iconName = focused ? "calculator" : "calculator-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={LandingPage} />
        <Tab.Screen name="Leaderboard" component={Leaderboard} />
        <Tab.Screen name="Calculator" component={CarbonCalculator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
