import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../accounts.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();
  constructor(private loggingService: LoggingService,
              private accountService: AccountService
    ) { }

  ngOnInit() {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    // const service = new LoggingService();
    // service.logStatusChange(accountStatus);
    this.accountService.addAccount(accountName,accountStatus);
    this.loggingService.logStatusChange(accountStatus);
  }

}
