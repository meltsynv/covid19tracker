import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "../styles/globalStyle";

// components
import LinkCard from "../components/linkCard";

const Notification = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{ marginBottom: 10 }}>
        <LinkCard linkTitle="Neue Maßnahmen" linkSource="land.nrw" />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={styles.h4}>Abstand zu den anderen:</Text>
        <Text style={styles.p}>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est eopksio laborum. Sed ut
          perspiciatis unde omnis istpoe natus error sit voluptatem accusantium
          doloremque eopsloi laudantium, totam rem aperiam, eaque ipsa quae ab
          illo inventore veritatis et quasi architecto beatae vitae dicta sunot
          explicabo.
        </Text>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={styles.h4}>Kontaktbeschränkung Draußen</Text>
        <Text style={styles.p}>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est eopksio laborum. Sed ut
        </Text>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={styles.h4}>Kontaktbeschränkung im eigenen Haushalt</Text>
        <Text style={styles.p}>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est eopksio laborum. Sed ut
          perspiciatis unde omnis istpoe natus error sit voluptatem accusantium
          doloremque eopsloi laudantium, totam rem aperiam, eaque ipsa quae ab
          illo inventore veritatis et quasi architecto beatae vitae dicta sunot
          explicabo.
        </Text>
      </View>
      <View style={{ marginBottom: 30 }}>
        <Text style={styles.h4}>Kontaktbeschränkung im eigenen Haushalt</Text>
        <Text style={styles.p}>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est eopksio laborum. Sed ut
          perspiciatis unde omnis istpoe natus error sit voluptatem accusantium
          doloremque eopsloi laudantium, totam rem aperiam, eaque ipsa quae ab
          illo inventore veritatis et quasi architecto beatae vitae dicta sunot
          explicabo.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Notification;
