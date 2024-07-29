import { DataService } from './data';

export class App {
  public run(): void {
    const data = new DataService();
    data.init();
  }
}
