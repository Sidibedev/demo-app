import Loader from './components/Loader';
import Register from './screens/Register';
import {
  useFonts,
  Outfit_300Light,
  Outfit_400Regular,
  Outfit_500Medium,
  Outfit_700Bold,
} from '@expo-google-fonts/outfit';

export default function App() {
  let [fontsLoaded] = useFonts({
    Outfit_300Light,
    Outfit_400Regular,
    Outfit_500Medium,
    Outfit_700Bold,
  });

  if(!fontsLoaded) return <Loader />;
  return (
      <Register />
  );
}

