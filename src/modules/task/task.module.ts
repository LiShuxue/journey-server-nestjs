import { Module } from '@nestjs/common';
import { BackupTaskService } from './backupTask.service';
import { CommonModule } from '../common/common.module';
import { EmailModule } from '../email/email.module';
import { SendEamilTaskService } from './sendEmailTask.service';

@Module({
  imports: [CommonModule, EmailModule],
  providers: [BackupTaskService, SendEamilTaskService],
})
export class TasksModule {}
