# 1. Duplicate the project
cp -r prodev-mobile-app-0x04 prodev-mobile-app-0x05
cd prodev-mobile-app-0x05

# 2. Create the Tab Group and Screen files
mkdir -p app/\(home\)
touch app/\(home\)/_layout.tsx
touch app/\(home\)/index.tsx
touch app/\(home\)/profile.tsx
touch app/\(home\)/saved.tsx
touch app/\(home\)/search.tsx
touch app/\(home\)/inbox.tsx

# 3. Create Components and Interfaces folders
mkdir -p components/common
mkdir -p interfaces
touch components/common/PropertyListingCard.tsx
touch components/PropertyListing.tsx
touch interfaces/index.ts
touch constants/data.ts
touch styles/_propertyCardStyle.ts

#app/(home)/_layout.tsx
import { AntDesign, EvilIcons, Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const HomeRootLayout = () => {
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: '#34967C',
        headerShown: false
    }} >
      <Tabs.Screen name="index" options={{
        title: 'Home',
        tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
      }} />
      <Tabs.Screen name="search" options={{
        title: 'Search',
        headerShown: true,
        tabBarIcon: ({ color }) => <Feather name="search" size={24} color={color} />,
      }} />
      <Tabs.Screen name="saved" options={{
        title: 'Saved',
        headerShown: true,
        tabBarIcon: ({ color }) => <EvilIcons name="heart" size={27} color={color} />
      }} />
      <Tabs.Screen name="inbox" options={{
        title: 'Inbox',
        headerShown: true,
        tabBarIcon: ({ color }) => <Ionicons name="chatbubbles-outline" size={24} color={color} />
      }} />
      <Tabs.Screen name="profile" options={{
        title: 'Profile',
        headerShown: true,
        tabBarIcon: ({ color }) => <FontAwesome name="user-o" size={24} color={color} />
      }} />
    </Tabs>
  )
}

export default HomeRootLayout;

#app/(home)/index.tsx

#interfaces/index.ts
export interface PropertyLocationProps {
    street: string;
    city: string;
    country: string;
}

export interface PropertyListingProps {
    propertyName: string;
    rate: number;
    currency: string;
    amount: number;
    location: PropertyLocationProps;
    favorite: boolean;
    image?: string;
}

export interface PropertListing {
    listings: PropertyListingProps[];
}

constants/data.ts

components/common/PropertyListingCard.tsx

# Start the expo server
npx expo start

