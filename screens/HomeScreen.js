import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RockData } from "../src/data/rock_data";
import { LatinasData } from "../src/data/latinas_data";
import { HitsPopData } from "../src/data/hitsPop_data";

const HomeScreen = () => {
    const navigation = useNavigation();
    const [albums, setAlbums] = useState([]);
    const [albums2, setAlbums2] = useState([]);
    const [albums3, setAlbums3] = useState([]);

    useEffect(() => {
        setAlbums(RockData);
        setAlbums2(LatinasData);
        setAlbums3(HitsPopData);
    }, []);
    return (
        <ScrollView>
            <Text style={styles.title}>MUSIC UDB</Text>
            <View style={styles.contenidoGenero}>
                <Text style={styles.titleContenido}>ROCK</Text>

                <ScrollView
                    horizontal
                    contentContainerStyle={{ alignItems: 'center' }} // Alinea los álbumes al centro horizontalmente
                >
                    {albums.map((album) => (
                        <TouchableOpacity
                            key={album.id}
                            onPress={() => navigation.navigate('Album', { album })}
                        >
                            <View style={{ marginRight: 20, alignItems: 'center' }}>
                                <Image
                                    source={album.urlImagen}
                                    style={{ width: 150, height: 150, borderRadius: 10 }}
                                />
                                <Text style={styles.albumNombre}>{album.title}</Text>
                                <Text style={styles.albumAutor}>{album.autor}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            <View style={styles.contenidoGenero}>
                <Text style={styles.titleContenido}>LATINA</Text>

                <ScrollView
                    horizontal
                    contentContainerStyle={{ alignItems: 'center' }} // Alinea los álbumes al centro horizontalmente
                >
                    {albums2.map((album) => (
                        <TouchableOpacity
                            key={album.id}
                            onPress={() => navigation.navigate('Album', { album })}
                        >
                            <View style={{ marginRight: 20, alignItems: 'center' }}>
                                <Image
                                    source={album.urlImagen}
                                    style={{ width: 150, height: 150, borderRadius: 10 }}
                                />
                                <Text style={styles.albumNombre}>{album.title}</Text>
                                <Text style={styles.albumAutor}>{album.autor}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            <View style={styles.contenidoGenero}>
                <Text style={styles.titleContenido}>HITS POP</Text>

                <ScrollView
                    horizontal
                    contentContainerStyle={{ alignItems: 'center' }} // Alinea los álbumes al centro horizontalmente
                >
                    {albums3.map((album) => (
                        <TouchableOpacity
                            key={album.id}
                            onPress={() => navigation.navigate('Album', { album })}
                        >
                            <View style={{ marginRight: 20, alignItems: 'center' }}>
                                <Image
                                    source={album.urlImagen}
                                    style={{ width: 150, height: 150, borderRadius: 10 }}
                                />
                                <Text style={styles.albumNombre}>{album.title}</Text>
                                <Text style={styles.albumAutor}>{album.autor}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#fff',
        width: '100%',
    },
    title: {
        backgroundColor: 'blue',
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        width: '100%',
        height: 75,
        padding: '5%',
    },
    titleContenido: {
        fontSize: 20,
        fontWeight: 'bold',
        width: '100%',
        height: 50,
    },
    albumCovers: {
        width: 150,
        height: 150,
        margin: 10,
    },
    albumNombre: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 14,
    },
    albumAutor: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 13,
    },
    contenidoGenero: {
        padding: '5%',
    },
});

export default HomeScreen;