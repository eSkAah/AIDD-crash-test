import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() body: { email: string; password: string }) {
    try {
      if (!body.email || !body.password) {
        throw new HttpException(
          'Email et mot de passe requis',
          HttpStatus.BAD_REQUEST
        );
      }

      if (body.password.length < 6) {
        throw new HttpException(
          'Le mot de passe doit contenir au moins 6 caractères',
          HttpStatus.BAD_REQUEST
        );
      }

      const result = await this.authService.signUp(body.email, body.password);
      return {
        success: true,
        message: result.message,
        user: result.user,
      };
    } catch (error) {
      throw new HttpException(
        error.message || 'Erreur lors de la création du compte',
        HttpStatus.BAD_REQUEST
      );
    }
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    try {
      if (!body.email || !body.password) {
        throw new HttpException(
          'Email et mot de passe requis',
          HttpStatus.BAD_REQUEST
        );
      }

      const result = await this.authService.signIn(body.email, body.password);
      return {
        success: true,
        message: result.message,
        user: result.user,
        session: result.session,
      };
    } catch (error) {
      throw new HttpException(
        error.message || 'Erreur lors de la connexion',
        HttpStatus.UNAUTHORIZED
      );
    }
  }
}
