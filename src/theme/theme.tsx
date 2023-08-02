import {StyleSheet} from "react-native";

export const colors = {
  primary: "#5856d6",
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  flexRow: {
    flexDirection: "row",
    marginTop: 10,
  },
  bigButton: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  primaryColor: {
    backgroundColor: "#5856d6",
  },
  secondaryColor: {
    backgroundColor: "#ff9427",
  },
  bigButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 50,
  },
  menuLink: {
    marginVertical: 10,
    backgroundColor: "#2a7bcb",
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
    flexDirection: "row",
  },
  menuLinkText: {
    fontSize: 16,
    color: "#fff",
    marginLeft: 4,
  },
});
