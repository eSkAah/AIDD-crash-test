import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '../ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Input } from '../ui/Input';

const authSchema = z.object({
  email: z.string().email({ message: 'Email invalide' }),
  password: z.string().min(6, { message: '6 caractères minimum' }),
});

type AuthFormData = z.infer<typeof authSchema>;

const AuthForm = () => {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AuthFormData>({
    resolver: zodResolver(authSchema),
  });

  const onSubmit = async (data: AuthFormData) => {
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const endpoint = mode === 'login' ? '/auth/login' : '/auth/signup';
      const res = await fetch(`http://localhost:3333${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.message || 'Erreur serveur');
      setSuccess(mode === 'login' ? 'Connexion réussie !' : 'Inscription réussie !');
      reset();
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setMode(mode === 'login' ? 'register' : 'login');
    setError('');
    setSuccess('');
    reset();
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="">
        <CardTitle className="">
          {mode === 'login' ? 'Connexion' : 'Inscription'}
        </CardTitle>
      </CardHeader>
      <CardContent className="">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            label="Email"
            type="email"
            autoComplete="email"
            error={errors.email?.message}
            {...register('email')}
          />
          <Input
            label="Mot de passe"
            type="password"
            autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
            error={errors.password?.message}
            {...register('password')}
          />
          <Button
            type="submit"
            variant="primary"
            className="w-full"
            disabled={loading}
          >
            {loading ? 'Chargement...' : mode === 'login' ? 'Se connecter' : 'Créer un compte'}
          </Button>
          {error && <div className="form-error text-center">{error}</div>}
          {success && <div className="form-success text-center">{success}</div>}
        </form>
        <div className="mt-6 text-center">
          <span className="text-aidd-gray-dark">
            {mode === 'login' ? 'Pas encore de compte ?' : 'Déjà inscrit ?'}
          </span>
          {' '}
          <button
            type="button"
            onClick={toggleMode}
            className="text-aidd-yellow font-semibold hover:underline"
          >
            {mode === 'login' ? "S'inscrire" : 'Se connecter'}
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export { AuthForm };
