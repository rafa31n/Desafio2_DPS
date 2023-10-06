import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { contacto } from '../src/api/api.js';

function AgregarContacto({ navigation }) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleAgregarContacto = async () => {
    try {

      const data = {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
      }

      const createContact = await contacto(data);
      const dataContact = createContact.data

      if (dataContact == 'ok') {
        alert('Contacto creado.')
        navigation.navigate('verContactos')
      }

    } catch (error) {
      console.error('Error al agregar contacto:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Agregar Contacto</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={(text) => setNombre(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Apellido"
        value={apellido}
        onChangeText={(text) => setApellido(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        value={telefono}
        onChangeText={(text) => setTelefono(text)}
      />
      <Button title="Agregar Contacto" onPress={handleAgregarContacto} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  titulo: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
});

export default AgregarContacto;
