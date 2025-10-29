export class Config {
    static readonly baseUrl = 'https://www.service.nsw.gov.au/transaction/check-motor-vehicle-stamp-duty';
    static readonly purchase_price = 5000.00;
    static get duty_payable(): number {
        return Config.purchase_price * 3 / 100;
    }
}