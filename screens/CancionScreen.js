import React, { useEffect } from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TrackPlayer, { useProgress } from "react-native-track-player";
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';

const tracks = [
    {
        id: 1,
        url: require('../src/musica/shapeofyou.mp3'),
        title: 'Shape of you',
        artist: 'Ed Sheeran',
    }
]

async function addTrack() {
    await TrackPlayer.add(tracks);
}

togglePlayPause = async () => {
    if (this.state.isPlaying) {
        await TrackPlayer.pause();
    } else {
        await TrackPlayer.play();
    }
    this.setState((prevState) => ({
        isPlaying: !prevState.isPlaying,
    }));
};

TrackPlayer.addEventListener('playback-state', (data) => {
    // Manejar el cambio de estado de reproducción aquí
    console.log('Nuevo estado de reproducción:', data.state);
});
const numeroAlAzar = Math.floor(Math.random() * 10);

const CancionScreen = ({ route }) => {
    addTrack();
    const { album } = route.params;
    const navigation = useNavigation();
    const { position, buffered, duration } = useProgress()
    const handleSeek = (value) => {
        TrackPlayer.seekTo(value);
    };    
    //console.log(album.songs[0].title);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Album', { album })}
                >
                    <Icon2 name="caret-back-circle" size={30} color="#fff" style={styles.iconBack} />
                </TouchableOpacity>
            </View>

            <View style={styles.contenido}>
                <Image
                    source={require('../src/img/song.jpg')}
                    style={styles.albumCover}
                />

                <Text style={styles.songTitle}>{album.songs[numeroAlAzar].title}</Text>

                <Text style={styles.artistName}>{album.autor}</Text>
                <View style={styles.controls}>
                    <Icon2 name="play-skip-back-circle" size={30} color="#000" />
                    <TouchableOpacity onPress={() => TrackPlayer.play()}>
                        <Icon name="play-circle" size={30} color="#000" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => TrackPlayer.pause()}>
                        <Icon2 name="pause-circle-outline" size={30} color="#000" />
                    </TouchableOpacity>
                    <Icon2 name="play-skip-forward-circle" size={30} color="#000" />
                </View>
                <View>
                    <Slider style={{ width: 250, }}
                        value={position}
                        minimumValue={0}
                        maximumValue={duration}
                        onValueChange={handleSeek}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'blue',
        color: '#fff',
        width: '100%',
        height: 75,
        padding: '5%',
        justifyContent: 'flex-start',
    },
    contenido: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 50,
    },
    albumCover: {
        width: 400,
        height: 400,
    },
    songTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
    },
    artistName: {
        fontSize: 18,
        marginTop: 10,
    },
    controls: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    playPauseButton: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'blue',
    },
});
export default CancionScreen;