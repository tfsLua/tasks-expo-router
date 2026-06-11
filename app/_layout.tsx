import { Tabs } from 'expo-router';
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

export default function Layout() {
  return (
    <GluestackUIProvider config={config}>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Minhas Tarefas',
          }}
        />

        <Tabs.Screen
          name="settings"
          options={{
            title: 'Configurações',
          }}
        />
      </Tabs>
    </GluestackUIProvider>
  );
}
