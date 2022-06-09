import { Module } from '@nestjs/common';
import { PurchasesController } from './controllers/purchases.controller';

// HTTP (MVC)

@Module({
  controllers: [PurchasesController], // controllers no Nest não é igual MVC comum
  /**
   * Neste caso o controller vai servir para receber mensagens do Kafka
   */
})
export class MessagingModule {}
