import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Mostrar } from '../src/api/api.js';
import { eliminar } from '../src/api/api.js';

function VerContactos() {
  const [contactos, setContactos] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    obtenerContactos();
  }, []);

  const obtenerContactos = async () => {
    try {

      const data = await Mostrar();

      setContactos(data.data);
    } catch (error) {
      console.error('Error al obtener data:', error);
    }
  };

  const eliminarContacto = async (id) => {
    try {
      const data = {
        id: id
      }

      const eliminarContacto = await eliminar(data);
      if(eliminarContacto.data == 'ok'){
        alert('Contacto eliminado con exito')
      } 
    } catch (error) {
      console.error('Error al obtener data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Contactos</Text>
      <FlatList
        data={contactos}
        renderItem={({ item }) => (
          <View>
            <View style={styles.contacto}>
              <Text>{`${item.nombre} ${item.apellido}`}</Text>
              <Text>{item.telefono}</Text>
              <TouchableOpacity onPress={() => eliminarContacto(item.id)}>
                <Text style={styles.eliminar}>Eliminar</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.separador}></View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity
        style={styles.agregarButton}
        onPress={() => navigation.navigate('Contactos')}
      >
        <AntDesign name="plus" size={24} />
      </TouchableOpacity>
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
  contacto: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'lightblue',
    paddingBottom: 8,
  },
  eliminar: {
    color: 'white',
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },
  separador: {
    height: 1,
    backgroundColor: 'lightblue',
    marginBottom: 8,
  },
  agregarButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'lightblue',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default VerContactos;
