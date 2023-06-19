import React from "react";
import { View, StyleSheet } from "react-native";
import Calendar from "../Components/Calendar";
import NavigationBar from "../Components/NavBar";
import { useNavigation } from "@react-navigation/native";

// Import the ShiftButton component
import ShiftButton from "../Components/ShiftButton";
import companyLogo from "../assets/starbucks.png";

const ScheduleScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.background}>
      <Calendar style={styles.calendar}> </Calendar>
      <View style={styles.container}>
        <View style={styles.backgroundShape}> </View>
        <View style={styles.header}> My Shifts </View>

        <View style={styles.buttonContainer}>
          {/* Example usage of the ShiftButton component */}
          <ShiftButton
            logo={companyLogo}
            branch="Starbucks - Jem"
            role="Barista"
            date="June 19, 2023"
            timing="09:00 - 17:00 | 8h"
          />

          <ShiftButton
            logo={companyLogo}
            branch="Starbucks - IMM"
            role="Cashier"
            date="June 20, 2023"
            timing="10:00 - 18:00 | 8h"
          />

          <ShiftButton
            logo={companyLogo}
            branch="Starbucks - Jem"
            role="Barista"
            date="June 22, 2023"
            timing="12:00 - 19:00 | 7h"
          />

          {/* Add more ShiftButton components as needed */}
        </View>
      </View>
      <NavigationBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center", // vertical alignment
    alignItems: "center", // horizontal alignment
    backgroundColor: "#D2B48C",
  },

  backgroundShape: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    backgroundColor: "#FFFFFF", // Set your desired background shape color
    shadowColor: "#555555",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    transform: [{ translateY: 0 }],
    borderRadius: 30,
  },

  header: {
    fontSize: 14,
    fontWeight: "bold",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "left",
    paddingBottom: 20,
    fontFamily: "Inter",
  },

  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 10,
  },

  buttonContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },

  calendar: {
    width: "100%",
    marginBottom: 20,
  },
});

export default ScheduleScreen;
