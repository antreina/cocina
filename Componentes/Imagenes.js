import * as React from 'react';
import { StyleSheet,Image} from 'react-native';
import Styles from '../pantallas/Styles';


export function Imagenes(props){
    const {texto} = props;
    return (
        <Image 
            style={Styles.estiloimag}
            source={texto}
        />

    );
}
