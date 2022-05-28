import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const CardComponent = () => {

  return (
    <>
      <Card>
        <Card.Title
          title="Transactions history"
          subtitle="These are your monthly and daily actions. ️📊"
        />
        <Card.Content
          style={[
            styles.card,
            {
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            },
          ]}
        >
          <View style={styles.viewContent}>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
          </View>
          <View style={styles.viewContent}>
            <Text>Hola</Text>
            <Text>Hola</Text>
            <Text>Hola</Text>
          </View>
        </Card.Content>
      </Card>
      <Card>
        <Card.Title
          title="Transactions history"
          subtitle="These are your monthly and daily actions. ️📊"
        />
        <Button>Hola</Button>
        <Button>Hola</Button>
      </Card>
    </>
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  card: {
    display: "flex",
  },
  viewContent: {
    flex: 1, 
    backgroundColor: "blue", 
    display: "flex",
    flexDirection: "column", 
    alignItems: "center" 
  },
});
