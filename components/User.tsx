import { View, Text, Pressable } from 'react-native';
import { Avatar } from 'react-native-paper';

const User = (url: string) => {
    return (
              <Avatar.Image size={24} source={require(url)} />
    )
}

export default User;


