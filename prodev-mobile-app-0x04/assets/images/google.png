# Create the project
npx create-expo-app@latest prodev-mobile-app-0x04

# Enter the directory
cd prodev-mobile-app-0x04

# Reset the boilerplate to a clean state
npm run reset-project

# Install Vector Icons (required for the UI)
npm install @expo/vector-icons

# Create folders
mkdir styles
mkdir constants

# Create the screen files in app/
touch app/join.tsx
touch app/signin.tsx

# Create the style and constant files
touch constants/index.ts
touch styles/_mainstyle.ts
touch styles/_joinstyle.ts

// app/_layout.tsx
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="join" />
      <Stack.Screen name="signin" />
    </Stack>
  );
}

# app/index.tsx
import { useRouter } from "expo-router";
// ... inside your component
const router = useRouter();

// Inside your Button component
<TouchableOpacity onPress={() => router.push("/join")}>
  <Text>Join Now</Text>
</TouchableOpacity>

npx expo start

# Ensure you are in the project root
# prodev-mobile-app-0x04

touch app/join.tsx
touch app/signin.tsx

#app/signin.tsx
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '@/styles/_joinstyle';
import { HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO } from '@/constants';
import { Ionicons } from '@expo/vector-icons';

export default function SignIn() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.iconsection}>
        <Ionicons name="arrow-back" size={24} color="black" onPress={() => router.back()} />
        <Image source={HEROLOGOGREEN} />
        <View style={{ width: 24 }} /> 
      </View>

      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Sign In</Text>
        <Text style={styles.subText}>Welcome back, please sign in to continue.</Text>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Email</Text>
        <TextInput style={styles.formControl} placeholder="Enter your email" />
        
        <Text style={styles.formLabel}>Password</Text>
        <View style={styles.formPasswordControl}>
          <TextInput style={styles.passwordControl} placeholder="Enter password" secureTextEntry />
          <Ionicons name="eye-off" size={20} color="#7E7B7B" />
        </View>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </View>

      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.dividerGroup}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.divider} />
      </View>

      <View style={styles.secondaryButtonGroup}>
        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={GOOGLELOGO} />
          <Text style={styles.secondaryButtonText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={FACEBOOKLOGO} />
          <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => router.push('/join')}>
          <Text style={styles.signupSubTitleText}>Join Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

#app/join.tsx
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '@/styles/_joinstyle';
import { HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO } from '@/constants';
import { Ionicons } from '@expo/vector-icons';

export default function Join() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.iconsection}>
        <Ionicons name="arrow-back" size={24} color="black" onPress={() => router.back()} />
        <Image source={HEROLOGOGREEN} />
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Join Now</Text>
        <Text style={styles.subText}>Create an account to start your journey.</Text>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Full Name</Text>
        <TextInput style={styles.formControl} placeholder="Enter your full name" />

        <Text style={styles.formLabel}>Email</Text>
        <TextInput style={styles.formControl} placeholder="Enter your email" />
        
        <Text style={styles.formLabel}>Password</Text>
        <View style={styles.formPasswordControl}>
          <TextInput style={styles.passwordControl} placeholder="Create password" secureTextEntry />
          <Ionicons name="eye-off" size={20} color="#7E7B7B" />
        </View>
      </View>

      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Join Now</Text>
      </TouchableOpacity>

      <View style={styles.dividerGroup}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.divider} />
      </View>

      <View style={styles.secondaryButtonGroup}>
        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={GOOGLELOGO} />
          <Text style={styles.secondaryButtonText}>Sign up with Google</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => router.push('/signin')}>
          <Text style={styles.signupSubTitleText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

