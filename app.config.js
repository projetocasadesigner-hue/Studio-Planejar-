import 'dotenv/config';
export default {
  expo: {
    name: 'Orçamentos Marcenaria',
    slug: 'marcenaria-orcamentos',
    scheme: 'orcamentos',
    version: '1.0.0',
    orientation: 'portrait',
    updates: { fallbackToCacheTimeout: 0 },
    assetBundlePatterns: ['**/*'],
    ios: { supportsTablet: true, bundleIdentifier: 'com.studioplanejar.orcamentos' },
    android: { package: 'com.studioplanejar.orcamentos' },
    plugins: [
      ['expo-build-properties', { ios: { useFrameworks: 'static' } }]
    ],
    extra: {
      eas: { projectId: 'REPLACE_WITH_EAS_PROJECT_ID' },
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY
    }
  }
};
