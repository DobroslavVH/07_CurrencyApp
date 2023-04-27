import { QueryClientProvider } from 'react-query'
import { reactQuery } from '../core/query';
import CurrencyProvider from '../context/CurrencyContext/Provider';
import BottomNavigator from '../navigation/BottomNavigator';

import { LogBox } from 'react-native';

LogBox.ignoreAllLogs()

export default function App() {
  return (
    <QueryClientProvider client={reactQuery}>
      <CurrencyProvider>
        <BottomNavigator />
      </CurrencyProvider>
    </QueryClientProvider>
  )
}

