import { AuthProvider } from './auth';
import { AppRouter } from './router/AppRouter';

export const StarWarsApp = () => {
  return (
    <AuthProvider>

      <AppRouter/>

    </AuthProvider>
  )
}
