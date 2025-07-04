import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class AuthService {
  private supabase: SupabaseClient | null;

  constructor() {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;

    if (
      supabaseUrl &&
      supabaseKey &&
      supabaseUrl !== 'https://your-project.supabase.co'
    ) {
      this.supabase = createClient(supabaseUrl, supabaseKey);
      console.log('✅ Supabase configuré avec succès pour AIDD');
    } else {
      console.log(
        '⚠️  Supabase non configuré - utilisation du mode développement local'
      );
      this.supabase = null;
    }
  }

  async signUp(email: string, password: string) {
    if (!this.supabase) {
      // Mode développement local - simulation d'une réponse
      return {
        user: { id: 'local-user', email },
        message: 'Compte créé en mode local',
      };
    }

    try {
      const { data, error } = await this.supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        throw new Error(error.message);
      }

      return {
        user: data.user,
        message: data.user?.email_confirmed_at
          ? 'Compte créé avec succès'
          : 'Compte créé. Vérifiez votre email pour confirmer votre compte.',
      };
    } catch (error) {
      throw new Error(`Erreur lors de la création du compte: ${error.message}`);
    }
  }

  async signIn(email: string, password: string) {
    if (!this.supabase) {
      // Mode développement local - simulation d'une réponse
      return {
        user: { id: 'local-user', email },
        session: { access_token: 'local-token' },
        message: 'Connexion réussie en mode local',
      };
    }

    try {
      const { data, error } = await this.supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw new Error(error.message);
      }

      if (!data.user) {
        throw new Error('Identifiants invalides');
      }

      return {
        user: data.user,
        session: data.session,
        message: 'Connexion réussie',
      };
    } catch (error) {
      throw new Error(`Erreur lors de la connexion: ${error.message}`);
    }
  }
}
