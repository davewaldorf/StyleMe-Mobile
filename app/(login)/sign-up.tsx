// import { useAuth } from '../../context/auth';
import { Text, View } from '../../components/Themed';

export default function SignUp() {
  // const { signIn } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <Text onPress={() => signIn()}>Sign In</Text> */}
      <Text>SignUp</Text>
    </View>
  );
}