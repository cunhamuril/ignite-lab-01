import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';

import { CoursesService } from 'src/services/courses.service';
import { EnrollmentsService } from 'src/services/enrollments.service';
import { StudentsService } from 'src/services/students.service';

import { PurchasesController } from './controllers/purchases.controller';

// HTTP (MVC)

@Module({
  imports: [DatabaseModule],
  /**
   * Controllers no Nest não é igual MVC comum.
   * Neste caso o controller vai servir para receber mensagens do Kafka
   */
  controllers: [PurchasesController],
  /** */
  providers: [StudentsService, CoursesService, EnrollmentsService],
})
export class MessagingModule {}
