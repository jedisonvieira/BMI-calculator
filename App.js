import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

export default function App() {
  const MAGREZA_GRAVE = "Magreza grave";
  const MAGREZA_MODERADA = "Magreza moderada";
  const MAGREZA_LEVE = "Magreza leve";
  const SAUDAVEL = "Saudável";
  const SOBREPESO = "Sobrepeso";
  const OBESIDADE_GRAU_1 = "Obesidade grau 1";
  const OBESIDADE_GRAU_2 = "Obesidade severa";
  const OBESIDADE_GRAU_3 = "Obesidade mórbida";

  const [imc, setImc] = useState(0);
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [classificacao, setClassificacao] = useState("");

  const calcularHandler = () => {
    const newImc = parseFloat(peso / Math.pow(altura, 2));
    setImc(newImc);

    if (newImc < 16) {
      setClassificacao(MAGREZA_GRAVE);
    } else if (newImc >= 16 && newImc < 17) {
      setClassificacao(MAGREZA_MODERADA);
    } else if (newImc >= 17 && newImc < 18.5) {
      setClassificacao(MAGREZA_LEVE);
    } else if (newImc >= 18.5 && newImc < 25) {
      setClassificacao(SAUDAVEL);
    } else if (newImc >= 25 && newImc < 30) {
      setClassificacao(SOBREPESO);
    } else if (newImc >= 30 && newImc < 35) {
      setClassificacao(OBESIDADE_GRAU_1);
    } else if (newImc >= 35 && newImc < 40) {
      setClassificacao(OBESIDADE_GRAU_2);
    } else if (newImc >= 40) {
      setClassificacao(OBESIDADE_GRAU_3);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Calcule o seu IMC</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.body}>
        <TextInput
          value={peso}
          style={styles.info}
          placeholder="peso"
          keyboardType="numeric"
          onChangeText={(peso) => {
            setPeso(peso);
          }}
        ></TextInput>
        <TextInput
          value={altura}
          style={styles.info}
          placeholder="altura"
          keyboardType="numeric"
          onChangeText={(altura) => {
            setAltura(altura);
          }}
        ></TextInput>
        <View style={styles.buttons}>
          <View style={styles.calcular}>
            <Button
              title="Calcular"
              onPress={() => {
                if (peso && altura) calcularHandler();
              }}
            ></Button>
          </View>
          <View style={styles.limpar}>
            <Button
              title="Limpar"
              onPress={() => {
                setImc(0);
                setPeso(0);
                setAltura(0);
                setClassificacao("");
              }}
            ></Button>
          </View>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.footer}>
        {classificacao && (
          <View>
            <Text style={{ fontSize: 24 }}>Resultado</Text>
            <Text style={styles.results}>{parseFloat(imc).toFixed(2)}</Text>
            <Text style={styles.results}>{classificacao}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flex: 1,
    padding: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 26,
  },
  body: {
    flex: 4,
    padding: 14,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  info: {
    margin: 14,
    padding: 10,
    width: "75%",
    borderWidth: 1,
    borderRadius: 36,
    borderColor: "black",
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  calcular: { margin: 14 },
  limpar: { margin: 14 },
  footer: {
    flex: 4,
    padding: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  results: {
    fontSize: 36,
    color: "deeppink",
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
});
