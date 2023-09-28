import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon4 from 'react-native-vector-icons/Ionicons';

const AlbumScreen = ({ route }) => {
    const navigation = useNavigation();
    const { album } = route.params;

    return (
        <View style={styles.contenedor}>
            <ScrollView style={styles.contenedorCanciones}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Icon4 name="caret-back-circle" size={30} color="#fff" style={styles.iconBack} />
                    </TouchableOpacity>
                    <Text style={styles.title}>
                        {album.title}
                    </Text>
                </View>

                <View style={styles.contenedorAlbum}>
                    <Image
                        source={album.urlImagen}
                        style={{ width: 250, height: 250, borderRadius: 10 }}
                    />

                </View>

                <View>
                    {album.songs.map((song) => (
                        <View key={song.id} style={styles.viewCanciones}>
                            <View>
                                <Text style={styles.viewText}>{song.title}</Text>
                                <Text style={styles.viewText}>{album.autor}</Text>
                            </View>
                            <View style={styles.iconosCancion}>
                                <View style={styles.row}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Cancion', { album })}
                                    >
                                        <Icon name="play-circle" size={30} color="#000" />
                                    </TouchableOpacity>
                                    <Icon2 name="block" size={30} color="#000" />
                                    <Icon3 name="favorite" size={30} color="#000" />
                                </View>
                            </View>
                        </View>
                    ))}

                </View>
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconBack: {
        backgroundColor: 'blue',
        height: 75,
        padding: '5%',
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
    contenedor: {
        flex: 1,
        width: '100%',
    },
    contenedorAlbum: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 20,
    },
    viewCanciones: {
        marginBottom: 5,
        marginRight: 10,
        marginLeft: 10,
        padding: 4,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    viewText: {
        marginBottom: 5,
    },
    iconosCancion: {
        flex: 1,
        marginLeft: 8,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
})

export default AlbumScreen;